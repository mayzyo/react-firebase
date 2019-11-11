import React, { useState } from 'react'
import styled from 'styled-components'
import { Navbar } from '@components'

// LOCAL DEPENDENCIES
import useManifest, { Manifest } from './useManifest'
import ProjectList from './project-list'
import ControlPanel from './control-panel'
import StatsPanel from './stats-panel'
import InfoPanel from './info-panel'

export default () => {

    const { projects } = useManifest()
    const [current, setCurrent] = useState<Manifest>(projects[0])

    return (
        <Container>
            <Navbar />
            <Row>
                <ProjectList 
                projects={projects}
                selected={current}
                handleSelect={(project: Manifest) => setCurrent(project)} 
                />
                <PanelView>
                    <ControlPanel project={current} />
                    <StatsPanel project={current} />
                    <InfoPanel project={current} />
                </PanelView>
            </Row>
        </Container>
    )
}

// STYLE PROPERTIES
const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: rgba(0,0,0,0.1);
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    /* @media (max-width: 768px) {
        flex-direction: column;
    } */
`
const PanelView = styled.div`
    flex-grow: 1;
`