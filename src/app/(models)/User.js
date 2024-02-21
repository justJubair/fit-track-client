import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.db_URI);
mongoose.Promise = global.Promise;

const userShcema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    userimage: {
      type: String,
      default: "default_image.jpg", // You can set a default image path here
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    saved_blogs: [String],
    friendList: [
      {
        targetId: String,
        userEmail: String,
        userName: String,
        requestStatus: {
            type: String,
            default: 'pending'
        },
        seenStatus: {
            type: Boolean,
            default: false
        }
    }
    ]
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userShcema);

export default User;
