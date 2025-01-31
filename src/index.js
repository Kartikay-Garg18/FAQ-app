import app from "./app.js";
import dbConnect from "./config/database.js";
import dotenv from "dotenv";
const PORT = process.env.PORT || 8000;

dotenv.config({
    path: "./.env"
});

dbConnect()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    });
