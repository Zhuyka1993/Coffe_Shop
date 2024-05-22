import mongoose from "mongoose";

//Цей рядок встановлює з'єднання з базою даних MongoDB за допомогою методу connect() бібліотеки Mongoose.
// Ви вказуєте URL-адресу вашого кластера MongoDB, де зберігаються дані вашої бази даних.
mongoose.connect(
  "mongodb+srv://zhuyka1993:5195454Qq@cluster0.a7mbqin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

//Цей рядок отримує об'єкт підключення до бази даних з бібліотеки Mongoose.
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected successfully");
});
export default db;
