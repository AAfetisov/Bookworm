/* eslint-disable jsx-a11y/aria-role */
const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/css/application.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous" />
        <script
          src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"
          defer
        />
        <title>BOOKWORM</title>
      </head>

      <body>
        {/* <div className="container"> */}
        <Navbar user={user} />
        {children}
        {/* </div> */}
      </body>
    </html>
  );
};
