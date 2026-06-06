import express from "express";
import cors from "cors";

import routes from "./routes/index.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173",
      "https://scaling-winner-p5x4vwrr5x4fr4vp-5173.app.github.dev"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", routes);

app.use("/uploads", express.static("uploads"));
app.get("/", (req, res) => {
  res.send("Welcome to The Singing Tales API");
});

export default app;