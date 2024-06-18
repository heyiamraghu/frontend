import './App.css'
import {NavBar} from "./components/NavBar.tsx";
import {BlogCard} from "./components/BlogCard.tsx";
import {BlogModel} from "./models/BlogModel.ts";
import {useState} from "react";
import {useEffect} from "react";

function App() {
    const [blogs, setBlogs] = useState<BlogModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            const url: string = "https://king-prawn-app-3jqhv.ondigitalocean.app/api/v1/blogs";
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
        };
        fetchBlogs().catch((error) => {
            setIsLoading(false);
            setHttpError(error);
        })
    }, []);

  return (
      <>
          <NavBar />
          <div className="flex justify-center flex-wrap">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
          </div>
      </>
  )
}

export default App
