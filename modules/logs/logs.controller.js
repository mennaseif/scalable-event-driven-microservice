import { Logs } from "../../database/models/log.models.js";
import { catchError } from "../../middleware/catchError.js";

export const getLogs = catchError(async (req, res, next) => {
  const { userId, page = 1, limit = 10 } = req.query;
  const query = userId ? { userId } : {};
  const logs = await Logs.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.status(200).json(logs);
});

export const createLog = catchError(async (req, res, next) => {
  const { userId, action } = req.body;
  const newLog = await Logs.create({ userId, action });
  res.status(201).json(newLog);
});

