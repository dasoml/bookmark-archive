import React from "react";

const Bookmarks = ({ bookmarks }) => {
  return (
    bookmarks &&
    bookmarks.map((bookmark) => (
      <li key={bookmark.id}>
        {bookmark.title} ({bookmark.url})
      </li>
    ))
  );
};

export default Bookmarks;
