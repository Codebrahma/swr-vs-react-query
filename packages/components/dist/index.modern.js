import Link from "next/link";
import React from "react";

function Navbar() {
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "navbar",
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        className: "container",
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
    ),
    /*#__PURE__*/ React.createElement(
      "style",
      {
        jsx: true,
      },
      `
        .navbar {
          border-bottom: 1px solid #eee;
        }

        .container {
          max-width: 600px;
          margin: 0 auto;
        }

        .navbar ul {
          list-style-type: none;
          padding: 0;
          display: flex;
        }

        .navbar ul > li:not(:last-child) {
          margin-right: 20px;
        }
      `
    )
  );
}

export { Navbar };
//# sourceMappingURL=index.modern.js.map
