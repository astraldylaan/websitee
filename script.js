// ===== CONTADOR DE VISITAS REAL (CountAPI) =====
const visitCounter = document.getElementById('visit-counter');
fetch('https://api.countapi.xyz/hit/roblox-store/dylan/')
  .then(res => res.json())
  .then(data => {
    visitCounter.textContent = `👁️ ${data.value}`;
  })
  .catch(err => console.log(err));

// ===== BOTONES =====
const clickSound = document.getElementById('click-sound');

document.getElementById('btn-juego').addEventListener('click', () => {
    clickSound.play();
    window.open('https://www.roblox.com/games/117568312093435/SWORD-FIGHT#!/store', '_blank');
});

document.getElementById('btn-seguir').addEventListener('click', () => {
    clickSound.play();
    window.open('https://www.roblox.com/users/9069414772/profile', '_blank');
});

document.getElementById('btn-donar').addEventListener('click', () => {
    clickSound.play();
    window.open('https://www.roblox.com/game-pass/1502094875/Donation', '_blank');
});

// ===== FONDO ESTRELLADO CON PARALLAX =====
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;
const stars = [];

// Crear estrellas
for(let i=0; i<250; i++){
    stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random()*2 + 1,
        dx: 0,
        dy: 0
    });
}

// Movimiento con el mouse
window.addEventListener('mousemove', e => {
    const mx = (e.clientX - w/2)/500;
    const my = (e.clientY - h/2)/500;
    stars.forEach(s => { s.dx = mx; s.dy = my; });
});

// Dibujar estrellas
function draw(){
    ctx.clearRect(0,0,w,h);
    stars.forEach(s => {
        s.x += s.dx;
        s.y += s.dy;

        // Reaparecer estrellas
        if(s.x > w) s.x = 0;
        if(s.x < 0) s.x = w;
        if(s.y > h) s.y = 0;
        if(s.y < 0) s.y = h;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
        ctx.fillStyle = "white";
        ctx.fill();
    });
    requestAnimationFrame(draw);
}
draw();

// Ajustar tamaño del canvas al cambiar la ventana
window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
});
