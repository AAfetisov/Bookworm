const React = require('react');
const Layout = require('./Layout');

module.exports = function MainPage({ user, users, pets }) {
  return (
    <Layout user={user}>
      <div className="contflex">

        <div className="Farms">
          <h2>Farm List</h2>
          {users
          && users.map((farmer) => (
            <a key={farmer.id} href={`/farm/${farmer.id}`}>
              {farmer.name}
              Farm
            </a>
          ))}
        </div>

        <ul className="Pets">
          {pets && user
            ? pets.map((pet) => (
              <li key={pet.id}>
                <img className="petPhoto" src={`/img/${pet.img}`} />
                {pet.name}
              </li>
            ))
            : (
              <>
              </>
            )}
          {user && !pets
            && (
              <h2>
                <a href={`/farm/${user?.id}`}>Add</a>
                {' '}
                some pets!
              </h2>
            )}
        </ul>

      </div>
    </Layout>
  );
};
