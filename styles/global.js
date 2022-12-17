import React from "react";

export default ({ theme }) => {
  return (
    <style>
      {`
        body {
          margin: 0;
          font-size: 1rem;
          color: ${theme.colors.light};
          background-color: ${theme.colors.light};
          font-family: ${theme.fonts.body};
        }
        * {
          box-sizing: border-box;
          scroll-behavior: smooth;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: ${theme.fonts.heading} !important;
        }
        a{
          text-decoration: none;
          color: ${theme.colors.light};
        }
        a:hover {
          color: ${theme.colors.dark};
        }

        /* Works on Firefox */
        * {
            scrollbar-width: thin;
            scrollbar-color: ${theme.colors.dark2} ${theme.colors.dark};
        }
        /* Works on Chrome, Edge, and Safari */
        *::-webkit-scrollbar {
            width: 12px;
        }
        *::-webkit-scrollbar-track {
            background: ${theme.colors.dark};
        }
        *::-webkit-scrollbar-thumb {
            background-color: ${theme.colors.dark2};
            border-radius: 20px;
            border: 3px solid ${theme.colors.dark};
        }
    `}
    </style>
  );
};
