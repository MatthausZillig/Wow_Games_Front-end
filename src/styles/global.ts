import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* poppins-300 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: url('../fonts/poppins-v12-latin-300.eot'); /* IE9 Compat Modes */
    src: local('Poppins Light'), local('Poppins-Light'),
        url('../fonts/poppins-v12-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/poppins-v12-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/poppins-v12-latin-300.woff') format('woff'), /* Modern Browsers */
        url('../fonts/poppins-v12-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/poppins-v12-latin-300.svg#Poppins') format('svg'); /* Legacy iOS */
  }
  /* poppins-regular - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/poppins-v12-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('../fonts/poppins-v12-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/poppins-v12-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/poppins-v12-latin-regular.woff') format('woff'), /* Modern Browsers */
        url('../fonts/poppins-v12-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/poppins-v12-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
  }
  /* poppins-600 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url('../fonts/poppins-v12-latin-600.eot'); /* IE9 Compat Modes */
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('../fonts/poppins-v12-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/poppins-v12-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
        url('../fonts/poppins-v12-latin-600.woff') format('woff'), /* Modern Browsers */
        url('../fonts/poppins-v12-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/poppins-v12-latin-600.svg#Poppins') format('svg'); /* Legacy iOS */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`

export default GlobalStyles
