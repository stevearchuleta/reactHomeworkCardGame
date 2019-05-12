
// shuffle cards function using a copy of the array
function shuffle(array) {
  const _array = array.slice(0)
  for(let i = 0; i < array.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1))
  let temp = _array[i];
  _array[i] = _array[randomIndex]
  _array[randomIndex] = temp
  }

  return _array
}

export default function initializeDeck(){
  let id = 0
  const cards = ['IMG_3608', 'IMG_3672', 'IMG_3679', 'IMG_3686', 'IMG_3693', 'IMG_3701', 'IMG_3708', 'IMG_3716', 'Mendocino-Wildflowers'
  ].reduce((acc, type) => {
  acc.push({
    id: id++,
    type
  })
  acc.push({
    id: id++,
    type
  })
  return acc
  }, [])

  return shuffle(cards);

}