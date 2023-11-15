type BlogItem = Array<{ id: number, title: string }>;

let blogs: BlogItem | undefined = [
    {
        id: 1,
        title: 'This is an experiment'
    },
    {
        id: 2,
        title: 'Fastify is pretty cool'
    },
    {
        id: 3,
        title: 'Just another blog, yea!'
    }
]

// Handlers
const getAllBlogs = async () => {
    return blogs
}

const getBlog = async (req: any) => {
    const id = Number(req.params.id) // blog ID
    const blog = blogs?.find(blog => blog.id === id)
    return blog
}

const addBlog = async (req: any) => {
    const blogLen = blogs?.length || 0;
    const id = blogLen + 1 // generate new ID
    const newBlog = {
        id,
        title: req.body.title
    }

    blogs?.push(newBlog)
    return newBlog
}

const updateBlog = async (req: any) => {
    const id = Number(req.params.id)
    blogs = blogs?.map(blog => {
        if (blog.id === id) {
            return {
                id,
                title: req.body.title
            }
        }
    }) as BlogItem;

    return {
        id,
        title: req.body.title
    }
}

const deleteBlog = async (req: any) => {
    const id = Number(req.params.id)

    blogs = blogs?.filter(blog => blog.id !== id)
    return { message: `Blog with ID ${id} is deleted` }
}

export {
    getAllBlogs,
    getBlog,
    addBlog,
    updateBlog,
    deleteBlog
}