import React, {Component} from 'react';
import Menu from '../Menu';
import Article from '../Article';
import './style.scss';

const API_KEY = 'e83ca29c89f04841b88326345f4922d0';

class App extends Component {
  constructor() {
    super();
    this.state = {
      categoryID: 'globo',
      articles: []
    };
    this.getArticles = this.getArticles.bind(this);
  }

  componentDidMount() {
    this.getArticles(this.state.categoryID);
  }

  getArticles(categoryId) {
    const url = `https://newsapi.org/v2/top-headlines?sources=${categoryId}&apiKey=${API_KEY}`;
    fetch(url).then((response) => {
      if (response.status !== 200) {
        alert(`Error: ${response.status}`);
      } else {
        response.json().then((data) => {
          if (data.status === 'ok') {
            const articles = data.articles.map((article) => {
              if (article.title && article.url && article.urlToImage && article.description) {
                return <Article key={article.url} data={article}/>;
              }
            });
            this.setState({
              categoryID: categoryId,
              articles: articles
            });
          }
        });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
          <aside className='sidebar'>
            <Menu onClickTab={this.getArticles} currentCategory={this.state.categoryID}/>
          </aside>
          <main className='main'>
            {this.state.articles}
          </main>
      </React.Fragment>
    );
  }
}

export default App;
