interface Option {
	name: string;
	short: string;
}

const defaultOptions: Option[] = [
	{
		name: "Simon Fraser University",
		short: "SFU",
	},
	{
		name: "University of British Columbia",
		short: "UBC",
	},
	{
		name: "University of the Fraser Valley",
		short: "UFV",
	},
	{
		name: "University of Toronto",
		short: "UofT",
	},
];

export { defaultOptions };
