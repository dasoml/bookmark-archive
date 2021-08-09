import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { async } from "rxjs";

function App() {
  const [bookmarks, setBookmarks] = useState(null);

  useEffect(async () => {
    const res = await axios.get("http://localhost:3001");
    console.log(res);
  }, []);
  return (
    <div className="App">
      <h1>Bookmark Archive app</h1>
      <form>
        <input type="text" placeholder="TITLE" />
        <input type="text" placeholder="URL" />
        <input type="submit" value="SAVE" />
      </form>
    </div>
  );
}

export default App;
