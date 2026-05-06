import type { Book } from "@utils/getBooksFromNotion";

export type Option = "month" | "year";

export const padStartNumber = (number: number) => {
	return `0${number}`.slice(-2);
};

export const getMonthYear = (date: Temporal.PlainYearMonth) => {
	return `${padStartNumber(date.month)}-${date.year}`;
};

export const getPlainDateFromString = (monthYearString: string) => {
	const [month, year] = monthYearString.split("-").map(str => +str);

	const today = Temporal.Now.plainDateISO();

	return Temporal.PlainDate.from({
		day: 1,
		month: month || today.month,
		year: year || today.year,
	});
};

export const groupedBooks = async (books: Book[], format: Option) => {
	if (typeof window !== "undefined" && !window.Temporal) {
		// console.log("Does not support temporal");
		// load the script
		const { Temporal } = await import(
			"temporal-polyfill-lite"
		);

		window.Temporal = Temporal;
	}

	const group = Object.groupBy(books, ({ finishedDate }: Book) => {
		const date = Temporal.PlainDate.from(finishedDate);

		if (format === "month") {
			return `${padStartNumber(date.month)}-${date.year}`;
		} else {
			return date.year;
		}
	});

	const groups = Object.entries(group);

	const sortedGroups = groups
		.sort(([a], [b]) => {
			if (format === "month") {
				const aDate = getPlainDateFromString(a);
				const bDate = getPlainDateFromString(b);

				return Temporal.PlainDate.compare(bDate, aDate);
			}
			return Number(b) - Number(a);
		})
		.map(([key, value]) => {
			return [key, value] as [string, Book[]];
		});

	return sortedGroups;

	// return runScript();
};


