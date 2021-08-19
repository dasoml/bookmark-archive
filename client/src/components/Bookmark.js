import React from "react";

const Bookmark = ({ bookmark, deleteBookmark }) => {
  return (
    <div className="BookmarkItem">
      {bookmark.title} ({bookmark.url}){" "}
      <button type="button" onClick={() => deleteBookmark(bookmark.id)}>
        삭제
      </button>
    </div>
  );
};

export default Bookmark;
