const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

document.addEventListener("DOMContentLoaded", e => {
  $$("code.language-math").forEach(code => {
    katex.render(code.innerText, code)
  })
})