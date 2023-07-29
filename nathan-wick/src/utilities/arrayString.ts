const arrayString = (elements: string[],) => {

    const string = elements.length > 1
        ? `${elements.slice(
            0,
            -1,
        ).map((element,) => ` ${element}`,)}, and ${elements[elements.length - 1]}`
        : elements[0];

    return string;

};

export default arrayString;
