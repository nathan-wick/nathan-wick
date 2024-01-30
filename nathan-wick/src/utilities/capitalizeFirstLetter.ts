const capitalizeFirstLetter = (string: string,) => {

    if (!string) {

        return ``;

    }

    const firstLetter = string.charAt(0,).toUpperCase(),
        remainingLetters = string.slice(1,).toLowerCase();

    return firstLetter + remainingLetters;

};

export default capitalizeFirstLetter;
