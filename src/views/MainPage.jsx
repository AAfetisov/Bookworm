const React = require('react');
const Layout = require('./Layout');

module.exports = function MainPage({ user, page }) {
  const {
    books, previous, next, current, total,
  } = page;
  return (
    <Layout user={user}>

      <div className="contflex">
        {books && (
          <ul className="book-list">
            {books.map((book) => (
              <li className="book-item" key={book.id}>
                <a href={`/book/${book.id}`}><img className="img-entries" src={book.img} /></a>
                <h1 className="text-title">{book.title.toUpperCase().slice(0, 17)}</h1>
                <rating>
                  <div arating={book.averageRating} ids={book.id} className="simpleRating" />
                  <p />
                </rating>
                <p className="text-info">
                  {book.description?.slice(0, 120)}
                  ...
                </p>
                <div className="container__commentsFavorites">
                  <span className="container__user">
                    <span>By:</span>
                    <span>{book['User.name']}</span>
                  </span>
                  <span className="container_comments_favs">
                    <a href={`/book/${book.id}`}><img className="comments" src="/img/Comment.png" alt="comment" /></a>
                    <a className="favlinks" href="/">
                      <img
                        ids={book.id}
                        className="bookmark"
                        src={
                      book['Favorites.userId']
                        ? '/img/Bookmark_red.png'
                        : '/img/Bookmark_black.png'
                      }
                        alt="bookmark"
                      />
                    </a>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="pageNavigation">
          {previous
          && <a href={`?page=${previous.page}&limit=${previous.limit}`}>{previous.page}</a>}
          {current
          && <a className="current">{current.page}</a>}
          {next
          && <a href={`?page=${next.page}&limit=${next.limit}`}>{next.page}</a>}
        </div>
      </div>
      <script src="/js/mainpage.js" defer />
    </Layout>
  );
};
