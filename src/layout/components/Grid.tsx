import * as React from 'react';
import { Grid as SemanticGrid } from 'semantic-ui-react';
import styled from 'styled-components';

export const Grid = styled(SemanticGrid)`
    margin: 0 !important;
`;

export const Row = SemanticGrid.Row;

export const Column = SemanticGrid.Column;
