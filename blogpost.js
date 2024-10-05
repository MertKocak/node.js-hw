let blogs = [
    {title: "blog1", category: "spor"},
    {title: "blog2", category: "siyaset"},
    {title: "blog3", category: "sanat"}
]

const listBlogs = () => blogs.map((blog) => console.log(blog.title + " - " + blog.category))

const addBlog = (newblog) => {
    return new Promise((resolve, reject) => {
        blogs.push(newblog);
        resolve("Blog eklendi.");
        reject("Blog eklenemedi.")
    })
}

async function blogList(blog) {
    try {
        await addBlog(blog);
        listBlogs();
    }
    catch (err){
        console.log(err)
    }
}

blogList({title: "blog4", category: "film"});