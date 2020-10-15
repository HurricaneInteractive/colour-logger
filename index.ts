type Colours =
	| "black"
	| "white"
	| "gray"
	| "red"
	| "orange"
	| "yellow"
	| "green"
	| "teal"
	| "blue"
	| "indigo"
	| "purple"
	| "pink"

type ColourData = Record<Colours, string>

const colours: ColourData = {
	black: "black",
	white: "white",
	gray: "#718096",
	red: "#e53e3e",
	orange: "#ed8936",
	yellow: "#ecc94b",
	green: "#48bb78",
	teal: "#38b2ac",
	blue: "#4299e1",
	indigo: "#667eea",
	purple: "#9f7aea",
	pink: "#ed64a6",
}

export default function log(
	message: string,
	colour: Colours,
	...rest: any
): void {
	console.log(`%c${message}`, `color: ${colours[colour]}`, ...rest)
}
