import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Manifest } from './useManifest'

export default (props: ProjectList) => {

    const ListCustom = withStyles({
        root: {
            width: props.size || 300,
            padding: 10,
            background: 'rgba(0,0,0,0.1)'
        },
    })(List)

    const ListItemCustom = withStyles({
        root: {
            margin: 10,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5
        }
    })(ListItem)

    return (
        <ListCustom>
            { props.projects.map(el => 
                <ListItemCustom 
                key={el.name} 
                selected={el == props.selected} 
                onClick={() => props.handleSelect && props.handleSelect(el)}
                button
                >
                    { el.icon && <Icon src={require(`../../assets/images/${el.icon}`)} /> }
                    <ListItemText primary={el.name} />
                </ListItemCustom>
            )}
        </ListCustom>
    )
}

// STYLE PROPERTIES
const Icon = styled.img(props => ({
    height: 28,
    width: 28,
    marginRight: 20
}))

export interface ProjectList {
    projects: Manifest[]
    selected?: Manifest
    handleSelect?: (name: Manifest) => void
    size?: number
}