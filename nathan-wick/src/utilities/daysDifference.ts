const daysDifference = (start: Date, end: Date,) => {

    const difference = end.getTime() - start.getTime(),
        differenceInDays = difference / (1000 * 60 * 60 * 24);

    return differenceInDays;

};

export default daysDifference;
