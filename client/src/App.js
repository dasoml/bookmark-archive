import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import BookmarkInput from "./components/BookmarkInput";
import BookmarkList from "./components/BookmarkList";

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

  const deleteBookmark = async (id) => {
    const res = await axios.post("http://localhost:3001/delete", {
      id: id,
    });
    setBookmarks(res.data);
    console.log(res.data);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <BookmarkInput createBookmark={createBookmark} />
        <BookmarkList bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
      </div>
    </div>
  );
}

export default App;
