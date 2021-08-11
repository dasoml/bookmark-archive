import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { async } from "rxjs";
import Bookmarks from "./components/Bookmarks";
import BookmarkItem from "./components/BookmarkItem";

function App() {
  const [bookmarks, setBookmarks] = useState(null);

  // async/await 찾아보기
  // fetch와 axios와의 차이점 알기

  useEffect(() => {
    // async/await를 이용한 방법
    const getBookmarks = async () => {
      const res = await axios.get("http://localhost:3030");
      setBookmarks(res.data);
    };
    getBookmarks();
  }, []);
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="TITLE" />
        <input type="text" placeholder="URL" />
        <input type="submit" value="SAVE" />
      </form>

      <Bookmarks bookmarks={bookmarks} />
      <BookmarkItem />
    </div>
  );
}

export default App;
