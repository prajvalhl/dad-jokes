import React from "react";

export function Footer() {
  return (
    <div className="footer">
      <h2>Connect with me on</h2>
      <ul className="list">
        <li className="li-inline">
          <a
            href="https://github.com/prajvalhl"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/material-outlined/48/000000/github.png"
              alt="github logo"
            />
          </a>
        </li>
        <li className="li-inline">
          <a
            href="https://www.linkedin.com/in/hlprajval/"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="linkedin logo"
            />
          </a>
        </li>
        <li className="li-inline">
          <a
            href="https://twitter.com/l_prajval"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/twitter--v1.png"
              alt="twitter logo"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
