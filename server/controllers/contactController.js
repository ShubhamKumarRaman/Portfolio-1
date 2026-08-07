const ContactLink = require("../models/ContactLink");

const getContactLinks = async (req, res, next) => {
    try {
        const contactLinks = await ContactLink.find()
            .select("-__v")
            .sort({
                order: 1,
                platform: 1,
            });

        res.json(contactLinks);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getContactLinks,
};