import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true }, // offer or seeking
    category: { type: String, required: true }, //for example music, paint ect to be able to search by category later
    postImage: { type: String },
    salary: { type: Number },
    skillsRequired: [{ type: String }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    status: { type: String, default:"open" }, //open or closed
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
