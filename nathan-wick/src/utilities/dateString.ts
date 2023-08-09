const dateString = (start: Date, end?: Date, showDuration?: boolean,) => {

    const validEnd = end ?? new Date(),
        startString = `${start.toLocaleString(
            `default`,
            {"month": `long`,},
        )} ${start.getFullYear()}`,
        endString = `${end
            ? `${end.toLocaleString(
                `default`,
                {"month": `long`,},
            )} ${end.getFullYear()}`
            : `Present`}`;

    if (showDuration) {

        // eslint-disable-next-line no-mixed-operators
        const totalMonths = validEnd.getMonth() - start.getMonth() + 12 * (validEnd.getFullYear() - start.getFullYear()),
            // eslint-disable-next-line no-extra-parens
            yearsDifference = Math.round((totalMonths - (totalMonths % 12)) / 12,),
            monthsDifference = totalMonths % 12,
            yearsString = yearsDifference === 1
                ? `1 year`
                : yearsDifference
                    ? `${yearsDifference} years`
                    : ``,
            monthsString = monthsDifference === 1
                ? `1 month`
                : monthsDifference
                    ? `${monthsDifference} months`
                    : ``;

        return `${startString} - ${endString} (${yearsString}${yearsString && monthsDifference
            ? ` `
            : ``}${monthsString})`;

    }

    return `${startString} - ${endString}`;

};

export default dateString;
