var options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
document.onkeyup = function(event) {

    var userGuess = event.key;
    alert(userGuess);
    var computerGuess = options[Math.floor(Math.random() * options.length)];
    alert(computerGuess);
    if (options.includes(userGuess)) {

        if (userGuess == computerGuess) {
            alert("You Win!");
        } else if (userGuess != computerGuess) {
                alert('Computer Wins!');
            }
        
    }

var lives = 4;
if (lives < 1) {
    lives -=1;
    document.getElementById("lives").innerHTML = Main.lives;
}


}

