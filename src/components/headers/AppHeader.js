import React from 'react'
import { Styles } from '../styles/AppStyle'

const AppHeader = (props) => {
    return(
        <header style={Styles.header}>
            <span style={Styles.headerTitle}>{props.title}</span>
        </header>
    )
}

export default AppHeader;