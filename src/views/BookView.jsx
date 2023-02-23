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
        : <div>This book does not exist</div>}


      {book && comments
        && (
        <div className="comments2">

          {comments.map((c) => (
            <div className="comment2" key={c.id}>
              <div className="commentAuthor">{c['User.name']}</div>
              <div className="commentBody">{c.body}</div>
            </div>
          ))}

        </div>
        )}
      {book
     && (
     <form id="commentForm" action="/comment/add" method="post">
       <textarea id="comment" name="comment" rows="5" cols="100" />
       <button id="sendBtn" type="submit">Send</button>
     </form>
     )}

      <script src="/js/bookview.js" defer />
    </Layout>
  );
};
