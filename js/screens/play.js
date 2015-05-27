game.PlayScreen = me.ScreenObject.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
	    // reset the score
	    game.data.score = 0;
            //Starts the game at Level 1
            me.levelDirector.loadLevel("FD");
            
            //Sets player at 350 pixels right and 0 pixels down.
            this.resetPlayer(350, 0);
                
            //Variables set that are used throught out the game (Lines 14-34).               
            var experienceManager = me.pool.pull("ExperienceManager", 0, 0, {});
            me.game.world.addChild(experienceManager, 0);
            
            var heroDeathManager = me.pool.pull("HeroDeathManager", 0, 0, {});
            me.game.world.addChild(heroDeathManager, 0);
            
            var pause = me.pool.pull("PauseScreen", 0, 0, {});
            me.game.world.addChild(pause, 0);
            
            //Binds the movement keys.
            me.input.bindKey(me.input.KEY.A || me.input.KEY.RIGHT, "right");
            me.input.bindKey(me.input.KEY.S || me.input.KEY.LEFT, "left");
            me.input.bindKey(me.input.KEY.W || me.input.KEY.UP, "jump");
            me.input.bindKey(me.input.KEY.R || me.input.KEY.I, "regularAttack");
            me.input.bindKey(me.input.KEY.T || me.input.KEY.O, "specialAttack");
            me.input.bindKey(me.input.KEY.Y || me.input.KEY.P, "block");
            
            //Binds the pause key.
            me.input.bindKey(me.input.KEY.ESC, "pause");

	    // add our HUD to the game world
	    this.HUD = new game.HUD.Container();
	    me.game.world.addChild(this.HUD);
	},


	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
	    // remove the HUD from the game world
	    me.game.world.removeChild(this.HUD);
	},
        
        //When the player gets reset, these functions are carried out.
        resetPlayer: function(x, y) {
            game.data.player = me.pool.pull("player", x, y, {});
            me.game.world.addChild(game.data.player, 5);
        }
});
