const React = require("react");
const Layout = require("./Layout");

module.exports = function MainPage({ user, books }) {
  return (
    <Layout user={user}>
      <div className="contflex">
        <ul className="entries-list">
          {books.map((book) => (
            <li className="entry-item" key={book.id}>
              <div className="container-entries">
                <img className="img-entries" src={book.img} />
                <div className="container__text">
                  <h1 className="text-title">{book.title.toUpperCase()}</h1>
                  <p className="text-info">{book.description}</p>

                  <div className="container__text__timing">
                    <div className="container__text__timing_time">
                      <h2 className="time-title">AUTHOR:</h2>
                      <p className="time">{book.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
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
                <a href={`/private/addBook/${user?.id}`}>Add</a>
                {' '}
                some pets!
              </h2>
            )}
        </ul>
      </div>
    </Layout>
  );
};
