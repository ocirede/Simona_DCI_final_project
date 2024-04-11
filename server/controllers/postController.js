import Post from "../models/postSchema.js";
import User from "../models/userSchema.js";
import cloudinaryV2 from "../config/cloudinary.js";


export const createPost = async (req, res) => {
    try {
      if (req.file) req.body.postImage = req.file.path;
      const newPost = await Post.create(req.body);
      await newPost.save();
      await newPost.populate("createdBy");
      res.status(200).json({ success: true, offer: newPost });
      console.log("New post created successfully:", newPost);
    } catch (error) {
      console.error("Error creating the new post");
      res.status(500).json({ success: false, error: error.message });
    }
  };



export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("createdBy");
        res.status(200).json({success: true, offers: posts });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch offers', details: error });
    }
};
//Update post
export const updatePost = async (req, res) => {
    const { id } = req.params;
    try {
      if (req.file) {
        const post = await Post.findById(id);
        if (post.postImage) {
          const filename = post.postImage.split("/").pop();
          const publicId = filename.split(".")[0];
          if (publicId) {
            cloudinaryV2.uploader
              .destroy(`Simona_Final_Project/post_images/${publicId}`)
              .then((result) =>
                console.log("Post image deleted result:", result)
              );
          }
        }
        req.body.postImage = req.file.filename;
      }
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
     
      await updatedPost.populate("createdBy");
      res.status(200).json({
        success: true,
        updatedPost,
      });
      console.log("Product updated successfully:", updatedPost);
    } catch (error) {
      console.error("Error updating the post", error);
      res.status(500).json({ success: false, error });
    }
  };


// delete post
export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Post.findById(id);
      if (post.postImage) {
        const filename = post.postImage.split("/").pop();
        const publicId = filename.split(".")[0];
        if (publicId) {
          cloudinaryV2.uploader
            .destroy(`Simona_Final_Project/post_images/${publicId}`)
            .then((result) => console.log("Post image deleted result:", result));
        }
      }
      const deletedPost = await Post.findByIdAndDelete(id);
      
      res
        .status(200)
        .json({ success: true, message: "Offer deleted successfully!",deletedOffer: deletedPost });
    } catch (error) {
      console.log("Error deleting the post:", error);
      res.status(500).json({ success: false, error });
    }
  };

// apply offer 
export const applyOffer = async (req, res) => {
  const { applicantId, offerId } = req.body;

  try {
    const applicant = await User.findById(applicantId);
    if (!applicant) {
      return res.status(404).send({
        success: false,
        error: "applicant not found",
      });
    }

    const offer = await Post.findById(offerId);
    if (!offer) {
      return res.status(404).send({
        success: false,
        error: "offer not found",
      });
    }

    applicant.favOffers = applicant.favOffers.filter(
      (id) => id.toString() !== offerId.toString()
    );

   
    offer.applicants.push(applicantId);


    await applicant.save();
    await offer.save();
    await applicant.populate("favOffers");
    await applicant.populate("sentRequests");
    await applicant.populate("pendingRequests");
    await applicant.populate("connections");
    await offer.populate("applicants")
    await offer.populate("createdBy");


    res.send({
      success: true,
      applicant,
      offer
    });
  } catch (error) {
    console.error("Error accepting offer request", error.message);
    res.status(500).send({ success: false, error: error.message });
  }
};

