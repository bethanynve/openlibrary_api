//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const isbn = document.querySelector('input').value
  const url = `https://openlibrary.org/isbn/${isbn}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = `${data.title}`
        if (data.subtitle) {
          document.querySelector('h2').innerText += ` : ${data.subtitle}`
        }
        document.querySelector('h3').innerText = data.by_statement
        // document.querySelector('h3').innerText = data.authors[0].key.json
        document.querySelector('img').src = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}