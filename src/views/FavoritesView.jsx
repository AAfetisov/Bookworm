const React = require('react');
const Layout = require('./Layout');

function FavoritesView({ user, favs }) {
  // console.log(favs, 'favsINView---->');
  return (
    <Layout user={user}>
      {favs
      && (
        <ul className="book-list">
          {favs.map((e) => (
            <div key={e.id}>
              <img className="img-entries" src={e.img} alt={e.title} />
              <p>{e.title}</p>
              <p>{e.author}</p>
              <p>{e.description}</p>
            </div>
          ))}
        </ul>
      )}
    </Layout>
  );
}

module.exports = FavoritesView;
