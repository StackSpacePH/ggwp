import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    usertag: String,
    userslug: String,
    isVerified: Boolean,
    pfp: String,
    cover: String,
    bio: String,
    game_links: {},
    current_playing: String,
});

var user = mongoose.model("Users", userSchema);

export default user;