import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    categories: [{ type: String }],
    profileImage: { type: String },
    profileBackground: { type: String },
    verified: {
      type: Boolean,
      default: false,
    }, //this is going to be used for the email verification
    address: {
      firstname: String,
      lastname: String,
      street: String,
      city: String,
      postalCode: String,
      country: String,
      phone: String,
    },
    averageRating: { type: Number ,default: 0,},
    pendingRequests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    sentRequests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    connections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    skills: [
      {
        skill: { type: String },
        level: { type: String },
      },
    ],
    languages: [
      {
        language: { type: String },
        level: { type: String },
      },
    ],
    interests: [{ type: String }],
    personality: [{ type: String }],
    education: [
      {
        title: { type: String },
        description: { type: String },
      },
    ],

    about: { type: String },
    favOffers:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  

  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
