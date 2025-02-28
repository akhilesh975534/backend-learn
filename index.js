import env from "dotenv"
env.config()
import express from "express"
import morgan from "morgan";
import blogRoutes from "./routes/blog.routes.js";
import cors from "cors"
const app = express();

const PORT = process.env.PORT || 3000

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

app.use("/api/v1/blogs", blogRoutes)

app.listen(PORT, () => {
	console.log(`Server Started PORT on ${PORT}`)
})