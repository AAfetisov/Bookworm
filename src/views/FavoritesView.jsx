const React = require('react');
const Layout = require('./Layout');

module.exports = function BookView({ user, favs }) {
  console.log(favs, 'favsINView---->');
  <Layout user={user}>
    {favs ? (
      favs.map((e) => (
        <div key={e.id}>
          <img className="img-entries" src={e.img} alt={e.title} />
          <p>{e.title}</p>
          <p>{e.author}</p>
          <p>{e.description}</p>
        </div>
      ))) : <p>К сожалению вы ничего не добавили</p>}
  </Layout>;
};
