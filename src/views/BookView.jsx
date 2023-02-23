const React = require('react');
const Layout = require('./Layout');

module.exports = function BookView({ user, book, comments }) {
  return (
    <Layout user={user}>
      {book
        ? (
          <div className="container_book">
            <img src={book.img} alt="book cover" />
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>
              Description:
              {' '}
              {book.description}
            </p>
            <p>
              Posted by:
              {' '}
              {user?.name}
              {' '}
            </p>
          </div>
        )
        : <div>This book does not exist :(</div>}

      {book && comments
        && (
        <ul className="comments">
          {comments.map((c) => (
            <li className="comment" key={c.id}>
              <div className="commentAuthor">{c.userId}</div>
              <div className="commentBody">{c.body}</div>
            </li>
          ))}
        </ul>

      //   <form id="commentForm" action="/comment/add" method="post">
      //   <input className="login-input" type="text" name="text" id="text" />
      //   <button id="sendBtn" type="submit">Send</button>
      // </form>
        )}
    </Layout>
  );
};
