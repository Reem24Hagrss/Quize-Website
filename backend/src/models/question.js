const mongoose = require('mongoose');
const validator = require('validator')

const Question = mongoose.model('Question',{
    question : {
        type: String,
        required: true,
    },
    choice1 : {
        type: String,
        required: true,
    },
    choice2 : {
        type: String,
        required: true,
    },
    choice3 : {
        type: String,
        required: true,
    },
    choice4 : {
        type: String,
        required: true,
    },
    answer : {
        type: String,
        required: true,
    }
})

module.exports = Question
console.log("Question is created");