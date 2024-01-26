import mongoose, {Schema} from 'mongoose'

mongoose.connect(process.env.db_URI)
mongoose.Promise = global.Promise;

const userShcema = new Schema(
    {
        name: String,
        email: String,
        password:String
    },
    {
        timestamps: true
    }
);

const User = mongoose.models.User || mongoose.model('User', userShcema)

export default User;