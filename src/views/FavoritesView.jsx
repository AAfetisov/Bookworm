const React = require('react');
const Layout = require('./Layout');

function FavoriteView({ user, favs }) {
  // console.log(favs, 'favsINView---->');
  return (
    <Layout user={user}>
      <div id="favoriteViewFavContainer" className="MyProfile">

        {favs && (
          favs.map((e) => (
            <div className="container_book" key={e.id}>
              <a className="favlinks favAbs" href="/">
                <img
                  ids={e.id}
                  className="bookmark"
                  src="/img/Bookmark_red.png"
                  alt="bookmark"
                />
              </a>
              <div className="left-container">
                <img className="imgPost" src={e.img} alt={e.title} />
              </div>
              <div className="rigth-container">
                <div className="bookTitle">
                  <h2>{e.title}</h2>
                </div>
                <div className="author">
                  <p>{e.author}</p>
                </div>
                <div className="text-info">
                  <p>{e.description}</p>
                </div>

              </div>
            </div>
          )))}
      </div>
      <script src="/js/favoritesview.js" />
    </Layout>
  );
}

module.exports = FavoriteView;
