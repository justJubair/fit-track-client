import mongoose, { Schema } from 'mongoose'

mongoose.connect(process.env.db_URI);

const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true
      },
      userimage: {
        type: String,
        default: 'default_image.jpg' // You can set a default image path here
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        default: 'default'
      }
    },
    {
      timestamps: true, // Add timestamps
    }
  );
  
  const User = mongoose.models.User || mongoose.model("User", userSchema);

  export default User;
