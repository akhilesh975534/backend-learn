import env from "dotenv"
env.config()
import express from "express"
import blogRoutes from "./routes/blog.routes.js";
const app = express();

const PORT = process.env.PORT || 3000

//middlewares
app.use(express.json())

app.use("/api/v1/blogs", blogRoutes)

app.listen(PORT, () => {
	console.log(`Server Started PORT on ${PORT}`)
})