function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Link = _interopDefault(require('next/link'));
var React = _interopDefault(require('react'));

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
//# sourceMappingURL=index.js.map
