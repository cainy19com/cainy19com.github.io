const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

window.onload = () => {
  $$("code.language-meth").forEach(code => {
    const exp = code.innerText
    katex.render(exp, code, {throwOnError: false})
  })
  
  $$("p").forEach(p => {
    const text = p.innerText.trim()
    if (text.startsWith("http"))
      p.innerHTML = `<a href="${text}">${text}</a>`
  })
}