import translate from "google-translate-api";

export const translateText = async (text, targetLanguage) => {
    const data = await translate(text, { to: targetLanguage });
    return data.text;
}