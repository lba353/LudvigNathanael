game.HeroDeathManager = Object.extend ({
    //Initializes the class by always updating
    init: function(x, y, settings){
        this.alwaysUpdate = true;
    },
    
    //If the player died, then he and the mini player location gets reset.
    update: function() {
        if(game.data.player1.dead) {
            me.game.world.removeChild(game.data.player);
            me.state.current().resetPlayer(350, 0);
        }
    }
});