import React, { useRef } from "react";

const BookmarkInput = ({ createBookmark }) => {
  const bookmarkTitle = useRef("");
  const bookmarkUrl = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createBookmark(bookmarkTitle.current.value, bookmarkUrl.current.value);
    bookmarkTitle.current.value = "";
    bookmarkUrl.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="TITLE" ref={bookmarkTitle} />
      <input type="text" placeholder="URL" ref={bookmarkUrl} />
      <input type="submit" value="SAVE" />
    </form>
  );
};

export default BookmarkInput;
