import { Temporal } from "@js-temporal/polyfill";

export const padStartNumber = (number: number) => {
    return `0${number}`.slice(-2);
};

export const getMonthYear = (date: Temporal.PlainYearMonth) => {
    return `${padStartNumber(date.month)}-${date.year}`;
};

export const getPlainDateFromString = (monthYearString: string) => {
    const [month, year] = monthYearString.split("-");

    const plainDate = Temporal.PlainDate.from({
        day: 1,
        month: +month,
        year: +year,
    });

    return plainDate;
};