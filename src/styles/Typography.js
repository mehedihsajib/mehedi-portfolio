import { createGlobalStyle } from 'styled-components';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import RobotoLight from '../assets/fonts/Roboto-Light.ttf';
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';

const Typography = createGlobalStyle`

  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Roboto Light';
    src: url(${RobotoLight});
    font-style: normal;
  }
   @font-face {
    font-family: 'Roboto Regular';
    src: url(${RobotoRegular});
    font-style: normal;
  }
  html{
    font-family: 'Roboto Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'Roboto Regular';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }
`;

export default Typography;
