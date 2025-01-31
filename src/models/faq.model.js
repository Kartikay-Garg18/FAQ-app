import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    question_hi: {
        type: String,
    },
    answer_hi: {
        type: String
    },
    question_bn: {
        type: String
    },
    answer_bn: {
        type: String
    }
});

faqSchema.methods.getTranslatedQuestion = function (lang) {
    return this[`question_${lang}`] || this.question;
}

faqSchema.methods.getTranslatedAnswer = function (lang) {
    return this[`answer_${lang}`] || this.answer;
}

export const FAQ = mongoose.model("FAQ", faqSchema);