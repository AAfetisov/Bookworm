const React = require('react');
const ReactDOMServer = require('react-dom/server');

const renderTemplate = (component, props = {}, response) => {
  const reactElement = React.createElement(component, props);
  const markup = ReactDOMServer.renderToStaticMarkup(reactElement);
  response.send(`<!DOCTYPE html>${markup}`);
};

module.exports = renderTemplate;
