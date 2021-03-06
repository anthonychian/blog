const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    header: { type: String, required: true},
    coverImgUrl: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0},
    usersWhoLiked: { type: [String], default: []},
    viewCount: { type: Number, default: 0},
    modifiedDate: { type: Date},
    createdDate: { type: Date, required: true },
    isDelete: { type: Boolean, default: false},
});

module.exports = mongoose.model('Blog', blogSchema);