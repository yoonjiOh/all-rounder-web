/** @type {import('tailwindcss').Config} */

const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_500 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) };
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };
const px0_2000 = { ...Array.from(Array(2001)).map((_, i) => `${i}px`) };

module.exports = {
  // Tailwind class name 을 사용하는 모든 파일 경로를 담는다. 경로에 있는 파일들을 기준으로 최종 css 파일이 생성된다.
  content: [
    "./src/**/*.{tsx, ts}",
    "./src/pages/**/*.{tsx, ts}",
    "./src/common/**/*.{tsx, ts}",
    "./src/domains/**/*.{tsx, ts}",
  ],
  theme: {
    // semantic 한 class name 을 사용하기 위해 우리 서비스 내에서 의미가 있는 (semantic) 속성들만 따로 정의해준다.
    extend: {
      fontSize: px0_500,
      spacing: px0_2000,
      lineHeight: px0_100,
      width: px0_1000,
      maxWidth: px0_2000,
      height: px0_1000,
      borderRadius: px0_100,
      backdropBlur: px0_100,
      textDecorationThickness: px0_100,

      colors: {
        // 앞으로 쓸 것(NEW)
        primary: "#2d4b9e",
        error: "#dc306f",

        // 중복 컬러 가능
        // text color
        white: "#ffffff",
        black: "#222222",
        link: "#006bd5",
        blue: "#505bc1",
        hover: "#14B8A6",
        darkNavy: "#0e1d45",
        orange: "#eb7154",

        // background color
        navBar: "#0e1d45",
        footerBox: "#f6f6f6",
        footerBoxBottom: "#eeeff2",
        bgGray: "#f6f6f6",
        bgLigntGray: "#f8f8f8",
        bgYellow: "#ffd500",
        bgRed: "#e13e54",
        bgWhite: "#ffffff",
        menuActive: "#f4f4f4",
        itemUpload: "#f9f9f9",
        bgGreen: "#41a864",
        // 40% opacity black background color
        blackOpacity40p: "rgba(0, 0, 0, 0.4)",

        // border color
        borderGray: "#e5e5e5",
        borderBlue: "#425da8",

        // button color
        btnDisabledBg: "#e5e5e5",
        btnInfoBg: "#f5f7f9",

        // input background color
        inputActiveBg: "#f5f7f9",

        // 추후 바꿔야함 (OLD 이전 예정)
        // text color
        primaryText: "#2d4b9e",
        warningText: "#dc2626",
        infoText: "#1d4ed8",
        successText: "#059669",
        errorText: "#dc2626",
        whiteText: "#ffffff",
        // text-zinc-300
        // text-black
        // text-slate-500
        // text-teal-500
        // text-gray-500

        // background color
        primaryBg: "#2563eb",
        warningBg: "#fed7d7",
        infoBg: "#ebf8ff",
        successBg: "#d1fae5",
        errorBg: "#fed7d7",
        navBarBg: "#0e1d45",
        bgSlate800: "bg-slate-800",
        // bg-slate-800
        // bg-transparent
        // bg-gray-200
        // bg-black
        // bg-slate-400
        // bg-gray-100
        // bg-white
        // bg-blue-200

        // border color
        primaryBorder: "#2d4b9e",
        activeBorder: "#2563eb",
        warningBorder: "#fed7d7",
        errorBorder: "#fed7d7",

        // button color
        primaryBtnColor: "#000000",
        primaryBtnTextColor: "#ffffff",
        primaryTextBtnColor: "#ffffff",
        primaryTextBtnTextColor: "#000000",
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },

      backgroundImage: {
        "item-col-bg-left": "url('../public/images/item_col_bg_left.jpg')",
        "item-col-bg-right": "url('../public/images/item_col_bg_right.jpg')",
        "item-col-bg-center": "url('../public/images/item_col_bg_center.jpg')",
        item: "url('../public/images/item_frame.png')",
        feed: "url('../public/images/logo/feed_default_image.jpg')",
      },
      boxShadow: {
        modal: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      },
    },
  },
  plugins: [],
};