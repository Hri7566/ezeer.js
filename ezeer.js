// ███████╗███████╗███████╗███████╗██████╗         ██╗███████╗
// ██╔════╝╚══███╔╝██╔════╝██╔════╝██╔══██╗        ██║██╔════╝
// █████╗    ███╔╝ █████╗  █████╗  ██████╔╝        ██║███████╗
// ██╔══╝   ███╔╝  ██╔══╝  ██╔══╝  ██╔══██╗   ██   ██║╚════██║
// ███████╗███████╗███████╗███████╗██║  ██║██╗╚█████╔╝███████║
// ╚══════╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝ ╚════╝ ╚══════╝

/**
 * EZEER.JS START
 */

class E {
	static name = "EZEER.JS";
	static version = "Alpha 0.0.1b";

	static console = console;
	static date = Date;
	static round = Math.round;

	static getVersion() {
		return `${this.name} ${this.version}`;
	}
}

/**
 * EZEE.JS END
 */

// for node
if (typeof(module) !== 'undefined') {
	module.exports = E;
}
