import React, {useState, useEffect} from 'react';
import {
    Table,
    TableBody,
    TableHead,
    TableHeadCell,
    TableRow,
    TableDataCell,
    TextField,
    Button
} from 'react95';
import {ModifiedTableCell} from './styles';

export default ({
    currentLang,
    setNewTranslationsHandler
}) => {
    const [clonedLangTranslations, setClonedLangTranslations] = useState({...currentLang.langTranslations});

    useEffect(() => {
        setClonedLangTranslations({...currentLang.langTranslations});
    }, [currentLang]);

    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Word Code</TableHeadCell>
                        <TableHeadCell>Word Translation</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.entries(clonedLangTranslations).map(([
                        wordCode,
                        wordTranslation
                    ]) => {
                        return (
                            <TableRow key={wordCode}>
                                <TableDataCell>{wordCode}</TableDataCell>
                                <ModifiedTableCell>
                                    <TextField
                                        value={wordTranslation}
                                        onChange={e => setClonedLangTranslations({
                                            ...clonedLangTranslations,
                                            [wordCode]: e.target.value
                                        })}
                                    />
                                </ModifiedTableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <Button
                onClick={() => setNewTranslationsHandler(currentLang.langCode, clonedLangTranslations)}
                fullWidth
            >
                Save translations
            </Button>
        </div>
    )
}