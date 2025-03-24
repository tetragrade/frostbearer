Array.prototype.choice = function() { return this[Math.floor(this.length*Math.random())]; }

let EMEREM_NAME_DISPLAY = document.getElementById("emerem-name-generator-display");
let EMEREM_NAME_START = [
	"Ko",
	"Ke",
	"Le",
	"So",
	"E",
	"Ono",
	"Aki",
	"To",
	"So",
	"Kono",
	"Be"
];
let EMEREM_NAME_MIDDLE = [
	"ko",
	"le",
	"re",
	"lo",
	"me",
	"ki",
	"ne",
	"to",
	"ra",
	"po",
	"mo"
];
let EMEREM_NAME_END = [
	"ko",
	"le",
	"la",
	"n",
	"ro",
	"ra",
	"ren",
	"pi",
	"ek",
	"to",
	"ma",
	"shi"
];
let EMEREM_FAMILY_NAME = [
	"Emerem"
];
let EmeremName = () => EMEREM_FAMILY_NAME.choice() + " " + EMEREM_NAME_START.choice() + EMEREM_NAME_MIDDLE.choice() + EMEREM_NAME_END.choice();
let DisplayEmeremName = () => EMEREM_NAME_DISPLAY.textContent = EmeremName();
DisplayEmeremName();
document.getElementById("emerem-name-generator-button").addEventListener("click", DisplayEmeremName);

let MAGISTERIUM_NAME_DISPLAY = document.getElementById("magisterium-name-generator-display");
let MAGISTERIUM_NAME_START = [
	"El",
	"Rh",
	"Kh",
	"Xyn",
	"Hex",
	"Arm",
	"Zs",
	"Om",
	"Ph",
	"Yith",
];
let MAGISTERIUM_NAME_MIDDLE = [
	"eber",
	"ar",
	"eir",
	"all",
	"erell",
	"end",
	"og",
	"eeb",
	"intin",
	"agoz",
];
let MAGISTERIUM_NAME_END = [
	"ex",
	"alf",
	"on",
	"us",
	"ette",
	"a",
	"ene",
	"usc",
	"awil",
	"iam",
];
function MagisteriumFamilyName(alliteratesWith) {
	switch (alliteratesWith) {
		case 'A':
			return [
				"Amberwoke",
				"Auldmagister",
				"Arbleworth",
				"Ainslet"
			].choice();
		case 'E':
			return [
				"Emwise",
				"Ellfenekille",
				"Electran",
				"Everrclair"
			].choice();
		case 'H':
			return [
				"Hirdelwort",
				"Harrelywarn",
				"Hollowint",
				"Hellryser"
			].choice();
		case 'K':
			return [
				"Kemwise",
				"Kotteren",
				"Krookelly",
				"Koalkin"
			].choice();
		case 'O':
			return [
				"Oldmagister",
				"Oftwipped",
				"Ollican",
				"Omencant"
			].choice();
		case 'P':
			return [
				"Portelkeen",
				"Poggerbail",
				"Pardeep",
				"Pyrplepool"
			].choice();
		case 'R':
			return [
				"Railwright",
				"Ronderly",
				"Raddemage",
				"Rubek"
			].choice();
		case 'X':
			return [
				"Xorbee",
				"Xaptite",
				"Xhinderbritte",
				"Xincey"
			].choice();
		case 'Y':
			return [
				"Yammer",
				"Yaelterly",
				"Yemerian",
				"Yonderholde"
			].choice();
		case 'Z':
			return [
				"Zarbee",
				"Zymallimite",
				"Zhellwinder",
				"Zorkesh"
			].choice();
	}
}
function MagisteriumName() {
	let PERSONAL_NAME = MAGISTERIUM_NAME_START.choice() + MAGISTERIUM_NAME_MIDDLE.choice() + MAGISTERIUM_NAME_END.choice();
	return PERSONAL_NAME + " " + MagisteriumFamilyName(PERSONAL_NAME[0]);
}
let DisplayMagisteriumName = () => MAGISTERIUM_NAME_DISPLAY.textContent = MagisteriumName();
DisplayMagisteriumName();
document.getElementById("magisterium-name-generator-button").addEventListener("click", DisplayMagisteriumName);