import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

function NewsItem({ newsitem, number }) {
  let url = new URL(newsitem.url);
  url = url.hostname.replace("www.", "");

  return (
    <li className="list-item">
      <div className="side-bar">
        <span> {number}. </span>
        <span>
          <i className="fas fa-caret-up" />{" "}
        </span>
      </div>
      <div className="main-head">
        <p>
          {" "}
          <a href={newsitem.url} className="news-title">
            {" "}
            {newsitem.title}{" "}
          </a>
        </p>
        <a href={newsitem.url} className="link">
          {" "}
          ({url})
        </a>
      </div>
      <div className="sub-menu">
        <ul className="sub">
          <li> {newsitem.numPoints} points</li>
          <li> by {newsitem.author}</li>
          <li>
            {" "}
            <Time time={newsitem.timestamp} />
          </li>
          <li> | flag</li>
          <li> | hide</li>
          <li> | {newsitem.numComments} comments</li>
          <li> | instapaper</li>
          <li> | save to pocket </li>
        </ul>
      </div>
    </li>
  );
}

function Time({ time }) {
  let timestamp = moment(time).fromNow();
  return <span>{timestamp}</span>;
}

NewsItem.propTypes = {
  newsitem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    numPoints: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    numComments: PropTypes.number.isRequired
  }).isRequired
};

export default NewsItem;
