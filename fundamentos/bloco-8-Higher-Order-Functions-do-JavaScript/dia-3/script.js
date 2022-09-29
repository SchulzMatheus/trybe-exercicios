const formatedBook = (array) => array.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`);
const nameAndAge = (array) => array.map((element) => ({author: element.author.name, age: element.releaseYear - element.author.birthYear})).sort((x, y) => x.age - y.age);
const fantasyOrScienceFiction = (array) => array.filter((element) => {
  if(element.genre === 'Fantasia' || element.genre === 'Ficção Científica') return element;
})
const oldBooks = (array) => {
  const x = array.filter((element) => (element.releaseYear < 2022 - 60))
  return x.map((xElements) => (xElements.name)).sort((XelementX, XelementY) => XelementX.releaseYear - XelementY.releaseYear)
}
const authorWith3DotsOnName = (array) => array.find((element) => (element.author.name.split (' ').filter((lastChar) => lastChar.endsWith('.')).length === 3)).name;


module.exports = { formatedBook,
nameAndAge,
fantasyOrScienceFiction,
oldBooks,
authorWith3DotsOnName };