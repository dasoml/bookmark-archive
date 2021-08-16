import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { async } from "rxjs";
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
  return (
    <div className="App">
      <div className="container">
        <Header />
        <BookmarkInput />
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </div>
  );
}

export default App;
