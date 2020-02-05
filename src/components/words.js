const DOGTYPES = [
	"afador",
	"akbash",
	"akita",
	"auddie",
	"barbet",
	"basenji",
	"beagle",
	"bocker",
	"bolognise",
	"bossie",
	"bulldog",
	"chigi",
	"collie",
	"golderetriever",
	"labrador"
];

function randomWord() {
	return DOGTYPES[Math.floor(Math.random() * DOGTYPES.length)];
}

export { randomWord };