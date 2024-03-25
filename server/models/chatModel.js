import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema(
  {
    connections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const chatModel = mongoose.model("Chat", chatSchema);

export default chatModel;
