const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: {
        type:String,
        required: "This fields is required."
    },
    description: {
        type:String,
        required: "This fields is required."
    },
    email: {
        type:String,
        required: "This fields is required."
    },
    ingredients: {
        type:Array,
        required: "This fields is required."
    },
    category: {
        type:String,
        enum: ['Thai','American','Chinese','Mexican','Indian'],
        required: "This fields is required."
    },
    image: {
        type:String,
        required: "This fields is required."
    }
});

module.exports = mongoose.model("Recipe", recipeSchema);