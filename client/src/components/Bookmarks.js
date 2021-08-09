import React from "react";

const Bookmarks = ({ bookmarks }) => {
  return (
    bookmarks &&
    bookmarks.map((bookmark) => (
      <li>
        {bookmark.title} ({bookmark.url})
      </li>
    ))
  );
};

export default Bookmarks;
