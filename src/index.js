import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import News from "./news";
import NavBar from "./navbar";

function Container() {
  news.sort((a, b) => b.numPoints - a.numPoints);

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
    author: "Philip Yancey",
    title: "Unexpected Guest",
    url: "https://philipyancey.com/unexpected-guest",
    numPoints: 53,
    timestamp: "2018-02-16 13:23:23",
    numComments: 132
  },
  {
    id: "2",
    author: "Philip Yancey",
    title: "A father is born",
    url: "https://philipyancey.com/a-father-is-born",
    numPoints: 7,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "3",
    author: "John Piper",
    title: "The Grace of God Appeared",
    url: "https://www.desiringgod.org/labs/the-grace-of-god-appeared",
    numPoints: 31,
    timestamp: "2018-03-16 04:23:23",
    numComments: 11
  },
  {
    id: "4",
    author: "Philip Yancey",
    title: "Aging Grace-fully",
    url: "https://philipyancey.com/aging-grace-fully",
    numPoints: 21,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "5",
    author: "Philip Yancey",
    title: "Melancholy Angels",
    url: "https://philipyancey.com/melancholy-angels",
    numPoints: 60,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "6",
    author: "Philip Yancey",
    title: "Unexpected Guest",
    url: "https://philipyancey.com/unexpected-guest",
    numPoints: 28,
    timestamp: "2018-02-16 13:23:23",
    numComments: 132
  },
  {
    id: "7",
    author: "Philip Yancey",
    title: "A father is born",
    url: "https://philipyancey.com/a-father-is-born",
    numPoints: 4,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "8",
    author: "Randy Alcorn",
    title: "Waiting when God seems silent",
    url: "https://www.desiringgod.org/articles/waiting-when-god-seems-silent",
    numPoints: 16,
    timestamp: "2018-03-16 04:23:23",
    numComments: 11
  },
  {
    id: "9",
    author: "Philip Yancey",
    title: "Aging Grace-fully",
    url: "https://philipyancey.com/aging-grace-fully",
    numPoints: 11,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "10",
    author: "Philip Yancey",
    title: "Melancholy Angels",
    url: "https://philipyancey.com/melancholy-angels",
    numPoints: 103,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "11",
    author: "Philip Yancey",
    title: "Are You Happy?",
    url: "https://philipyancey.com/are-you-happy",
    numPoints: 84,
    timestamp: "2018-02-16 13:23:23",
    numComments: 132
  },
  {
    id: "12",
    author: "Philip Yancey",
    title: "A father is born",
    url: "https://philipyancey.com/a-father-is-born",
    numPoints: 48,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "13",
    author: "Randy Alcorn",
    title: "We Murder with Words Unsaid",
    url: "https://www.desiringgod.org/articles/we-murder-with-words-unsaid",
    numPoints: 65,
    timestamp: "2018-03-16 04:23:23",
    numComments: 11
  },
  {
    id: "14",
    author: "Philip Yancey",
    title: "Aging Grace-fully",
    url: "https://philipyancey.com/aging-grace-fully",
    numPoints: 66,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  },
  {
    id: "15",
    author: "Philip Yancey",
    title: "Melancholy Angels",
    url: "https://philipyancey.com/melancholy-angels",
    numPoints: 12,
    timestamp: "2018-02-16 04:23:23",
    numComments: 11
  }
];
ReactDOM.render(<Container />, document.getElementById("root"));
