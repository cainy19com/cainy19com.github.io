const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

window.onload = () => {
  alert(katex)
  $$("code.language-math").forEach(code => {
    alert(code)
    katex.render(code.innerText, code)
  })
}