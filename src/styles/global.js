import { injectGlobal } from "styled-components";
import "font-awesome/css/font-awesome.css";

injectGlobal`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #f5f5f5;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smothing: antialiased !important;
        font-family: sans-serif;
    }

`;
