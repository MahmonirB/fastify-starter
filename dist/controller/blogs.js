"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.addBlog = exports.getBlog = exports.getAllBlogs = void 0;
let blogs = [
    {
        id: 1,
        title: 'This is an experiment',
    },
    {
        id: 2,
        title: 'Fastify is pretty cool',
    },
    {
        id: 3,
        title: 'Just another blog, yea!',
    },
];
const getAllBlogs = async () => {
    return blogs;
};
exports.getAllBlogs = getAllBlogs;
const getBlog = async (req) => {
    const id = Number(req.params.id);
    const blog = blogs?.find((blog) => blog.id === id);
    return blog;
};
exports.getBlog = getBlog;
const addBlog = async (req) => {
    const blogIDs = blogs?.map((item) => item.id);
    const blogLen = blogIDs?.length ? Math.max(...blogIDs) : 0;
    const id = blogLen + 1;
    const newBlog = {
        id,
        title: req.body.title,
    };
    blogs?.push(newBlog);
    return newBlog;
};
exports.addBlog = addBlog;
const updateBlog = async (req) => {
    const id = Number(req.params.id);
    blogs = blogs?.map((blog) => {
        if (blog.id === id) {
            return {
                id,
                title: req.body.title,
            };
        }
    });
    return {
        id,
        title: req.body.title,
    };
};
exports.updateBlog = updateBlog;
const deleteBlog = async (req) => {
    const id = Number(req.params.id);
    blogs = blogs?.filter((blog) => blog.id !== id);
    return { message: `Blog with ID ${id} is deleted` };
};
exports.deleteBlog = deleteBlog;
//# sourceMappingURL=blogs.js.map