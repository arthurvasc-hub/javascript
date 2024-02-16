// https://jsonplaceholder.typicode.com/posts

function clicou(){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then((response) => {
        return response.json();
   })
   .then((json) => {
    alert(`Titulo do primeiro post: ${json}`)
   })

   .catch((error) => {
      alert("Deu problema na requisição")
   })
}

function inserir(){
   fetch('https://jsonplaceholder.typicode.com/posts', 
   {
      method: 'POST',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify({
         title: 'Titulo de teste',
         body: 'Corpo de teste',
         userId: 2
      })
   })
   .then((response) => {
      return response.json();
   }).then((json) =>{
      console.log(json)
   })
}
document.querySelector('#inserir').addEventListener('click', inserir)


document.querySelector('#botao').addEventListener('click', clicou);