const dateString = (start: Date, end?: Date,) => {

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
            : `Present`}`,
        // eslint-disable-next-line no-extra-parens
        totalMonths = validEnd.getMonth() - start.getMonth() + (12 * (validEnd.getFullYear() - start.getFullYear())),
        // eslint-disable-next-line no-extra-parens
        yearsDifference = Math.round((totalMonths - (totalMonths % 12)) / 12,),
        monthsDifference = totalMonths % 12,
        yearsString = yearsDifference
            ? `${yearsDifference} years`
            : ``,
        monthsString = monthsDifference
            ? `${monthsDifference} months`
            : ``;

    return `${startString} - ${endString} (${yearsString}${yearsString && monthsDifference
        ? ` `
        : ``}${monthsString})`;

};

export default dateString;
