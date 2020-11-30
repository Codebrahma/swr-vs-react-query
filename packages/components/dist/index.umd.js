(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('next/link'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'next/link', 'react'], factory) :
  (global = global || self, factory(global.components = {}, global.Link, global.react));
}(this, (function (exports, Link, React) {
  Link = Link && Object.prototype.hasOwnProperty.call(Link, 'default') ? Link['default'] : Link;
  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  var styles = {"navbar":"_index-module__navbar__2y2FY","container":"_index-module__container__1Ee05"};

  function Navbar() {
    return /*#__PURE__*/React.createElement("div", {
      className: styles.navbar
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.container
    }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
      href: "/"
    }, /*#__PURE__*/React.createElement("a", null, "Rest API"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Link, {
      href: "/graphql"
    }, /*#__PURE__*/React.createElement("a", null, "GraphQL"))))));
  }

  exports.Navbar = Navbar;

})));
//# sourceMappingURL=index.umd.js.map
