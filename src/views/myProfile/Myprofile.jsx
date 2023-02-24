const React = require('react');
const Layout = require('../Layout');

function MyProfile({ user, posts, arating }) {
  const titleName = 'My Profile';
  const proverka = posts.length > 0;
  return (
    <Layout user={user} title={titleName}>
      <script defer src="/js/Book.js" />
      <div className="MyProfile">
        <div className="textProfile">
          <h2>My books:</h2>
        </div>

        {proverka ? (
          posts.map((e) => (
            <div key={e.id} className="PostContainer" id={e.id}>
              <div className="leftBox">
                <img className="imgPost" src={e.img} alt={e.title} />
              </div>
              <div className="rigthBox">
                <div className="bookTitle">
                  <h2>{e.title}</h2>
                </div>

                <div className="author">
                  <p>
                    Author:
                    {' '}
                    {e.author}
                  </p>
                </div>


                <div className="text-info">
                  <p>{e.description}</p>
                </div>

                <div>
                  <button
                    name="buttonEditPostForm"
                    id="buttonEditPostForm"
                    type="submit"
                    data-type="addbook-button"
                    className="buttonEditPostForm"
                  >
                    Change this post!
                  </button>
                  <div className="message" />
                  <button
                    id="buttonDeletePost"
                    type="submit"
                    data-type="addbook-button"
                    className="buttonDeletePost"
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
      <script defer src="/js/Book.js" />
      <script src="/js/myprofile.js" defer />
    </Layout>
  );
}

module.exports = MyProfile;
