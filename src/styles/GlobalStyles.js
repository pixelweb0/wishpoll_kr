import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
  
@import url("https://webfontworld.github.io/sandbox/SBAggro.css");
@import url("https://webfontworld.github.io/pretendard/Pretendard.css");

/* Reset */
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  -webkit-text-size-adjust: none;
  word-wrap: break-word;
  word-break: keep-all;
}

*,
:before,
:after {
  box-sizing: border-box;
}
html,
body {
  width: 100%;
}
body {
  width: 100%;
  background: #fff;
  min-width: 320px;
}
body,
input,
select,
textarea,
button {
  border: none;
  font-size: 16px;
  font-family: "Pretendard", sans-serif;
  color: #212121;
}
ul,
ol,
li {
  list-style: none;
}
table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
}
img,
fieldset {
  border: 0;
}
address,
cite,
code,
em {
  font-style: normal;
  font-weight: normal;
}
label,
img,
input,
select,
textarea,
button {
  vertical-align: middle;
}
.hide,
caption,
legend {
  line-height: 0;
  font-size: 1px;
  overflow: hidden;
}
hr {
  display: none;
}
main,
header,
section,
nav,
footer,
aside,
article,
figure {
  display: block;
}
a {
  color: #212121;
  text-decoration: none;
}
strong,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

`;

export default GlobalStyles;
