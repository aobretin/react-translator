import styled from 'styled-components';
import { Window } from 'react95';

const ParentWindowStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

const WindowStyles = styled(Window)`
    width: 95%;
    max-width: 960px;
`

export {
    ParentWindowStyles,
    WindowStyles
}