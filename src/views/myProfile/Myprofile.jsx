const React = require('react');
const Layout = require('../Layout');

function MyProfile({ user, posts }) {
  const titleName = 'My Profile';
  const proverka = posts.length > 0;
  return (
    <Layout user={user} title={titleName}>
      <script defer src="/js/Book.js" />
      <div className="MyProfile">
        <h2>My books:</h2>


        {proverka > 0 ? (
          posts.map((e) => (
            <div key={e.id} className="PostContainer" id={e.id}>
              <div className="leftBox">
                <img className="imgPost" src={e.img} alt={e.title} />
              </div>
              <div className="rigthBox">
                <h5>{e.title}</h5>
                <p>{e.author}</p>
                <div>
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

                <div className="message" />
                {/* </form> */}
              </div>
            </div>
          // </div>
          ))
        ) : (
          <h5>
            К сожалению вы ничего не опубликовали на данный момент
          </h5>
        )}
      </div>
    </Layout>
  );
}

module.exports = MyProfile;
