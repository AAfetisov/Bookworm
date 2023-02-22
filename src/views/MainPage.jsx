const React = require('react');
const Layout = require('./Layout');

module.exports = function MainPage({ user, books }) {
  console.log(user, '+++++++++++++++++++++++++++++++');
  return (
    <Layout user={user}>
      <div className='contflex'>
        {books && (
          <ul className='book-list'>
            {books.map((book) => (
              <li className='book-item' key={book.id}>
                {/* <div className='container-entries'> */}
                {/* <h1 className='text-title'>{book.title.toUpperCase()}</h1> */}
                  <img className='img-entries' src={book.img} />
                  <div className='container__text'>
                    <h1 className='text-title'>{book.title.toUpperCase()}</h1>
                    <div class='star-rating'>
                      <input type='radio' name='stars' id='star-a' value='5' />
                      <label for='star-a'></label>

                      <input type='radio' name='stars' id='star-b' value='4' />
                      <label for='star-b'></label>

                      <input type='radio' name='stars' id='star-c' value='3' />
                      <label for='star-c'></label>

                      <input type='radio' name='stars' id='star-d' value='2' />
                      <label for='star-d'></label>

                      <input type='radio' name='stars' id='star-e' value='1' />
                      <label for='star-e'></label>
                    </div>
                    <p className='text-info'>{book.description.slice(0,60)}...</p>

                    <div className='container__commentsFavorites'>
                      <div className='container__user'>
                        <h2 className='info'>By:</h2>
                        {/* <p className='name'>{user.name}</p> */}
                        {/* <p className='date'>{user.createdAt}</p> */}
                      </div>
                      <div className='container_comments'>
                        <img
                          className='comments'
                          src='/img/Comment.png'
                          alt='comment'
                        />
                        <img
                          className='bookmark'
                          src='/img/Bookmark_black.png'
                          alt='bookmark'
                        />
                      </div>
                    </div>
                  </div>
                {/* </div> */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};
