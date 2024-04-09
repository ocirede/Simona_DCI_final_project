import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
   
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    }, 

    file: {
      type: String
    },

    notifications: [
        {
          message: String,
          read: {
            type: Boolean,
            default: false
          },
          receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
          }
        }
      ]

    
}, {
    timestamps: true
});

const Message = mongoose.model("Message", messageSchema);

export default Message;