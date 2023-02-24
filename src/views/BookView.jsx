const React = require('react');
const Layout = require('./Layout');

module.exports = function BookView({
  user, book, comments, urating, arating,
}) {
  return (
    <Layout user={user}>
      {book ? (
        <div className="container_book">
          <div className="left-container">
            <img src={book.img} alt="book cover" />
            {' '}
          </div>
          <div className="rigth-container">
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <div className="container_ratings">
              <rating>
                <span>Average rating:</span>
                <div arating={arating} ids={book.id} className="astar-rating" id="averageRating">
                  <input type="radio" name="astars" id="astar-a" value="5" />
                  <label htmlFor="astar-a" />
                  <input type="radio" name="astars" id="astar-b" value="4" />
                  <label htmlFor="astar-b" />
                  <input type="radio" name="astars" id="astar-c" value="3" />
                  <label htmlFor="astar-c" />
                  <input type="radio" name="astars" id="astar-d" value="2" />
                  <label htmlFor="astar-d" />
                  <input type="radio" name="astars" id="astar-e" value="1" />
                  <label htmlFor="astar-e" />
                </div>
              </rating>
              <rating>
                <span>Your rating:</span>
                <div urating={urating} ids={book.id} className="star-rating" id="userRating">
                  <input type="radio" name="stars" id="star-a" value="5" />
                  <label htmlFor="star-a" />
                  <input type="radio" name="stars" id="star-b" value="4" />
                  <label htmlFor="star-b" />
                  <input type="radio" name="stars" id="star-c" value="3" />
                  <label htmlFor="star-c" />
                  <input type="radio" name="stars" id="star-d" value="2" />
                  <label htmlFor="star-d" />
                  <input type="radio" name="stars" id="star-e" value="1" />
                  <label htmlFor="star-e" />
                </div>
              </rating>
            </div>
            <p>
              Description:
              {' '}
              {book.description}
            </p>
            <h4>
              Posted by:
              {' '}
              {user?.name}
              {' '}
            </h4>
          </div>
        </div>
      ) : (
        <div>This book does not exist</div>
      )}

      {book && comments && (
        <div className="commentsBox">
          {comments.map((c) => (
            <div className="comment2" key={c.id}>
              <div className="commentAuthor">
                <p>User: </p>
                <h3>{c['User.name']}</h3>
              </div>
              <div className="commentBody">
                <p>{c.body}</p>
              </div>
            </div>
          ))}
        </div>

      )}
      {book && (
        <form
          ids={book.id}
          id="commentForm"
          action="/book/comment"
          method="post"
        >
          <div className="addCommentBox">
            {' '}
            <textarea
              id="comment"
              name="comment"
              rows="5"
              cols="100"
              placeholder="Add your comment..."
            />
            <button id="sendBtn" className="sendBtn" type="submit">
              Send
            </button>
          </div>
        </form>
      )}


      <script src="/js/bookview.js" defer />
    </Layout>
  );
};
