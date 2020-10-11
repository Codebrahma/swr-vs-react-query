import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <ul>
          <li>
            <Link href="/">
              <a>Rest API</a>
            </Link>
          </li>
          <li>
            <Link href="/graphql">
              <a>GraphQL</a>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
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
      `}</style>
    </div>
  );
}
