import * as React from 'react';
import { Grid as SemanticGrid } from 'semantic-ui-react';
import styled from 'styled-components';

export const Grid = ({
    children
}: Props): JSX.Element =>
    <StyledGrid>
        { children }
    </StyledGrid>
;

export interface Props {
    children: React.ReactNode
}

const StyledGrid = styled(SemanticGrid)`
    margin: 0 !important;
`;
