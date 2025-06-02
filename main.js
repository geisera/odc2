const title = 'Orbital Defense Corps'
const subtitle = 'The Journal of Military Sicence Fiction'
const articleList = [
  {
    title: 'Latest Doctrine',
    description: 'How rotating fortress‑stations tore up orbital warfare playbooks.',
    link: '/article'
  },
  {
    title: 'Tech Brief',
    description: 'Rail‑cannons vs lasers: cost, power, and reload times in deep‑space engagements.',
    link: '/article'
  },
  {
    title: 'After Action Report',
    description: 'Lessons from the simulated Siege of Galileo Gate, why timing an EMP strike still matters.',
    link: '/article'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  // Update the footer year automatically
  document.getElementById('year').textContent = new Date().getFullYear();

  

  // Article Cards
  const section = document.getElementById('articles');
 
  articleList.forEach(article => {
    let node = document.createElement('article');
    node.className = 'card';
    node.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <p><a href="${article.link}">read more...</a></p>
    `;
    section.appendChild(node);
    console.log(`${article.title}`);
  });
});

// Navbar
document.getElementById('nav').innerHTML = `
  <nav>
    <div>
        <h2>${title}</h2>
        <h3><em>${subtitle}</em></h3>
    </div>
    <div>
      <a href="/"><span class="material-symbols-outlined">home</span></a>  
      <a href="/map.html"><span class="material-symbols-outlined">orbit</span></a>
    </div>
  </nav>
`;

