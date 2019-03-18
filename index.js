function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('.target')
}

function deepestChild() {
  const deep = document.querySelectorAll('#grand-node div')
  return deep[deep.length - 1]
}

function increaseRankBy(n) {
  let ranked = document.querySelectorAll('.ranked-list li')
  let i = 0
  while (i < ranked.length){
    ranked[i].textContent = parseInt(ranked[i].textContent) + n
    i++
  }
}
