import Link from "next/link";
import React from "react";

var styles = {
  navbar: "_index-module__navbar__2y2FY",
  container: "_index-module__container__1Ee05",
};

function Navbar() {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: styles.navbar,
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: styles.container,
      },
      /*#__PURE__*/ React.createElement(
        "ul",
        null,
        /*#__PURE__*/ React.createElement(
          "li",
          null,
          /*#__PURE__*/ React.createElement(
            Link,
            {
              href: "/",
            },
            /*#__PURE__*/ React.createElement("a", null, "Rest API")
          )
        ),
        /*#__PURE__*/ React.createElement(
          "li",
          null,
          /*#__PURE__*/ React.createElement(
            Link,
            {
              href: "/graphql",
            },
            /*#__PURE__*/ React.createElement("a", null, "GraphQL")
          )
        )
      )
    )
  );
}

export { Navbar };
//# sourceMappingURL=index.m.js.map
