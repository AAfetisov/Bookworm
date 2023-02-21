const React = require("react");

function Navbar({ user }) {
  return (
    <nav className="navbar navbar-ligth fixed-top pt-0 bg-white main">
      <div className="container">
        <div>
          <img className="logoBW" src="/img/logoBW.png" alt="log" width={60} />
        </div>
        <div>
          <p className="bookname">BOOKWORM</p>
        </div>
        <ul className="container-controls">
          {user ? (
            <>
              <div className="gif">
                <img
                  src="http://liubavyshka.my1.ru/_ph/19/2/908531413.gif?1676464004"
                  alt=""
                />
              </div>
              <li className="control">
                <p className="nav-link px-3">HELLO, {username}!</p>
              </li>
              <li className="control">
                <a href="/private/logout" className="nav-link px-3">
                  LOGOUT
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="control">
                <a href="/private" className="nav-link px-3">
                  SIGN IN
                </a>
              </li>
              <li className="control">
                <a className="signup nav-link px-3" href="/auth">
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
