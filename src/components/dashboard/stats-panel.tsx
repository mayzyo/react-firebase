import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Skeleton from '@material-ui/lab/Skeleton'
import Typography from '@material-ui/core/Typography'

// LOCAL DEPENDENCIES
import { Manifest } from './useManifest'

export default (props: StatsPanel) => {
    return (
        <Row>
            <BoxView>
                <Typography variant="subtitle1">
                    Monthly Visits
                </Typography>
            </BoxView>
            <BoxView>
                <Typography variant="subtitle1">
                Lifetime Popularity
                </Typography>
            </BoxView>
        </Row>
    )
}

export interface StatsPanel {
    project: Manifest
}

// STYLE PROPERTIES
const Row = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const BoxView = withStyles({
    root: {
        flexGrow: 1,
        margin: 12,
        padding: 20,
        height: '20vh'
    },
})(Paper)