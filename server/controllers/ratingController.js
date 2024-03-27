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

    // Sort the array based on createdAt
    ratings.sort((a, b) => {
      // Sort if createdAt is not same between 2 ratings(newest first)
      const createdAtComparison = b.createdAt - a.createdAt;
      if (createdAtComparison !== 0) {
        return createdAtComparison;
      }
      // If createdAt is the same, sort by ratingNumber
      return b.ratingNumber - a.ratingNumber;
    });

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
    const users = await User.find(filter);

    if (!users) {
      return res.status(404).send({
        success: false,
        error: "Users not found.",
      });
    }

    const findRatingsForRole = [];

    // Iterate over each user for the choosen role
    for (const user of users) {
      // Find ratings for the one user
      const ratings = await Rating.find({ ratedUser: user._id })
        .populate("rater")
        .populate("ratedUser");

      // Push the ratings for the current user into the array
      findRatingsForRole.push(...ratings);

      // Sort the array based on createdAt
      findRatingsForRole.sort((a, b) => {
        // Sort if createdAt is not same between 2 ratings(newest first)
        const createdAtComparison = b.createdAt - a.createdAt;
        if (createdAtComparison !== 0) {
          return createdAtComparison;
        }
        // If createdAt is the same, sort by ratingNumber
        return b.ratingNumber - a.ratingNumber;
      });
    }

    // Sort the array based on ratingNumber of the ratings
    findRatingsForRole.sort((a, b) => b.ratingNumber - a.ratingNumber);

    // Store the top 4 ratings in the bestRatingsForRole array
    //The number can be adjusted
    const bestRatingsForRole = findRatingsForRole.slice(0, 4);

    res.send({ success: true, ratings: bestRatingsForRole });
  } catch (error) {
    console.error("Error fetching the top comments", error.message);
    res.send({ succsess: false, error: error.message });
  }
};
