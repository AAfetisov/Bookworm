const React = require('react');
const Layout = require('../Layout');

function AddBook({ user, titleName }) {
  return (
    <Layout user={user} title={titleName}>
      <div className="text-left">
        <div className="align-items-center">
          <div className="formAddBook">
            <form id="fetchF" className="postcard" name="addForm" action="/private/addbook/new" method="POST">
              <div className="form-row">
                <label htmlFor="exampleFormControlInput1" className="">
                  <h3>Image:</h3>
                  <input
                    name="img"
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </label>
              </div>
              <div className="form-row">
                <label htmlFor="exampleFormControlTextarea1" className="">
                  <h3>Book title:</h3>
                  <input
                    name="title"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    type="text"
                  />
                </label>
              </div>
              <div className="form-row">
                <label htmlFor="exampleFormControlTextarea1" className="">
                  <h3>Author:</h3>
                  <input
                    name="author"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    type="text"
                  />
                </label>
              </div>
              <div className="form-row">
                <label htmlFor="exampleFormControlTextarea1" className="">
                  <h3>Description:</h3>
                  <textarea
                    rows="5"
                    name="description"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                  />
                </label>
              </div>
              <div className="form-row">
                <input type="submit" className="" value="Добавить!" />
              </div>
              <span id="errText">Wrong E-mail or Password</span>
            </form>
            <div id="postPreview" />
          </div>
        </div>
      </div>
      <script defer src="/js/Book.js" />
    </Layout>
  );
}

module.exports = AddBook;
