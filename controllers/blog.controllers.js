import Blog from "../blog.js"
import { v4 as uuuidv4 } from "uuid";

const getAccessBlog = async (req, res) => {
    const blog = await Blog;

    if (!blog) {
        return res.status(400).json({ error: true, success: false, message: "Blog not found" })
    }

    return res.status(200).json({ error: false, success: true, blog })
}

const getSpecificBlogAccess = async (req, res) => {
    const { id } = req.params
    console.log(id, "id+++++++++++")
    const blog = await Blog.find(b => b.id == id)

    if (!blog) {
        return res.status(400).json({ error: true, success: false, message: "Blog not found" })
    }

    return res.status(200).json({ error: false, success: true, blog })

}

const createNewBlog = async (req, res) => {
    const { title, content } = req?.body

    if (!title || !content) {
        return res.status(400).json({ error: true, success: false, message: "All fields are required" })
    }
    const blog = await Blog.push({ id: uuuidv4(), title, content })

    return res.status(201).json({ success: true, error: false, message: "Successfully Create new Blog" })
}

export { getAccessBlog, getSpecificBlogAccess, createNewBlog }