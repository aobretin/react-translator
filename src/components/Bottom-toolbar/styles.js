import styled from 'styled-components';
import { AppBar } from 'react95';

const ToolbarStyles = styled(AppBar)`
    position: absolute;
    bottom: 0;
    top: auto;
    button {
        font-weight: bold;
    }
`

export {
    ToolbarStyles
}