import React from 'react'
import FlatButton from 'material-ui/FlatButton'

let ReactUltimatePagination = require('react-ultimate-pagination')

let page = (props) => {
    return <FlatButton onTouchTap={props.onClick} label={props.value} primary={props.isActive} style={{minWidth: 40}}/>
}

let ellipsis = (props) => {
    return <FlatButton onTouchTap={props.onClick} label="..." style={{minWidth: 40}}/>
}

let firstPageLink = (props) => {
    return <FlatButton onTouchTap={props.onClick} icon={<i className="material-icons">first_page</i>} style={{minWidth: 40}}/>
}

let previousPageLink = (props) => {
    return <FlatButton onTouchTap={props.onClick} icon={<i className="material-icons">chevron_left</i>} style={{minWidth: 40}}/>
}

let nextPageLink = (props) => {
    return <FlatButton onTouchTap={props.onClick} icon={<i className="material-icons">chevron_right</i>} style={{minWidth: 40}}/>
}

let lastPageLink = (props) => {
    return <FlatButton onTouchTap={props.onClick} icon={<i className="material-icons">last_page</i>} style={{minWidth: 40}}/>
}

let wrapper = (props) => {
    return <div className="pagination">{props.children}</div>
}

let itemTypeToComponent = {
    'PAGE': page,
    'ELLIPSIS': ellipsis,
    'FIRST_PAGE_LINK': firstPageLink,
    'PREVIOUS_PAGE_LINK': previousPageLink,
    'NEXT_PAGE_LINK': nextPageLink,
    'LAST_PAGE_LINK': lastPageLink
}

let UltimatePagination = ReactUltimatePagination.createUltimatePagination({
    itemTypeToComponent: itemTypeToComponent,
    WrapperComponent: wrapper
})

export default UltimatePagination