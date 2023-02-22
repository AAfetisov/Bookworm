const React = require('react');
const Layout = require('../Layout');

function MyProfile({ user, posts }) {
  const titleName = 'My Profile';
  const proverka = posts.length > 0;
  return (
    <Layout user={user} title={titleName}>
      <script defer src='/js/Book.js' />
      <div className='MyProfile'>
        <div className='textProfile'>
          <h2>My books:</h2>
        </div>

        {proverka > 0 ? (
          posts.map((e) => (
            <div key={e.id} className='PostContainer' id={e.id}>
              <div className='leftBox'>
                <img className='imgPost' src={e.img} alt={e.title} />
              </div>
              <div className='rigthBox'>
                <div className='bookTitle'>
                  <h2>{e.title}</h2>
                </div>

                <div  className='author'>
                  <p>Author: {e.author}</p>
                </div>

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

                <div className='text-info'>
                  <p>{e.description}</p>
                </div>

                <div>
                  <button
                    name='buttonEditPostForm'
                    id='buttonEditPostForm'
                    type='submit'
                    data-type='addbook-button'
                    className='buttonEditPostForm'
                  >
                    Change this post!
                  </button>
                  <div className='message' />
                  <button
                    id='buttonDeletePost'
                    type='submit'
                    data-type='addbook-button'
                    className='buttonDeletePost'
                  >
                    delete this post!
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5>К сожалению вы ничего не опубликовали на данный момент</h5>
        )}
      </div>
      <script defer src='/js/Book.js' />
    </Layout>
  );
}

module.exports = MyProfile;
