module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "import"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-duplicate-imports": "error", //중복 Import 안돼용
    "no-unused-vars": "error", //사용하지 않은 변수면 없애기
    "no-multiple-empty-lines": "error", //공백 금지
    "no-undef": "error", //정의 안 한 변수 사용 x
    indent: ["error", 2], //들여쓰기 2칸
    "no-trailing-spaces": "error", // 쓸데없는 공백 없애기
    "import/newline-after-import": ["error", { count: 1 }], //import 구문들 뒤에 한 칸 띄우고 코드 작성
  },
};
