import mongoose, {Schema} from 'mongoose'

mongoose.connect(process.env.DB_URI)
mongoose.Promise = global.Promise;

const userShcema = new Schema(
    {
        fname: String,
        lname: String,
        email: String,
        password:String
    },
    {
        timestamps: true,
        collection: 'userCollection'
    }
);

const User = mongoose.models.User || mongoose.model('User', userShcema)

export default User;