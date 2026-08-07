const mongoose = require("mongoose");

const contactLinkSchema = new mongoose.Schema(
    {
        platform: {
            type: String,
            required: true,
            trim: true,
        },
        label: {
            type: String,
            default: "",
        },
        url: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            default: "",
        },
        order: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("ContactLink", contactLinkSchema);