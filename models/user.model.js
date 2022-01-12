import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    usertag: String,
    userslug: String,
    pfp: String,
    bio: String,
    game_links: String,
    current_playing: String,
});

var user = mongoose.model("Users", userSchema);

export default user;