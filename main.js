const statusMessage = document.querySelector('.status-message p');
const games = ['mcstatus.hu', 'aronn.hu', 'turulcraft.hu', 'Aronn közössége', 'dc.aronn.hu'];
let currentGame = 0;
let isTransitioning = false;

function updateGame() {
    if (isTransitioning) return;
    
    isTransitioning = true;
    statusMessage.style.opacity = '0';
    
    setTimeout(() => {
        currentGame = (currentGame + 1) % games.length;
        statusMessage.textContent = `🎮 Jelenleg nézi: ${games[currentGame]}`;
        statusMessage.style.opacity = '1';
        
        setTimeout(() => {
            isTransitioning = false;
        }, 300);
    }, 300);
}

setInterval(updateGame, 3000);

document.querySelectorAll('.role').forEach(role => {
    role.addEventListener('mouseover', () => {
        role.style.transform = 'translateY(-2px)';
    });
    
    role.addEventListener('mouseout', () => {
        role.style.transform = 'translateY(0)';
    });
});