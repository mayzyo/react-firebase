import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'

// LOCAL DEPENDENCIES
import { Manifest } from './useManifest'

// ART ASSETS
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export default (props: InfoPanel) => {
    return (
        <>
            <PanelView>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Overview</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </ExpansionPanelDetails>
            </PanelView>
            <PanelView>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>References</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </ExpansionPanelDetails>
            </PanelView>
        </>
    )
}

export interface InfoPanel {
    project: Manifest
}

// STYLE PROPERTIES
const PanelView = withStyles({
    root: {
        margin: 12
    },
    expanded: {
        margin: '16px 12px !important'
    }
})(ExpansionPanel)