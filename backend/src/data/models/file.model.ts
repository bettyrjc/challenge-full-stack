import mongoose from "mongoose";

 const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  last_name: {
    type: String,
    required: [true, "last_name is required"],
  },
  phone: {
    type: String,
    required: [true, "phone is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  career: {
    type: String,
    required: [true, "career is required"],
  },
  
});

export const fileModel = mongoose.model("File", fileSchema);