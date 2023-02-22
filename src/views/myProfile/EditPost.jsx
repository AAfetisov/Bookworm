const React = require('react');
const Layout = require('../Layout');

function EditPostForm({ user, titleName, post }) {
  return (
    <Layout user={user} title={titleName}>
      <script defer src="/js/Book.js" />
      <div className="container text-left">
        <div className="row align-items-center">
          <div className="col-md-6">
            <form id="fetchF" name="editForm" action={`private/editform/${post.id}`} method="POST">
              <div name="editReviewForm" id={post.id} />
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">img:</label>
                <input
                  name="img"
                  type="url"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={post.img}
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
                  value={post.title}
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
                  value={post.author}
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
                  value={post.description}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary">Изменить!</button>
            </form>
            <div id="postPreview" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = EditPostForm;
