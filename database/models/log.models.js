import mongoose, { Schema } from "mongoose";

let logSchema = new Schema(
  {
    userId: { type: String, required: true },
    action: { type: String, required: true },
    timestamp: { type: Date, required: true , default: Date.now},
  }
);
logSchema.index({ userId: 1, timestamp: -1 });

export const Logs = mongoose.model("Logs", logSchema);
