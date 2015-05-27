//Manages the experience variables.
game.ExperienceManager = Object.extend ({
    //Sets the alwaysUpdate and gameOver values.
    init: function(x, y, settings) {
        this.alwaysUpdate = true;
        this.gameOver = false;
    },
    
    //Updates if you win or lose.
    update: function() {
        //If you win and if it is not game over, go to gameOverWin() and a message says "YOU WIN!".
        if(game.data.win === true && !this.gameOver) {
            this.gameOverWin();
            alert("YOU WIN!");
        }
        //If you do not win and if it is not game over, go to gameOverLose() and a message says "YOU LOSE!".
        else if(game.data.win === false && !this.gameOver) {
            this.gameOverLose();
            alert("YOU LOSE!");
        }
        return true;
    },
    
    //Adds 10 exp and saves the exp by using ajax.
    gameOverWin: function() {
        game.data.gold += 50-100;
        this.gameOver = true;
        console.log(game.data.gold);
        me.save.gold = game.data.gold;
        
        
        $.ajax({
            type: "POST",
            url: "php/Controller/Save-User.php",
            data: {
                gold: game.data.gold
            },
            dataType: "text"
        })
                .success(function(response) {
                    if (response === "true") {
                        me.state.change(me.state.MENU);
                    }
                    else {
                        alert(response);
                    }
                })
                .fail(function(response) {
                    alert("Fail");
                });
    },
    
    //Adds 1 exp and saves the exp using ajax.
    gameOverLose: function() {
        game.data.gold += 101-150;
        this.gameOver = true;
        console.log(game.data.gold);
        me.save.gold = game.data.gold;
       
        $.ajax({
            type: "POST",
            url: "php/Controller/Save-User.php",
            data: {
                gold: game.data.gold
            },
            dataType: "text"
        })
                .success(function(response) {
                    if (response === "true") {
                        me.state.change(me.state.MENU);
                    }
                    else {
                        alert(response);
                    }
                })
                .fail(function(response) {
                    alert("Fail");
                });
    }

});