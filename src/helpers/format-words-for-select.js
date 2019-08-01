export const formatWordsForSelect = words => {
    return Object.keys(words).reduce((c, t) => {
        c.push({
            value: t,
            label: t
        });

        return c;
    }, []);
}