import Rating from "../models/ratingSchema.js";
import User from "../models/userSchema.js";

//ad a new rating
export const addNewRating = async (req, res) => {
  try {
    const { userId, ratedUserId, ratingNumber, comment } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({
        success: false,
        error: "Rater not found.",
      });
    }

    const ratedUser = await User.findById(ratedUserId);

    if (!ratedUser) {
      return res.status(404).send({
        success: false,
        error: "Rated user not found.",
      });
    }

    const newRating = new Rating({
      rater: userId,
      ratedUser: ratedUserId,
      ratingNumber,
      comment,
    });

    await newRating.populate("rater");
    await newRating.populate("ratedUser");

    await newRating.save();

    // Calculate the updated average rating for the rated user
    const ratings = await Rating.find({ ratedUser: ratedUserId });
    const totalRating = ratings.reduce(
      (acc, curr) => acc + curr.ratingNumber,
      0
    );
    const averageRating = (totalRating / ratings.length).toFixed(2);

    //Update the averageRating field in the rated user
    await User.findByIdAndUpdate(ratedUserId, { averageRating }, { new: true });

    res.send({ success: true, newRating });
    console.log("New rating created successfully:", newRating);
  } catch (error) {
    console.error("Error creating the rating for the user");
    res.status(500).send({ success: false, error: error.message });
  }
};

//get rating for one user
export const getRatingsForUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const ratings = await Rating.find({ ratedUser: userId })
      .populate("rater")
      .populate("ratedUser");

    res.send({ success: true, ratings });
  } catch (error) {
    console.error("Error finding the ratings for this user");
    res.status(500).send({ success: false, error: error.message });
  }
};

//get best ratings
export const getBestRatedComments = async (req, res) => {
  const { role } = req.query;
  try {
    let filter = {};

    if (role) {
      filter.role = { $regex: role, $options: "i" };
    }
    const users = await Rating.find(filter);

    const bestComments = [];

    //not finished yet
  } catch (error) {
    console.error("Error fetching the top comments", error.message);
    res.send({ succsess: false, error: error.message });
  }
};
