import mongoose from "mongoose";
export const db = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connect");
    })
    .catch((error) => {
      console.log(error);
    });
};
