require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = require("../config/db");

const Profile = require("../models/Profile");
const Skill = require("../models/Skill");
const Project = require("../models/Project");
const ContactLink = require("../models/ContactLink");

const content = require("../data/seed/content.json");

const removeId = (item) => {
    const { id, ...itemWithoutId } = item;
    return itemWithoutId;
};

const seedData = async () => {
    try {
        await connectDB();

        await Profile.deleteMany();
        await Skill.deleteMany();
        await Project.deleteMany();
        await ContactLink.deleteMany();

        await Profile.create(content.profile);

        await Skill.insertMany(content.skills.map(removeId));

        await Project.insertMany(content.projects.map(removeId));

        await ContactLink.insertMany(content.contactLinks.map(removeId));

        console.log("Database seeded successfully.");

        await mongoose.connection.close();

        process.exit(0);
    } catch (error) {
        console.error("Seeding failed:", error.message);
        process.exit(1);
    }
};

seedData();