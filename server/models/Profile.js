const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        title: {
            type: String,
            default: "",
        },
        tagline: {
            type: String,
            default: "",
        },
        bio: {
            type: String,
            default: "",
        },
        location: {
            type: String,
            default: "",
        },
        email: {
            type: String,
            default: "",
        },
        imageUrl: {
            type: String,
            default: "",
        },
        resumeUrl: {
            type: String,
            default: "",
        },
        availableForWork: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Profile", profileSchema);