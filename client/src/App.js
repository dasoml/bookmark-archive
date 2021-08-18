import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import BookmarkInput from "./components/BookmarkInput";
import Bookmarks from "./components/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState(null);

  // async/await 찾아보기
  // fetch와 axios와의 차이점 알기

  useEffect(() => {
    // async/await를 이용한 방법
    const getBookmarks = async () => {
      const res = await axios.get("http://localhost:3001");
      setBookmarks(res.data);
    };
    getBookmarks();
  }, []);

  const createBookmark = async (bookmarktitle, bookmarkurl) => {
    const res = await axios.post("http://localhost:3001/add", {
      title: bookmarktitle,
      url: bookmarkurl,
    });
    setBookmarks(res.data);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <BookmarkInput createBookmark={createBookmark} />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </div>
  );
}

export default App;
