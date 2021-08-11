import React from "react";

const BookmarkItem = ({ bookmark }) => {
  return (
    <div className="BookmarkItem">
      {bookmark.title} ({bookmark.url})
    </div>
  );
};

export default BookmarkItem;
