import { connect } from "mongoose";

export const dbConn = connect("mongodb://localhost:27017/scalable-event-driven-microservice")
  .then(() => {
    console.log("Database connected");
  })
  .catch(() => {
    console.log("Database error");
  });