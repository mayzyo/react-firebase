import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import { Typography } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

// LOCAL DEPENDENCIES
import { Manifest } from './useManifest'

// ART ASSETS
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

export default (props: ControlPanel) => {
    return (
        <Container>

            <CardView>
                <CardText>
                    <Typography variant="h4">
                        { props.project.name }
                    </Typography>
                    <Typography variant="body1">
                        description:
                    </Typography>
                </CardText>
            </CardView>

            <CardView>
                <CardActionArea>
                    <CardText style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <Typography variant="h2" color="primary">
                            Go
                            <ArrowForwardIcon fontSize="large" color="primary" />
                        </Typography>
                    </CardText>
                </CardActionArea>
            </CardView>

            {/* <BoxView>
                <Skeleton />
                <Skeleton />
                <Skeleton variant="rect" height={118} />
            </BoxView> */}

            <CardView>
                <CardText 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }
                }>
                    <Typography variant="h2">
                        0
                    </Typography>
                    <Typography variant="caption">
                        visits today
                    </Typography>
                </CardText>
            </CardView>

        </Container>
    )
}

export interface ControlPanel {
    project: Manifest
}

// STYLE PROPERTIES
const Container = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const CardView = withStyles({
    root: {
        flexGrow: 1,
        margin: 12,
    },
})(Card)
const CardText = styled.div`
    padding: 20px;
    height: 20vh;
`