import { createLog, getLogs } from './logs.controller.js';

import express from 'express';

const logsRoutes =express.Router();

logsRoutes.get("/getlogs", getLogs)
logsRoutes.post("/postlogs", createLog)


export default logsRoutes;