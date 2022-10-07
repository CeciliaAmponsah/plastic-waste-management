import { Schema, model, models } from "mongoose";

const plasticSchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    companyEmail: {
      type: String,
      required: true,
      lowercase: true,
       unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Plastic = models.Plastic || model("Plastic", plasticSchema);
export default Plastic;
