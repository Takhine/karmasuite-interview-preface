export const fetcher = (requestUrl: string) => {
    return fetch(requestUrl, {
        headers: {
            "content-type": "application/json",
        },
        method: "get",
    }).then((res) => res.json());
}