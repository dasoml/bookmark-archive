import React from "react";
import BookmarkItem from "./BookmarkItem";

const Bookmarks = ({ bookmarks }) => {
  return (
    bookmarks &&
    bookmarks.map((bookmark) => (
      <BookmarkItem key={bookmark.id} bookmark={bookmark} />
    ))
  );
};

export default Bookmarks;
