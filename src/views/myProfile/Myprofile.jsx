const React = require('react');
const Layout = require('../Layout');


function MyProfile({ user, posts }) {
  const titleName = 'My Profile';
  const proverka = posts.length > 0
  return (
    <Layout user={user} title={titleName}>
      <h2>My posts:</h2>
      {proverka > 0 ? (
        posts.map((e) => (
          <div key={e.id} className="PostContainer" id={e.id}>
          <img src={e.img} />
          <h5>{e.title}</h5>
          <p>{e.author}</p>
            <div>
          <p>{e.description}</p>
          {/* <div>{e.description.split('\n').map((el)=> <p key={e.id}><font style={{size:"3", color:"red",  face:"Arial" }}>{el}</font></p>)}</div> */}
          {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end"> */}
          <button
            name = 'buttonEditPostForm'
            id= 'buttonEditPostForm'
            type="submit"
            data-type="addbook-button"
            className="btn btn btn-info btn-primary btn-block mb-4"
          >
            Change this post!
          </button>
          <div className="message" />
      <button
            id= 'buttonDeletePost'
            type="submit"
            data-type="addbook-button"
            className="btn btn btn-info btn-primary btn-block mb-4"
          >
            delte this post!
          </button>
          <div className="message" />
      {/* </form> */}
          </div>
        </div>
        // </div>
      ))) : (
        <h5>К сожалению вы ничего не опубликовали на данный момент{"("}</h5>
      )}
    </Layout>
  );
};

module.exports = MyProfile