const React = require('react');
const Layout = require('../Layout');

function MyProfile({ user, posts }) {
  const titleName = 'My Profile';
  const proverka = posts.length > 0;
  return (
    <Layout user={user} title={titleName}>
      <div className='text'>
        <h2>My books:</h2>
      </div>

      {proverka > 0 ? (
        posts.map((e) => (
          <div key={e.id} className='PostContainer' id={e.id}>
            <div className='leftBox'>
              <img className='imgPost' src={e.img} />
            </div>
            <div className='rigthBox'>
              <h5>{e.title}</h5>
              <p>{e.author}</p>
              <div>
                <p>{e.description}</p>
                {/* <div>{e.description.split('\n').map((el)=> <p key={e.id}><font style={{size:"3", color:"red",  face:"Arial" }}>{el}</font></p>)}</div> */}
                {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end"> */}
              </div>

              <div>
                <button
                  name='buttonEditPostForm'
                  id='buttonEditPostForm'
                  type='submit'
                  data-type='addbook-button'
                  className='buttonEditPostForm'
                >
                  Change this post!
                </button>
                <div className='message' />
                <button
                  id='buttonDeletePost'
                  type='submit'
                  data-type='addbook-button'
                  className='buttonDeletePost'
                >
                  delte this post!
                </button>
              </div>

              <div className='message' />
              {/* </form> */}
            </div>
          </div>
          // </div>
        ))
      ) : (
        <h5>К сожалению вы ничего не опубликовали на данный момент{'('}</h5>
      )}
    </Layout>
  );
}

module.exports = MyProfile;
