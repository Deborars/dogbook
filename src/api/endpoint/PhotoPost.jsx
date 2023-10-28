import React from 'react'
//serena
//123
//serena@sailormoon.com
const PhotoPost = () => {
  const [token, setToken] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    //criei um objeto do tipo formulário
    const formData = new FormData();
    //primeiro argumento é a chave e o segundo é a variavel reativa do react
    formData.append('img', img);
    formData.append('nome', nome);
    formData.append('peso', peso);
    formData.append('idade', idade);

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: "POST",
      headers: { Authorization: 'Bearer' + token },
      body: formData
    }).then(response => {
      response.json()
    })
      .then((json) => { console.log(json) })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='token' type="text" value={token} onChange={({ target }) => { setToken(target.value) }} />
      <input placeholder='nome' type="text" value={nome} onChange={({ target }) => { setNome(target.value) }} />
      <input placeholder='peso' type="text" value={peso} onChange={({ target }) => { setPeso(target.value) }} />
      <input placeholder='idade' type="text" value={idade} onChange={({ target }) => { setIdade(target.value) }} />
      <input type="file" onChange={({ target }) => { setImg(target.files[0]) }} />

      <button> Enviar</button>
    </form>
  )
}

export default PhotoPost