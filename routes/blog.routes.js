import express from "express";
import { createNewBlog, getAccessBlog, getSpecificBlogAccess } from "../controllers/blog.controllers.js"
const router = express.Router()

router.get("/", getAccessBlog)
router.get("/:id", getSpecificBlogAccess)
router.post("/create-blog", createNewBlog)

export default router