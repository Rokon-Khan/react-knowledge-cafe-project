import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id,title, author, author_img, posted_date, cover, reading_time, hashtags} = blog;

    return (
        <div className='mb-20'>
            <img className='w-full mb-6' src={cover} alt={`cover picture of ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-lg font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick = {() => handleAddToBookmark (blog)} className='ml-2 text-green-500 text-2xl'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h4 className='text-4xl font-semibold mb-4'>{title}</h4>
            <p>
            {
                hashtags.map((hash, idx) => <span key={idx}><a>#{hash}</a></span> )
            }
            </p>
            
            <button 
            onClick ={ () => handleMarkAsRead (id,reading_time)}
            className='text-lg font-bold text-purple-600 border-2 p-2 rounded-lg'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;