// https://jsonplaceholder.typicode.com/posts

async function clicou(){
   let response = await fetch('https://jsonplaceholder.typicode.com/posts');
   let json = await response.json();
   alert(`Titulo do primeiro post: ${json}`);

   alert(`CLICOU!!!`)
}

async function inserir(){
   let response = await fetch('https://jsonplaceholder.typicode.com/posts', 
   {
      method: 'POST',
      headers:{'Content-type': 'application/json'},
      body: JSON.stringify({
         title: 'Titulo de teste',
         body: 'Corpo de teste',
         userId: 2
      })
   })
   let json = await response.json();
   console.log(json);
}
document.querySelector('#inserir').addEventListener('click', inserir)


document.querySelector('#botao').addEventListener('click', clicou);