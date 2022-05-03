import React from 'react';
import { connect } from 'react-redux'


const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
}
const errorMessage = {
  color: 'red'
}

const NewsItem = ({ article }) => {

  console.log("start NewsItem ...");
  
  if (article == null) {
    return <div></div>;
  }

  var news = article;
  console.log("print data...")
  console.log(news);
  if (news.news == null) {
    return <div></div>;
  }
  return(<div>
     <h1>{news.news.title}</h1>
     <p><img src={news.news.urlToImage}></img></p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  article: state.news,
})

export const ConnectedNewsItem = connect(mapStateToProps,null)(NewsItem);


