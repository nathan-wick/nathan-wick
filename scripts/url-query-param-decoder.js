(function decodeQueryParam (location,) {

    if (location.search[1] === `/`) {

        const decoded = location.search.slice(1,).split(`&`,).
            map((string,) => string.replace(
                /~and~/gu,
                `&`,
            ),).
            join(`?`,);
        window.history.replaceState(
            null,
            null,
            location.pathname.slice(
                0,
                -1,
            ) + decoded + location.hash,
        );

    }

}(window.location,));
