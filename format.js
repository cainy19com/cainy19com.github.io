const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

window.onload = () => {
  $$("code.language-math").forEach(code => {
    katex.render(code.innerText, code)
  })
}