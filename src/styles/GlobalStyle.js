import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body,
html {
    height: 100%;
}

html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
     font-size: 62.2%;
    font-family: 'Roboto Mono';
    background-color: var(--color-dark-light);
}

  :root{
    --dark-bg: #262626;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;

    /* Theme Fonts */
    --text-small: 1.4rem;
     --text-normal: 1.6rem;
     --text-medium: 1.8rem;
     --text-large: 2rem;

    /* Theme Colors*/
    --color-dark-light: #1b1f23;
    --color-dark-deep: #202327;
    --color-gold: #C68B59;
    --color-grey-1: #BCB4B4;
    --color-white: #fff;

    /* Spacing */
    --mt-xsm: 1rem
    --mt-sm: 2rem;
    --mt-md: 3rem;
    --mt-lg: 4rem;

    --mb-xsm: 1rem;
    --mb-sm: 2rem;
    --mb-md: 3rem;
    --mb-lg: 4rem;

    --ml-xsm: 1rem;
    --ml-sm: 2rem;
    --ml-md: 3rem;
    --ml-lg: 4rem;

    --mr-xsm: 1rem;
    --mr-sm: 2rem;
    --mr-md: 3rem;
    --mr-lg: 4rem;

    /* Theme Shadows */
    --box-shadow-1: 10px 10px 19px #1c1e22,
        -10px -10px 19px #262a2e;

    --soft-shadow-1: 6px 6px 12px #16191c, -6px -6px 12px #20252a;
    --soft-shadow-2: 10px 10px 20px #181b1f, -10px -10px 20px #1e2327;
   
  }
 
  h1,h2,h3,h4,h5 {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat Bold'
    
  }
  p {
    font-family: 'Roboto Regular';
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    outline: 0;
  }
  img, svg{
    max-width: 100%;
    /* object-fit: cover; */
  }
  button{
    outline: none
  }
 
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }


  /* =========== TYPOGRAPHY ============ */
  .heading-1 {
    font-size: clamp(35px, 5vw, 70px);
    font-family: 'Montserrat Bold'
  
  }

  .heading-2 {
    font-size: clamp(35px, 5vw, 60px);
    font-family: 'Montserrat Bold';
  }

  .heading-3 {
    font-size: clamp(25px, 5vw, 35px);
  }

  .heading-4 {
    font-size: clamp(20px, 2vw, 30px);
  }

  .small-heading {
    font-size: 18px;
    font-weight: normal;
    text-transform: uppercase;
    color: var(--color-gold);
  }

  .body-text-1 {
    font-size: 1.4rem;
  }

  .body-text-2 {
    font-size: 1.6rem;
  }

  .body-text-3 {
    font-size: 1.8rem;
  }


  /* =========== UITILITIES ============ */
  .section-padding {
    padding: 10rem 0rem;

    @media (max-width: 768px) {
      padding: 5rem 0;
    }
  }

  
`;
export default GlobalStyles;
