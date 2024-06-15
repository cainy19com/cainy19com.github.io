const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

window.onload = () => {
  $$("code.language-meth").forEach(code => {
    const exp = code.innerText
    katex.render(exp, code, {throwOnError: false})
  })
  
  $$("p").forEach(p => {
    // p.innerHTML = p.innerHTML.replaceAll("BRRR", "<br>")
    const text = p.innerHTML.trim()
    if (text.startsWith("http")) {
      p.innerHTML = `<a href="${text}">${text}</a>`
    }
    if (text.startsWith("https://cainy19com.github.io/")) {
      const a = p.querySelector("a")
      a.innerText = a.innerText.split("/").pop()
    }
    if (!text.startsWith("http")) {
      p.innerHTML = text.replaceAll(/\$([^\$]*)\$/gi, (m, m1) => {
        const span = document.createElement("span")
        katex.render(m1, span, {throwOnError: false})
        return span.innerHTML
      })
    }
  })
}