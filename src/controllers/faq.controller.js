import { FAQ } from "../models/faq.model.js";
import { translateText } from "../services/translate.js";

const getFAQ = async (req, res) => {
    try {
        const lang = req.query.lang || "en";
        const faqs = await FAQ.find({}).select("-question_hi -answer_hi -question_bn -answer_bn");
        if(lang === "en"){
            return res.json(faqs).status(200);
        } else if(lang === "hi" || lang === "bn"){
            faqs.map(faq => {
                faq.question = faq.getTranslatedQuestion(lang);
                faq.answer = faq.getTranslatedAnswer(lang);
            });
            return res.json(faqs).status(200);
        } else {
            faqs.map(faq => {
                faq.question = translateText(faq.question, lang);
                faq.answer = translateText(faq.answer, lang);
            });
            return res.json(faqs).status(200);
        }
    } catch (error) {
        console.error("Error fetching faqs: ", error);
        return res.json({ message: "Fetching faqs error" }).status(403);
    }
};

const createFAQ = async (req, res) => {
    try {

        const { question, answer } = req.body;
        const faq = await FAQ.create({ question, answer });
        faq.question_hi = await translateText(question, "hi");
        faq.answer_hi = await translateText(answer, "hi");
        faq.question_bn = await translateText(question, "bn");
        faq.answer_bn = await translateText(answer, "bn");
        await faq.save();

        return res.json(faq).status(201);

    } catch (error) {
        console.error("Error creating FAQ", error);
        return res.json({ message: "Creating FAQ error" }).status(402);
    }
}

export { getFAQ, createFAQ };