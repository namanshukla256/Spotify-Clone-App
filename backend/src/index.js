import express from "express";

const app = express();
const PORT = process.env.PORT

app.listen(5000, ()=> {
    console.log("Server is running on port 5000");
})
