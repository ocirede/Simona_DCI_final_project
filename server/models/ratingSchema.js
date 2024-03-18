import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
  {
    //The user that provides the rating
    rater: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    //the user that is being rated
    ratedUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    ratingNumber: { type: Number, required: true },
    comment: { type: String },
  },
  {
    timestamps: true,
  }
);

const Rating = mongoose.model("Rating", ratingSchema);

export default Rating;
