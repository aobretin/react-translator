import styled from 'styled-components';
import {
    Divider
} from 'react95';

const GetTranslationRow = styled.div`
    display: flex;
    justify-content: space-between;
    > div {
        flex: 45%;
    }
    > span {
        flex: 10%;
        text-align: center;
    }
`

const SpecialDivider = styled(Divider)`
    margin: 20px 0;
`

export {
    GetTranslationRow,
    SpecialDivider
}