import express from "express";
import connectDB from './config/database'
import dotenv from "dotenv";
import productRouter from "./routes/product";
import categoryRouter from "./routes/category";
import authRouter from "./routes/auth";
import uploadRouter from "./routes/upload";
import profileRouter from "./routes/user";
import orderRouter from "./routes/order";
import feedbackRouter from "./routes/feedback";
import sliderRouter from "./routes/slider";
import cors from "cors";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URL);
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());


app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", categoryRouter);
app.use("/api", uploadRouter);
app.use("/api", profileRouter);
app.use("/api", orderRouter);
app.use("/api", feedbackRouter);
app.use("/api", sliderRouter);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
export const viteNodeApp = app;