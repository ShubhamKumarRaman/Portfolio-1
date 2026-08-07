const Profile = require("../models/Profile");

const getProfile = async (req, res, next) => {
    try {
        const profile = await Profile.findOne().select("-__v");

        if (!profile) {
            res.status(404);
            throw new Error("Profile not found. Run npm run seed first.");
        }

        res.json(profile);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getProfile,
};