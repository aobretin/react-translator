export const formatTransForSelect = trans => {
    return trans.reduce((c, t) => {
        c.push({
            value: t.langCode,
            label: t.langName
        });

        return c;
    }, []);
}