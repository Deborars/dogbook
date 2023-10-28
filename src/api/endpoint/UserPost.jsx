import React from 'react'

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        email
      })
    }).then(response => response.json()).then((json) => { console.log(json) })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Nome' type="text" name="username" id="username" value={username} onChange={({ target }) => { setUsername(target.value) }} />
      <input placeholder='Senha' type="password" name="password" id="password" value={password} onChange={({ target }) => { setPassword(target.value) }} />
      <input placeholder='Email' type="email" name="email" id="email" value={email} onChange={({ target }) => { setEmail(target.value) }} />
      <button> Enviar</button>
    </form>
  )
}

export default UserPost