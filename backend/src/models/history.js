import mongoose from "mongoose";

const { Schema } = mongoose;

const historySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tool: {
      type: String,
      required: true,
      enum: ["summarizer", "generator", "extractor"],
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    details: {
      type: String,
      required: true,
    },
    input: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const History = mongoose.model("History", historySchema);
export default History;
