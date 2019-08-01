import styled from 'styled-components';
import { List } from 'react95';

const ListWithZIndexFix = styled(List)`
    z-index: 5;
`

const MenuWrapper = styled.div`
    position: relative;
`

export {
    ListWithZIndexFix,
    MenuWrapper
}