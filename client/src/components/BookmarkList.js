import React from "react";
import Bookmark from "./Bookmark";

const BookmarkList = ({ bookmarks, deleteBookmark }) => {
  return (
    bookmarks &&
    bookmarks.map((bookmark) => (
      <div key={bookmark.id}>
        <Bookmark bookmark={bookmark} deleteBookmark={deleteBookmark} />
      </div>
    ))
  );
};

export default BookmarkList;
