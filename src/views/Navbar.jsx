const React = require('react');

function Navbar({ user }) {
  return (
    <nav className="navbar navbar-ligth fixed-top pt-0 bg-white main">
      <div className="container">
        <div>
          <a href="/">
            <img className="logoBW" src="/img/logoBW.png" alt="log" width={60} />
          </a>
        </div>
        <div>
          <p className="bookname">BOOKWORM</p>
        </div>
        <ul className="container-controls">
          {user ? (
            <>
              <li className="control">
                <a href="/private/addbook/new" className="nav-link px-3">
                  Add a book
                </a>

              </li>
              <li className="control">
                <a href="/private/favorites" className="nav-link px-3">
                  Favs
                </a>

              </li>
              <li className="control">
                <a href="/private/myprofile" className="nav-link px-3">
                  My Profile
                </a>
              </li>
              <li className="control">
                <a href="/auth/signout" className="nav-link px-3">
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="control">
                <a href="/auth/signin" className="nav-link px-3">
                  SIGN IN
                </a>
              </li>
              <li className="control">
                <a className="signup nav-link px-3" href="/auth/signup">
                  SIGN UP
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>

  // <nav>
  //   <div className="container">
  //     <span className="nav-link">BOOKWORM</span>
  //     <span className="nav-link">
  //       {user?.id ? (
  //         <a href={`/farm/${user.id}`}>Hi, {user.name}</a>
  //       ) : (
  //         <a id="signInA" href="/auth/signin">
  //           SignIn
  //         </a>
  //       )}

  //       {user?.id ? (
  //         <a href="/auth/signout">Выйти</a>
  //       ) : (
  //         <a id="signUpA" href="/auth/signup">
  //           SignUp
  //         </a>
  //       )}
  //       {/* <a href="/">Home</a> */}
  //     </span>
  //   </div>
  // </nav>
  );
}

module.exports = Navbar;
