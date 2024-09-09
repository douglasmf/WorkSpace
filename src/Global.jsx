import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    body {
        overflow-x: hidden;
    }
    a {
        text-decoration: none;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }

`;