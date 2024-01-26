/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        'sm': '640px', // 移动端
        'md': '768px', // 平板
        'lg': '1024px', // 小电脑
        'xl': '1280px', // 大电脑
        // ...其他断点
      },
    },
  },
  plugins: [],
}

