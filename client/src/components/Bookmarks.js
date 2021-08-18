import React from "react";
import BookmarkItem from "./BookmarkItem";

const Bookmarks = ({ bookmarks }, id) => {
  return (
    bookmarks &&
    bookmarks.map((bookmark) => (
      <div>
        <BookmarkItem key={bookmark.id} bookmark={bookmark} />
        <button
          onClick={() => {
            id = bookmark.id;
            console.log(id);
          }}
        >
          삭제
        </button>
      </div>
    ))
  );
};

export default Bookmarks;
