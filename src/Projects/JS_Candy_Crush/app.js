document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const scoreDisplay = document.getElementById('score');
    const timeDisplay = document.getElementById('time');
    const modal = document.getElementById('gameOverModal');
    const modalClose = document.getElementById('close');
    const modalScoreDisplay = document.getElementById('final-score');
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const playAgainBtn = document.getElementById('play-again-btn');
    const width = 8;   
    const squares = [];
    let gameInterval;
    let countDownTimer;
    let timeLeft = 30;
    let score = 0;
    
    const candyImages = [
        'url(images/red-candy.png)',
        'url(images/yellow-candy.png)',
        'url(images/orange-candy.png)',
        'url(images/purple-candy.png)',
        'url(images/green-candy.png)',
        'url(images/blue-candy.png)'
    ];

    //create board
    function createBoard() {
        for(let i = 0; i < width*width; i++){
            const square = document.createElement('div');
            square.setAttribute('draggable', true);
            square.setAttribute('id', i);
            let randomImage = Math.floor(Math.random() * candyImages.length);
            if(i > 0){
                if(randomImage == squares[i-1]){
                    randomImage = Math.floor(Math.random() * candyImages.length);
                    console.log(randomImage);
                }
            }
            square.style.backgroundImage = candyImages[randomImage];
            grid.appendChild(square);
            squares.push(square);
        }
    }

    //load board
    createBoard();

    //drag the candies
    let ImageBeingDragged; 
    let ImageBeingReplaced;
    let squareIdBeingDragged;
    let squareIdBeingReplaced;

    // add event listeners
    //squares
    squares.forEach(square => square.addEventListener('dragstart', dragStart));
    squares.forEach(square => square.addEventListener('dragend', dragEnd));
    squares.forEach(square => square.addEventListener('dragover', dragOver));
    squares.forEach(square => square.addEventListener('dragenter', dragEnter));
    squares.forEach(square => square.addEventListener('dragleave', dragLeave));
    squares.forEach(square => square.addEventListener('drop', dragDrop));
    //buttons
    playAgainBtn.onclick = playAgain;
    startBtn.onclick = startGame;
    stopBtn.onclick = stopGame;

    //drag functions
    function dragStart() {
        ImageBeingDragged = this.style.backgroundImage;
        squareIdBeingDragged = parseInt(this.id);
    }

    function dragEnd() {
        //determine a valid move
        let validMoves = [
            squareIdBeingDragged -1, 
            squareIdBeingDragged -width,
            squareIdBeingDragged +1,
            squareIdBeingDragged +width];
        //true/false flag
        let validMove = validMoves.includes(squareIdBeingReplaced);
        
        //if valid and being replaced, empty current square
        //if not valid move revert the squares back
        //else set square to dragged square
        if(squareIdBeingReplaced && validMove){
            squareIdBeingReplaced = null;
        }else if(squareIdBeingReplaced && !validMove){
            squares[squareIdBeingReplaced].style.backgroundImage = ImageBeingReplaced;
            squares[squareIdBeingDragged].style.backgroundImage = ImageBeingDragged;
        }else squares[squareIdBeingDragged].style.backgroundImage = ImageBeingDragged;
        
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
    }

    function dragLeave() {
    }

    function dragDrop() {
        ImageBeingReplaced = this.style.backgroundImage;
        squareIdBeingReplaced = parseInt(this.id);
        this.style.backgroundImage = ImageBeingDragged;
        squares[squareIdBeingDragged].style.backgroundImage = ImageBeingReplaced;
    }

    //drops candies once some have been cleared
    function moveDown(){
        for(i = 0; i < 55; i++){
            if(squares[i+width].style.backgroundImage === ''){
                squares[i+width].style.backgroundImage = squares[i].style.backgroundImage;
                squares[i].style.backgroundImage = '';
            }
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
            const isFirstRow = firstRow.includes(i);
            if(isFirstRow && squares[i].style.backgroundImage === ''){
                let randomImage = Math.floor(Math.random() * candyImages.length);    
                squares[i].style.backgroundImage = candyImages[randomImage];
            }
        }
    }

    //checking for matches
    //check for row of three
    function checkRowForThree() {
        for(i = 0; i < 62; i++){
            let rowOfThree = [i, i+1, i+2];
            let decidedImage = squares[i].style.backgroundImage;
            const isBlank = squares[i].style.backgroundImage === '';

            const notValid = [6 , 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55];
            if(notValid.includes(i))continue;

            if(rowOfThree.every(index => squares[index].style.backgroundImage === decidedImage && !isBlank)){
                score+=3;
                timeLeft++;
                timeDisplay.innerHTML = timeLeft;
                scoreDisplay.innerHTML = score;
                rowOfThree.forEach(index => {
                    squares[index].style.backgroundImage = '';
                })
            }
        }
    }

    //check for Colomn of three
    function checkColumnForThree() {
        for(i = 0; i < 48; i++){
            let columnOfThree = [i, i+width, i+width*2];
            let decidedImage = squares[i].style.backgroundImage;
            const isBlank = squares[i].style.backgroundImage === '';

            if(columnOfThree.every(index => squares[index].style.backgroundImage === decidedImage && !isBlank)){
                score+=3;
                timeLeft++;
                timeDisplay.innerHTML = timeLeft;
                scoreDisplay.innerHTML = score;
                columnOfThree.forEach(index => {
                    squares[index].style.backgroundImage = '';
                })
            }
        }
    }

    //check for row of four
    function checkRowForFour() {
        for(i = 0; i < 61; i++){
            let rowOfFour = [i, i+1, i+2, i+3];
            let decidedImage = squares[i].style.backgroundImage;
            const isBlank = squares[i].style.backgroundImage === '';

            const notValid = [5, 6 , 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55];
            if(notValid.includes(i))continue;
            
            if(rowOfFour.every(index => squares[index].style.backgroundImage === decidedImage && !isBlank)){
                score+=4;
                timeLeft+=2;
                timeDisplay.innerHTML = timeLeft;
                scoreDisplay.innerHTML = score;
                rowOfFour.forEach(index => {
                    squares[index].style.backgroundImage = '';
                })
            }
        }
    }

    //check for Colomn of four
    function checkColumnForFour() {
        for(i = 0; i < 40; i++){
            let columnOfFour = [i, i+width, i+width*2, i+width*3];
            let decidedImage = squares[i].style.backgroundImage;
            const isBlank = squares[i].style.backgroundImage === '';

            if(columnOfFour.every(index => squares[index].style.backgroundImage === decidedImage && !isBlank)){
                score+=4;
                timeLeft+=2;
                timeDisplay.innerHTML = timeLeft;
                scoreDisplay.innerHTML = score;
                columnOfFour.forEach(index => {
                    squares[index].style.backgroundImage = '';
                })
            }
        }
    }

    //check for row of five
    function checkRowForFive() {
        for(i = 0; i < 60; i++){
            let rowOfFive = [i, i+1, i+2, i+3, 4];
            let decidedImage = squares[i].style.backgroundImage;
            const isBlank = squares[i].style.backgroundImage === '';

            const notValid = [4, 5, 6 , 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31, 36, 37, 38, 39, 44, 45, 46, 47, 52, 53, 54, 55];
            if(notValid.includes(i))continue;
            
            if(rowOfFive.every(index => squares[index].style.backgroundImage === decidedImage && !isBlank)){
                score+=5;
                timeLeft+=3;
                timeDisplay.innerHTML = timeLeft;
                scoreDisplay.innerHTML = score;
                rowOfFive.forEach(index => {
                    squares[index].style.backgroundImage = '';
                })
            }
        }
    }

    //check for Colomn of five
    function checkColumnForFive() {
        for(i = 0; i < 32; i++){
            let columnOfFive = [i, i+width, i+width*2, i+width*3, i+width*4];
            let decidedImage = squares[i].style.backgroundImage;
            const isBlank = squares[i].style.backgroundImage === '';

            if(columnOfFive.every(index => squares[index].style.backgroundImage === decidedImage && !isBlank)){
                score+=5;
                timeLeft+=3;
                timeDisplay.innerHTML = timeLeft;
                scoreDisplay.innerHTML = score;
                columnOfFive.forEach(index => {
                    squares[index].style.backgroundImage = '';
                })
            }
        }
    }

    function startGame() {
        modal.style.display = 'none';
        if(timeLeft => 0){
            gameInterval = window.setInterval(function(){
                moveDown();
                checkRowForFive();
                checkColumnForFive();
                checkRowForFour();
                checkColumnForFour();
                checkRowForThree();
                checkColumnForThree();
            }, 100);
            startTimer();
        }
    }

    function stopGame() {
        clearInterval(gameInterval);
        clearInterval(countDownTimer);
    }
    
    function startTimer() {
         countDownTimer = setInterval(function(){
            if(timeLeft == -1){
                clearTimeout(countDownTimer);
                modal.style.display = 'block';
                modalScoreDisplay.innerHTML = 'Game over! Your final score was ' + score + '!';
            } else {
                timeDisplay.innerHTML = timeLeft;
                timeLeft--;
            }
        }, 1000);
    }

    function playAgain() {
        modal.style.display = 'none';
        score = 0;
        scoreDisplay.innerHTML = score;
        timeLeft = 30;
        startGame();
    }

    modalClose.onclick = function() {
        modal.style.display = 'none';
    }

});