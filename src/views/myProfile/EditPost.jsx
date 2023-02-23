const React = require('react');
const Layout = require('../Layout');

function EditPostForm({ user, titleName, post }) {
  return (
    <Layout user={user} title={titleName}>
      <script defer src="/js/Book.js" />
      <div className="text-left">
        <div className="align-items-center">
          <div className="formEditBook">
            <form id="fetchF" className="postcard" action={`private/editform/${post.id}`} method="POST">
              <div name="editReviewForm" id={post.id} />
              <div className="form-row-edit">
                <label htmlFor="exampleFormControlInput1" className="form-label">img:</label>
                <input
                  name="img"
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={post.img}
                />
              </div>
              <div className="form-row-edit">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">book title:</label>
                <input
                  name="title"
                  type="text"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter book name"
                  value={post.title}
                />
              </div>
              <div className="form-row-edit">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Author:</label>
                <input
                  name="author"
                  type="text"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter your name/login"
                  value={post.author}
                />
              </div>
              <div className="form-row-edit">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">description:</label>
                <textarea
                  name="description"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter your description"
                  value={post.description}
                />
              </div>
              <br />
              <div className="form-row-edit">
              <input type="submit" className="" value="Изменить!" />
              </div>
             
            </form>
            <div id="postPreview" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = EditPostForm;
