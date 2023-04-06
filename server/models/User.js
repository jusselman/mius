import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    { 
        userName: {
            type: String,
            require: true,
            min: 2,
            max: 15
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
          },
          password: {
            type: String,
            required: true,
            min: 5,
          },
          picturePath: {
            type: String,
            default: "",
          },
          friends: {
            type: Array,
            default: [],
          },
          location: {
            type: String,
            required: true
          }
        },
        { timestamps: true }
      );
      
const User = mongoose.model("User", UserSchema);
export default User;
    