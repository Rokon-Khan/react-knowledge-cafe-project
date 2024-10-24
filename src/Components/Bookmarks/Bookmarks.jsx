import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        
        <div className="md:w-1/3 bg-slate-100 p-4 rounded-2xl">
            <div>
                <h3 className="text-4xl font-bold bg-slate-200 p-4 rounded-lg text-purple-400">
                    Reading Time: {readingTime}
                </h3>
            </div>
            <h3 className="text-4xl font-bold">Bookmarked Blogs: {bookmarks.length}</h3> 
            {
            bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks : PropTypes.array.isRequired,
    readingTime: PropTypes.number
}

export default Bookmarks;