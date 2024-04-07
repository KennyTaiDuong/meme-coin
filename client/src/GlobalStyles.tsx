import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;
  }

  body {
    min-height: 100vh;
  }

  button, a {
    cursor: pointer
  }

  ::-webkit-scrollbar {
    display: none;
  }
`

export default Global;