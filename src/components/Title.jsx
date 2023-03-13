import React, { useContext } from "react";
import { ThemeContext } from "../App";

export default function Title({ text, headerTag }) {
  const darkTheme = useContext(ThemeContext);

  return (
    <div>
      {headerTag == 1 ? (
        <h1
          className={
            darkTheme
              ? "dark-title DarkTitleThem  mt-5"
              : "title  titleThem mt-5"
          }
        >
          {text}
        </h1>
      ) : headerTag == 2 ? (
        <h2
          className={
            darkTheme
              ? "dark-title DarkTitleThem  mt-5"
              : "title  titleThem mt-5"
          }
        >
          {text}
        </h2>
      ) : headerTag == 3 ? (
        <h3
          className={
            darkTheme
              ? "dark-mini-title DarkTitleThem  mt-5"
              : "mini-title  titleThem mt-5"
          }
        >
          {text}
        </h3>
      ) : headerTag == 4 ? (
        <h4
          className={
            darkTheme
              ? "dark-title DarkTitleThem  mt-5"
              : "title  titleThem mt-5"
          }
        >
          {text}
        </h4>
      ) : headerTag == 5 ? (
        <h5
          className={
            darkTheme
              ? "dark-title DarkTitleThem  mt-5"
              : "title  titleThem mt-5"
          }
        >
          {text}
        </h5>
      ) : (
        <h6
          className={
            darkTheme
              ? "dark-title DarkTitleThem  mt-5"
              : "title  titleThem mt-5"
          }
        >
          {text}
        </h6>
      )}
    </div>
  );
}
