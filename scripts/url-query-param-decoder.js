/* eslint-disable require-unicode-regexp */
/* eslint-disable id-length */
/* eslint-disable func-names */

(function (l,) {

    if (l.search[1] === `/`) {

        const decoded = l.search.slice(1,).split(`&`,).
            map((s,) => s.replace(
                /~and~/g,
                `&`,
            ),).
            join(`?`,);
        window.history.replaceState(
            null,
            null,
            l.pathname.slice(
                0,
                -1,
            ) + decoded + l.hash,
        );

    }

}(window.location,));
