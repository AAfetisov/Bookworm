const React = require('react');
const Layout = require('./Layout');


function FavoriteView({ user, favs }) {
  // console.log(favs, 'favsINView---->');
  return (
    <Layout user={user}>
      {favs
      && (
        <ul className="book-list">
          {favs.map((e) => (
            <div className="container_book" key={e.id}>
              <div className="left-container">
              <img className="img-entries" src={e.img} alt={e.title} />
              </div>
              <div className="rigth-container">
              <h2>{e.title}</h2>
              <h3>{e.author}</h3>
              <p>{e.description}</p>
              </div>
              
            </div>
          ))}
        </ul>
      )}
    </Layout>
  )
}

module.exports = FavoriteView;

