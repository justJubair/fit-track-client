import mongoose, {Schema} from 'mongoose'

mongoose.connect(process.env.DB_URI)
mongoose.Promise = global.Promise;

const userShcema = new Schema(
    {
        username: String,
        userimage:String,
        email: String,
        password:String
    },
    {
        timestamps: true
    }
);

const User = mongoose.models.User || mongoose.model('User', userShcema)

export default User;