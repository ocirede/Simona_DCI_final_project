import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    profileImage: { type: String },
    profileBackground: { type: String },
    address: {
      firstname: String,
      lastname: String,
      street: String,
      city: String,
      postalCode: String,
      country: String,
      phone: String,
    },
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
    interests: [
      {
        interest: { type: String },
      },
    ],
    personality: [
      {
        traits: { type: String },
      },
    ],

    education: [
      {
        title: { type: String },
        description: { type: String },
      },
    ],

    about: { type: String },
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
