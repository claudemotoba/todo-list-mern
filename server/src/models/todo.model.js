"use strict";
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Le titre est obligatoire"],
        trim: true,
        maxlength: [40, "Le titre ne doit pas dépasser 40 caractères"]
    },
    description: {
        type: String,
        trim: true,
        maxlength: [200, "La description ne doit pas dépasser 200 caractères"]
    },
},{
    timestamps: true
})

module.exports = mongoose.model("todo", todoSchema);