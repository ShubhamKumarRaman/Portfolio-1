const Skill = require("../models/Skill");

const getSkills = async (req, res, next) => {
    try {
        const skills = await Skill.find()
            .select("-__v")
            .sort({
                category: 1,
                name: 1,
            });

        res.json(skills);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getSkills,
};