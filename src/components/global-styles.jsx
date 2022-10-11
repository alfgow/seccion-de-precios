import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
--bg: #242629; 
--white: #fffffe; 
--border: #eff0f6; 
--card__background: #16161a; 
--grey: #94a1b2; 
--blue-dark: #0e172c; 
--blue-dark-inactive: #0e172c90;
--purple-ligth: #b69eff; 
--purple-dark: #7f5af0; 
--h1: 700 3.125rem/normal Inter; 
--h2: 700 2rem/normal Inter; 
--body1-regular: 400 1.125rem/1.75rem Inter; 
--body1-bold: 700 1.125rem/normal Inter;
}
body {
    background: var(--bg);
}
`;

export default GlobalStyle;
