import './App.css'
import {NavBar} from "./components/NavBar.tsx";
import {BlogCard} from "./components/BlogCard.tsx";
import {useState} from "react";
import {useEffect} from "react";
import {BlogModel} from "./models/BlogModel.ts";

function App() {
    const [blogs, setBlogs] = useState<BlogModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            const url: string = "https://king-prawn-app-3jqhv.ondigitalocean.app/api/v1/blogs";
            const response = await fetch(url);
            const blogData = await response.json();
            const loadedBlogs: BlogModel[] = [];
            for (const key in blogData) {
                loadedBlogs.push({
                    id: blogData[key].id,
                    title: blogData[key].title,
                    subtitle: blogData[key].subtitle,
                    author: blogData[key].author,
                    content: blogData[key].content,
                    date: blogData[key].date,
                });
            }
            setBlogs(loadedBlogs)
            setIsLoading(false);
        };
        fetchBlogs().catch((error) => {
            setIsLoading(false);
            setHttpError(error);

            console.log(error);
        })
    }, []);

    if (isLoading) {
        return (
            <span className="loading loading-spinner loading-xs"></span>
        )
    }
    if(httpError) {
        return (
            <div role="alert" className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none"
                     viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Error! Fetch Failed.</span>
            </div>
        )
    }

    return (
        <>
            <NavBar/>
            <div className="flex justify-center flex-wrap">
                {
                    blogs.map((blog: BlogModel) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))
                }
            </div>
        </>
    )
}

export default App
