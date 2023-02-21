/* eslint-disable jsx-a11y/aria-role */
const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/application.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" defer />
        <title>Exam ph2</title>
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
