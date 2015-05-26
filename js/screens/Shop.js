game.Shop = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {
                //Adds new child that contains the exp-screen image.
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage("exp-screen")), -10);
                
                //Binds the shop keys.
                me.input.bindKey(me.input.KEY.F1, "F1");
                me.input.bindKey(me.input.KEY.F2, "F2");
                me.input.bindKey(me.input.KEY.F3, "F3");
                me.input.bindKey(me.input.KEY.F4, "F4");
                me.input.bindKey(me.input.KEY.F5, "F5");
                me.input.bindKey(me.input.KEY.F6, "F6");
                
                var goldcost1 = 200;
                var goldcost2 = 300;
                var goldcost3 = 500;
                
                //Adds the following renderable.
                me.game.world.addChild(new (me.Renderable.extend({
                    //Initializes the font, font size, and font color.
                    init: function() {
                        this._super(me.Renderable, "init", [10, 10, 300, 50]);
                        this.font = new me.Font("Arial", 26, "green");
                    },
                    
                    //Draws the following text.
                    draw: function(renderer) {
                        this.font.draw(renderer.getContext(), "PRESS F1-F5 TO BUY, F6 TO SKIP", this.pos.x, this.pos.y);
                        this.font.draw(renderer.getContext(), "CURRENT GOLD: " + game.data.gold.toString(), this.pos.x + 100, this.pos.y + 50);
                        this.font.draw(renderer.getContext(), "CHARACTERS", this.pos.x, this.pos.y + 150);
                        this.font.draw(renderer.getContext(), "F1: FOX" + " COST: " + goldcost1 , this.pos.x + 100, this.pos.y + 200);
                        this.font.draw(renderer.getContext(), "F2: SAMUS" + " COST: " + goldcost1, this.pos.x + 100, this.pos.y + 250);
                        this.font.draw(renderer.getContext(), "F3: ???" + " COST: "  + goldcost2, this.pos.x + 100, this.pos.y + 300);
                        this.font.draw(renderer.getContext(), "MAPS" , this.pos.x, this.pos.y + 350);
                        this.font.draw(renderer.getContext(), "F4: " + " COST: " + goldcost3, this.pos.x + 100, this.pos.y + 400);
                        this.font.draw(renderer.getContext(), "F5: " + " COST: " + goldcost3, this.pos.x + 100, this.pos.y + 450);
                    },
                    
                    //The updates return true;
                    update: function() {
                        return true;
                    }
                })));
                //Subscribes the keyddown event.
                this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge){
                    //If "F1" is pressed and if your gold is greater than the gold cost, purchase the character or map. (Same concept for "F2" to "F5")
                    if(action === "F1") {
                        if(game.data.gold >= goldcost1) {
                            game.data.gold += 1;
                            game.data.gold -= goldcost1;
                        }
                        else {
                            alert ("NOT ENOUGH GOLD");
                        }
                    }
                    else if(action === "F2") {
                        if(game.data.gold >= goldcost1) {
                            game.data.gold += 1;
                            game.data.gold -= goldcost1;
                        }
                        else {
                            alert ("NOT ENOUGH GOLD");
                        }
                    }
                    else if(action === "F3") {
                        if(game.data.gold >= goldcost2) {
                            game.data.gold += 1;
                            game.data.gold -= goldcost2;
                        }
                        else {
                            alert ("NOT ENOUGH GOLD");
                        }
                    }
                    else if(action === "F4") {
                        if(game.data.gold >= goldcost3) {
                            game.data.gold += 1;
                            game.data.gold -= goldcost3;
                        }
                        else {
                            alert ("NOT ENOUGH GOLD");
                        }
                    }
                    else if(action === "F5") {
                        if(game.data.gold >= goldcost3) {
                            game.data.gold += 1;
                            game.data.gold -= goldcost3;
                        }
                        else {
                            alert ("NOT ENOUGH GOLD");
                        }
                    }
                    //If "F6" is pressed, then change to the menu state.
                    else if(action === "F6") {
                        me.state.change(me.state.MENU);
                    }
                });
	},
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
            //Stops audio.
            me.audio.stopTrack();
            
            //Unbinds the shop keys.
            me.input.unbindKey(me.input.KEY.F1, "F1");
            me.input.unbindKey(me.input.KEY.F2, "F2");
            me.input.unbindKey(me.input.KEY.F3, "F3");
            me.input.unbindKey(me.input.KEY.F4, "F4");
            me.input.unbindKey(me.input.KEY.F5, "F5");
            me.input.unbindKey(me.input.KEY.F6, "F6");
            
            //Unsubscribes from the event.
            me.event.unsubscribe(this.handler);
	}
});
