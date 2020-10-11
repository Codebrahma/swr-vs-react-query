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
      "\n        .navbar {\n          border-bottom: 1px solid #eee;\n        }\n\n        .container {\n          max-width: 600px;\n          margin: 0 auto;\n        }\n\n        .navbar ul {\n          list-style-type: none;\n          padding: 0;\n          display: flex;\n        }\n\n        .navbar ul > li:not(:last-child) {\n          margin-right: 20px;\n        }\n      "
    )
  );
}

export { Navbar };
//# sourceMappingURL=index.m.js.map
