import Link from "next/link";
import React from "react";

import styles from "./index.module.css";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
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
    </div>
  );
}
