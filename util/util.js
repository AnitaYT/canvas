// RGB→转换为十六进制
const rgb2hex = ([r, g, b]) =>
    `#${(1 << 24) + (r << 16) + (g << 8) + b}`.toString(16).substr(1);


// << 运算符执行左移位运算
// 1 << 24 10进制的颜色值

// rgb2hex([76, 11, 181]);
// #4c0bb5


//  转换十六进制→RGB
// const hex2rgb = hex =>
//   [1, 3, 5].map((h) => parseInt(hex.substring(h, h + 2), 16));

const hex2rgb = hex => {
  if (hex.substring(1).length === 3) hex = hex.split('').map(v => String(v) + v).join();
  [1, 3, 5].map((h) => parseInt(hex.substring(h, h + 2), 16));
}

// hex2rgb("#4c0bb5");  hex2rgb("#fda")
// [76, 11, 181]


function getRad (deg) {
  return (Math.PI * deg) / 180;
}

function getDeg (rad) {
  return (rad * 180) / Math.PI;
}

getRad(30); // 0.5235987755982988rad
getDeg(0.7853981633974483); // 45deg