const React = require('react');
const Layout = require('../Layout');

function AddBook({ user, titleName }) {
  return (
    <Layout user={user} title={titleName}>
      <script defer src="/js/addBook.js" />
      <div className="container text-left">
        <div className="row align-items-center">
          <div className="col-md-6">
            <form id="fetchF" name="addForm" action="/private/addbook/new" method="POST">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">img:</label>
                <input
                  name="img"
                  type="url"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">book title:</label>
                <input
                  name="title"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter book name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Author:</label>
                <input
                  name="author"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter your name/login"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">description:</label>
                <textarea
                  name="description"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter your description"
                />
              </div>
              <div className="avatar">Отправить:</div>
              <br />
              <button type="submit" className="btn btn-primary">Отправить!</button>
            </form>
            <div id="postPreview" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = AddBook;
