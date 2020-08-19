window.addEventListener('load', () => {
  const lines = [...document.querySelectorAll('.titleLine')]
  console.log(lines)

  window.addEventListener('scroll', () => {
    // console.log(window.pageYOffset)
    showLine()
  })

  function showLine() {
    lines.forEach(line => {
      if (window.pageYOffset >= ((line.getBoundingClientRect().y + window.pageYOffset) - window.innerHeight / 100 * 80)) {
        if (!line.classList.contains('titleLine_show'))
          line.classList.add('titleLine_show')
      }
      if (window.pageYOffset >= ((line.getBoundingClientRect().y + window.pageYOffset) - window.innerHeight / 100 * 0.1) || line.getBoundingClientRect().y + window.pageYOffset > window.pageYOffset + window.innerHeight) {
        if (line.classList.contains('titleLine_show'))
          line.classList.remove('titleLine_show')
      }
    })
  }
  showLine()

  // lines.forEach(line => {
  //   console.log(line, line.getBoundingClientRect().y + (line.getBoundingClientRect().width + window.innerHeight / 3))
  // })
})