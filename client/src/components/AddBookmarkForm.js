import React from "react";

const AddBookmarkForm = () => {
  return (
    <form>
      <input type="text" placeholder="TITLE" />
      <input type="text" placeholder="URL" />
      <input type="submit" value="SAVE" />
    </form>
  );
};

export default AddBookmarkForm;
