const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var Calculator = {
	"C" : 3e8,
	"EnergieLevels":new Array(1e5),
	"CoreChargeNumber" : 1,
	"CalcEnergieLevel": function (level) {
		return 13.6*(Math.pow(this.CoreChargeNumber,2)/Math.pow(level,2));
	},
	"Calc" : function (){
		console.log("Start Calulating");
		console.log("c = " + this.C);
	}
}

rl.question("Welche Kernladungszahl möchten sie betrachten?", 
	(answ) => {Calculator.CoreChargeNumber = answ;});

Calculator.Calc();
