const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

window.onload = () => {
  alert(123)
  $$("code.language-math").forEach(code => {
    alert(code.innerText)
    katex.render(code.innerText, code)
  })
}