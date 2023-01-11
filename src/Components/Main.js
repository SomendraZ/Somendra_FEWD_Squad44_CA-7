import Logo from "./Resources/x.png";
import axios from "axios";
import { useState } from "react";
import Start from "./Start";
import Card from "./Card";
import Forms from "./Register";

const MAIN = () => {
  const [Search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);
  const [isShown1, setIsShown1] = useState(true);
  const [isShown2, setIsShown2] = useState(true);
  const searchBook = () => {
    console.log("hello");
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          Search +
          "&key=AIzaSyCoEUNMcZ9UAL_ezq4l_3-9JXwYo0dtTE0&maxResults=15"
      )
      .then((res) => setBookData(res.data.items))
      .catch((err) => console.log(err));
  };
  const handleClick1 = (event) => {
    setIsShown1((current) => !current);
    setSearch("");
    setBookData([]);
  };
  const handleClick2 = (event) => {
    setIsShown2((current) => !current);
    setSearch("");
    setBookData([]);
  };
  function refreshPage() {
    window.location.reload(false);
  }
  let user, register;
  if (sessionStorage.getItem("username")) {
    user = sessionStorage.getItem("username");
    register = "";
  } else {
    user = "Register";
  }
  return (
    <>
      <div className="navbar">
        <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <div className="name" onClick={refreshPage}>
              <img
                className="navbar-brand user-select-none"
                src={Logo}
                alt=""
                height="75rem"
                width="70rem"
              />
              <h1 className="user-select-none">Books</h1>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 user-select-none"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={searchBook}
                onClick={handleClick1}
              />
              <div className="reg user-select-none" onClick={handleClick2}>
                {user}
              </div>
            </form>
          </div>
        </nav>
      </div>
      <div
        className="register"
        style={{ display: isShown2 ? "none" : "block" }}
      >
        <Forms />
      </div>
      <div className="start" style={{ display: isShown1 ? "block" : "none" }}>
        <Start />
      </div>
      <div className="books" style={{ display: isShown1 ? "none" : "block" }}>
        <br />
        <h2>List of Searched Books...</h2>
        <br />
        <div className="container">{<>{<Card book={bookData} />}</>}</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default MAIN;
