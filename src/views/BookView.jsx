const React = require('react');
const Layout = require('./Layout');

module.exports = function BookView({ user, book, comments }) {
  return (
    <Layout user={user}>
      {book ? (
        <div className='container_book'>
          <div className='left-container'>
            <img src={book.img} alt='book cover' />{' '}
          </div>
          <div className='rigth-container'>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>Description: {book.description}</p>
            <h4>Posted by: {user?.name} </h4>
          </div>
        </div>
      ) : (
        <div>This book does not exist</div>
      )}

      {book && comments && (
        <div className='commentsBox'>
          {comments.map((c) => (
            <div className='comment2' key={c.id}>
              <div className='commentAuthor'>
                <p>User: </p>
                <h3>{c['User.name']}</h3>
              </div>
              <div className='commentBody'>
                <p>{c.body}</p>
                </div>
            </div>
          ))}
        </div>

      )}
      {book && (
        <form
          ids={book.id}
          id='commentForm'
          action='/book/comment'
          method='post'
        >
          <div className='addCommentBox'>
            {' '}
            <textarea
              id='comment'
              name='comment'
              rows='5'
              cols='100'
              placeholder='Add your comment...'
            />
            <button id='sendBtn' className='sendBtn' type='submit'>
              Send
            </button>
          </div>
        </form>
      )}

      <script src='/js/bookview.js' defer />

    </Layout>
  );
};
