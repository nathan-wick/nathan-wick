const pathSegmentsToKeep = 0,
    {location,} = window;

location.replace(`${location.protocol}//${location.hostname}${location.port
    ? `:${location.port}`
    : ``
}${location.pathname.split(`/`,).slice(
    0,
    1 + pathSegmentsToKeep,
).
    join(`/`,)}/?/${
    location.pathname.slice(1,).split(`/`,).
        slice(pathSegmentsToKeep,).
        join(`/`,).
        replace(
            /&/gu,
            `~and~`,
        )
}${location.search
    ? `&${location.search.slice(1,).replace(
        /&/gu,
        `~and~`,
    )}`
    : ``
}${location.hash}`,);
