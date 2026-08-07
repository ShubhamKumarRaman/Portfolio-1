const Project = require("../models/Project");

const getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find()
            .select("-__v")
            .sort({
                featured: -1,
                createdAt: -1,
            });

        res.json(projects);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getProjects,
};