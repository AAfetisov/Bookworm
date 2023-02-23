const React = require('react');
const Layout = require('./Layout');

module.exports = function MainPage({ user, books }) {
  console.log(user, '+++++++++++++++++++++++++++++++');
  return (
    <Layout user={user}>
      <div className="contflex">
        {books && (
          <ul className="book-list">
            {books.map((book) => (
              <li className="book-item" key={book.id}>
                <img className="img-entries" src={book.img} />
                <h1 className="text-title">{book.title.toUpperCase()}</h1>
                <p className="text-info">
                  {book.description.slice(0, 120)}
                  ...
                </p>
                <div className="container__commentsFavorites">
                  <span className="container__user">
                    <span>By:</span>
                    <span>{book['User.name']}</span>
                  </span>
                  <span className="container_comments_favs">
                    <a href={`/book/${book.id}`}><img className="comments" src="/img/Comment.png" alt="comment" /></a>
                    <a href="/"><img className="bookmark" src="/img/Bookmark_black.png" alt="bookmark" /></a>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};
