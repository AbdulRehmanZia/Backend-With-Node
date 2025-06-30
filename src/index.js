import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";

dotenv.config({ path: "./env" });

const PORT = process.env.PORT || 8000;
await connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Error => ", error);
      throw error;
    });
    app.listen(PORT, console.log("Server is Running on PORT: ", PORT));
  })
  .catch((err) => console.error(`MongoDB connection failed: ${err}`));
