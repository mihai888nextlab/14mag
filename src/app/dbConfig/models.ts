import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  nume: {
    type: String,
    required: true,
  },
});

const produsSchema = new mongoose.Schema({
  nume: {
    type: String,
    required: true,
  },
  categorie: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  pret: {
    type: Number,
    required: true,
  },
});

const categoriiModel =
  mongoose.models.mag_categoriis ||
  mongoose.model("mag_categoriis", categorySchema);

const produseModel =
  mongoose.models.mag_produses || mongoose.model("mag_produses", produsSchema);

export { categoriiModel, produseModel };
