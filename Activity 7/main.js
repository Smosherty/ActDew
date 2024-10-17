document.addEventListener('DOMContentLoaded', function () {

    let gameContainer = document.getElementById('table-container');
    const brickWidth = 80;
    let currentX = 0;

    function generateBrick() {
        if (currentX + brickWidth < gameContainer.clientWidth) {
            let brick = document.createElement('div');
            brick.className = 'brick';

            brick.style.left = currentX + 'px';
            brick.style.top = (gameContainer.clientHeigth / 2 - brickWidth / 2) + 'px';
            currentX += brickWidth;
            gameContainer.appendChild(brick);

            brick.addEventListener('click', function(){
                gameContainer.removeChild(brick);
            });
        }else{
            currentX = 0;
        }
    }

    // setInterval(generateBrick, 1000);
});





