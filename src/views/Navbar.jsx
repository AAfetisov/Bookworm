const React = require('react');

function Navbar({ user }) {
  return (

    <div className="nav">
      <span className="navbarLogo">happyFarm</span>
      <span className="navbarControls">
        {user?.id
          ? (
            <a href={`/farm/${user.id}`}>
              Hi,
              {' '}
              {user.name}
            </a>
          )
          : <a id="signInA" href="/auth/signin">SignIn</a>}

        {user?.id
          ? <a href="/auth/signout">Выйти</a>
          : <a id="signUpA" href="/auth/signup">SignUp</a>}
        <a href="/">Home</a>
      </span>
    </div>
  );
}

module.exports = Navbar;
