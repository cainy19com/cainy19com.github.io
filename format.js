const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

window.onload = () => {
  $$("code.language-math").forEach(code => {
    const exp = code.innerText.replace("displaylines", "displaystyle")
    katex.render(exp, code, {throwOnError: false})
  })
}