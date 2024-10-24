

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white rounded-lg p-4 my-3">
           <h3 className="text-3xl"> {title}</h3>
        </div>
    );
};

export default Bookmark;