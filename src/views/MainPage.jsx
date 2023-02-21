const React = require('react');
const Layout = require('./Layout');

module.exports = function MainPage({ user, books }) {
  console.log(user);
  return (
    <Layout user={user}>
      <div className="contflex">
        <div>
          <ul>
            <li>
          <a href={`/private/addBook/new`} />
            </li>
          </ul>
        </div>
        {books && (
          <ul className="entries-list">
            {books.map((book) => (
              <li className="entry-item" key={book.id}>
                <div className="container-entries">
                  <img className="img-entries" src={book.img} />
                  <div className="container__text">
                    <h1 className="text-title">{book.title.toUpperCase()}</h1>
                    <p className="text-info">{book.description}</p>

                    <div className="container__text__timing">
                      <div className="container__text__timing_time">
                        <h2 className="time-title">AUTHOR:</h2>
                        <p className="time">{book.author}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};
