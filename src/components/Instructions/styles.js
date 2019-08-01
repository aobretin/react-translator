import styled from 'styled-components';
import { Window } from 'react95';

const ParentWindowStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const WindowStyles = styled(Window)`
    width: 70%;
    max-width: 960px;
    ul {
        list-style-type: decimal;
        padding-left: 20px;
        li {
            list-style-type: inherit;
            margin-bottom: 10px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
`

export {
    ParentWindowStyles,
    WindowStyles
}