import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-slate-100 p-4 rounded-2xl">
            <h3 className="text-4xl font-bold">Bookmarked Blogs: {bookmarks.length}</h3> 
            {
            bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;