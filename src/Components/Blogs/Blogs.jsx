import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark, handleMarkAsRead }) => {

    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        fetch('./blogs.json')
        .then(res => res.json())
        .then (data => setBlogs(data))
    },[])

    return (
        <div className ="md:w-2/3">
            <h2 className ="text-4xl font-semibold">Blog: {blogs.length}</h2>
            {blogs.map(blog => <Blog 
            handleAddToBookmark={handleAddToBookmark} 
            handleMarkAsRead = {handleMarkAsRead}
            key={blog.id} blog={blog}
            ></Blog>)
            
            
            }
        </div>
    );
};

Blogs.propTypes ={
    handleAddToBookmark : PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}
export default Blogs;