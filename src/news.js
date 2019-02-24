import React from "react";
import PropTypes from "prop-types";
import NewsItem from "./newsitem";

function News({ newsitems }) {
  let [...news] = newsitems;
  const items = news.map((item, index) => {
    return <NewsItem key={item.id} number={index + 1} newsitem={item} />;
  });

  return (
    <div className="news-container">
      <ul>{items}</ul>
    </div>
  );
}

News.propTypes = {
  newsitems: PropTypes.array.isRequired
};

export default News;
