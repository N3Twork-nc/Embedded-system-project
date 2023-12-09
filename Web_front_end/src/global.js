import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-roboto: Roboto;
--font-gilroy: Gilroy;
--footnote: Poppins;
--font-montserrat: Montserrat;

/* font sizes */
--font-size-4xl: 23px;
--font-size-mini: 15px;
--caption-medium-size: 12px;
--headline-size: 16px;
--font-size-xl: 20px;
--font-size-mid: 17px;
--footnote-size: 14px;
--font-size-11xl: 30px;

/* Colors */
--color-seagreen: #0d986a;
--primary: #000;
--white: #fff;
--red: #ff3b30;
--color-darkgreen-100: #0d6511;
--border: #e6edff;
--indigo: #347ae2;
--orange: #ff9500;
--green: #34c759;
--secondary: #7c8db5;
--gray: #BBC5BB;
--color-midnightblue: #0f123f;

/* Gaps */
--gap-50xl: 69px;
--gap-xs: 12px;
--gap-13xl: 32px;
--gap-xl: 20px;
--gap-5xs: 8px;
--gap-5xl: 24px;
--gap-53xl: 72px;
--gap-lgi: 19px;
--gap-9xs: 4px;

/* Paddings */
--padding-10xs: 3px;
--padding-7xs-5: 5.5px;
--padding-xl: 20px;
--padding-xs: 12px;
--padding-9xs: 4px;
--padding-5xs: 8px;

/* Border radiuses */
--br-3xs: 10px;
--br-5xs: 8px;
--br-base: 16px;
--br-xs: 12px;
--br-mid: 17px;

/* Effects */
--shadow: 0px 2px 10px rgba(124, 141, 181, 0.12);
}
`;
