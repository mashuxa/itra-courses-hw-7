import React, {Component} from 'react';
import './style.scss';

class Article extends Component {
  render() {
    const data = this.props.data;
    return (
      <article className='article'>
        <a href={data.url} className='article__header-link'>
          <h1 className='article__header'>{data.title}</h1>
        </a>
        <a href={data.url} className="article__img-wrapper">
          <img className='article__img' src={data.urlToImage} alt="#"/>
        </a>
        <div className="article__short-description">{data.description}</div>
        <a href={data.url} className="article__link">Read more</a>
      </article>
    );
  }
}

export default Article;
