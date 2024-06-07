async function register() {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

 
  if (!email || !password) {
    alert('Por favor, insira um email e uma senha.');
    return;
  }

  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    alert('Usuário registrado com sucesso.');
    localStorage.setItem('email', email);
    window.location.href = 'index.html'; 
  } else {
    alert('Erro ao registrar usuário.');
  }
}

async function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;


  if (!email || !password) {
    alert('Por favor, insira um email e uma senha.');
    return;
  }

  const response = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    alert('Login bem-sucedido.');
    localStorage.setItem('email', email);
    window.location.href = 'index.html'; 
  } else {
    alert('Usuário ou senha incorretos.');
  }
}

window.onload = () => {
  const email = localStorage.getItem('email');
  if (email) {
    alert(`Bem-vindo de volta, ${email}`);
    window.location.href = 'index.html'; 
  }
}
