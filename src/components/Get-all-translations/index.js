import React, { useState, useEffect } from 'react';
import {
    Select,
    Table,
    TableBody,
    TableHead,
    TableHeadCell,
    TableRow,
    TableDataCell
} from 'react95';

import {
    formatWordsForSelect
} from '../../helpers';

import {SpecialDivider} from './styles';

export default ({
    translations,
    getAllTranslationsHandler,
    translated
}) => {
    const formattedWords = formatWordsForSelect(translations[0].translations);
    const [word, setWord] = useState(formattedWords[0].value);

    useEffect(() => {
        getAllTranslationsHandler({word, translations});
    }, []);

    const handleSelectChange = word => {
        setWord(word);
        getAllTranslationsHandler({word ,translations});
    }

    return (
        <div>
            <Select 
                name="word"
                items={formattedWords}
                onChange={handleSelectChange}
            />
            <SpecialDivider/>
            {
                translated.length > 0 && <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Language name</TableHeadCell>
                            <TableHeadCell>Language code</TableHeadCell>
                            <TableHeadCell>Translation for "{word}"</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {translated.map(row => {
                            return (
                                <TableRow key={row.code}>
                                    <TableDataCell>{row.name}</TableDataCell>
                                    <TableDataCell>{row.code}</TableDataCell>
                                    <TableDataCell>{row.translation}</TableDataCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            }
        </div>
    )
}