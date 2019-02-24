import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import News from "./news";
import NavBar from "./navbar";

function Container() {
  return (
    <div className="container">
      <NavBar />
      <News newsitems={news} />
    </div>
  );
}
let news = [
  {
    id: "1",
    author: "Timi Adeniran",
    title: "How God changed my life",
    url: "bible.org",
    numPoints: 10000,
    timestamp: "2018-02-16 13:23:23",
    numComments: 132
  },
  {
    id: "2",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "3",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "4",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "5",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "6",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "7",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "8",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "9",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "10",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "11",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "12",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "13",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "14",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "15",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "16",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "17",
    author: "Tami Adeniran",
    title: "How Love changed my life",
    url: "love.org",
    numPoints: 11231,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  }
];
ReactDOM.render(<Container />, document.getElementById("root"));
