
/* Game namespace */
var game = {

	// an object where to store game information used throught the game
	data : {
		// score
		score : 0,
                option1: "",
                option2: "",
                playerHealth: 20,
                playerAttack: 1,
                playerAttackTimer: 1000,
                spearTimer: 2000,
                playerMoveSpeed: 5,
                gameTimerManager: "",
                heroDeathManager: "",
                experienceManager: "",
                player1: "",
                player2: "",
                gold: 0,
                ability1: 0,
                ability2: 0,
                ability3: 0,
                ability4: 0,
                pausePos: "",
                buyScreen: "",
                buyText: "",
                pauseScreen: "",
                pauseText: "",
	},
	
	
	// Run on page load.
	"onload" : function () {
	// Initialize the video.
	if (!me.video.init("screen",  me.video.CANVAS, 1067, 600, true, '1.0')) {
		alert("Your browser does not support HTML5 canvas.");
		return;
	}

	// add "#debug" to the URL to enable the debug Panel
	if (document.location.hash === "#debug") {
		window.onReady(function () {
			me.plugin.register.defer(this, debugPanel, "debug");
		});
	}
        
        //Custom state changes.
        me.state.SHOP = 112;
        me.state.NEW = 113;
        me.state.LOAD = 114;

	// Initialize the audio.
	me.audio.init("mp3");

	// Set a callback to run when loading is complete.
	me.loader.onload = this.loaded.bind(this);

	// Load the resources.
	me.loader.preload(game.resources);

	// Initialize melonJS and display a loading screen.
	me.state.change(me.state.LOADING);
},

	// Run on game resources loaded.
	"loaded" : function () {
                //Registers the following entities.
                me.pool.register("player1", game.PlayerOneEntity, true);
                me.pool.register("player2", game.PlayerTwoEntity, true);
                me.pool.register("GameTimerManager", game.GameTimerManager);
                me.pool.register("HeroDeathManager", game.HeroDeathManager);
                me.pool.register("ExperienceManager", game.ExperienceManager);
                me.pool.register("PauseScreen", game.PauseScreen);
                me.pool.register("spear", game.SpearThrow);
                me.pool.register("minimap", game.MiniMap, true);
                me.pool.register("miniplayer", game.MiniPlayerLocation, true);
                
                
                //Sets the following states.
		me.state.set(me.state.MENU, new game.TitleScreen());
		me.state.set(me.state.PLAY, new game.PlayScreen());
                me.state.set(me.state.SHOP, new game.Shop());
                me.state.set(me.state.LOAD, new game.LoadProfile());
                me.state.set(me.state.NEW, new game.NewProfile());

		// Start the game.
		me.state.change(me.state.MENU);
	}
};
