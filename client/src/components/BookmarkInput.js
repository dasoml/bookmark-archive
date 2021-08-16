import React, { useRef } from "react";

const BookmarkInput = () => {
  const bookmarkTitle = useRef("");
  const bookmarkUrl = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookmarkTitle.current.value);
    console.log(bookmarkUrl.current.value);
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
