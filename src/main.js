import './style.css'

document.querySelector('#app').innerHTML = `
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="/" class="navbar-brand">Hirefel</a>
      <button class="navbar-toggle" aria-label="Toggle menu" onclick="document.querySelector('.navbar').classList.toggle('open')">
        <span></span><span></span><span></span>
      </button>
      <ul class="navbar-links">
        <li><a href="/" class="active">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <div class="robot">🤖</div>
    <h1>Hello I'm a robot!</h1>
    <p class="subtitle">Powered by Hirefel</p>
  </div>
  <footer class="site-footer">© 2026 Hirefel SL. Built with ❤️ by Imad Barghout</footer>
`
