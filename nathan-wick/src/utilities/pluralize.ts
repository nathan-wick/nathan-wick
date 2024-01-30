const pluralize = (string: string,) => {

    const lastCharacter = string.slice(-1,);

    switch (lastCharacter) {

    case `y`:
        return `${string.slice(
            0,
            -1,
        )}ies`;
    case `f`:
        return `${string.slice(
            0,
            -1,
        )}ves`;
    default:
        return `${string}s`;

    }

};

export default pluralize;
