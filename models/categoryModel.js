import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    // unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});
mongoose.models = {};
export default mongoose.model.Category ||
  mongoose.model("Category", categorySchema);
