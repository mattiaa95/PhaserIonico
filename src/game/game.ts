
// import pixi, p2 and phaser ce
import "pixi";
import "p2";
import * as Phaser from "phaser-ce";

/**
 * Main entry game class
 * @export
 * @class Game
 * @extends {Phaser.Game}
 */
export class Game extends Phaser.Game {
    /**
     * Creates an instance of Game.
     * @memberof Game
     */
    constructor() {
        // call parent constructor
        super(window.innerWidth * window.devicePixelRatio, (window.innerHeight * window.devicePixelRatio) - 45 * window.devicePixelRatio, Phaser.AUTO, 'gameArea', {
            preload: () => {

            },
            create: () => {
                let line1 = new Phaser.Line(10, 10, 200, 200);
                this.debug.geom(line1);
                this.debug.lineInfo(line1, 32, 32);
            },

            update: () => {
               
            }
        });

        // add some game states
        // start with boot state
    }


}