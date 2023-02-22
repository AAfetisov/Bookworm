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
        <link rel="stylesheet" href="/css/addbook.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <script
          src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"
          defer
        />
        <title>BOOKWORM</title>
      </head>

      <body>
        <Navbar user={user} />
        {/* <div className="container"> */}
        {children}
        {/* </div> */}
      </body>
    </html>
  );
};
