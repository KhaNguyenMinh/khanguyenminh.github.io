import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
// import ReactUltimatePagination from 'react-ultimate-pagination'

    let ReactUltimatePagination = require('react-ultimate-pagination')

    // constructor() {
    //     super()
    //     this.state = {
    //         logged: false,
    //         openSlideBar : false
    //     }
    // }

    // reactUltimatePagination = new ReactUltimatePagination()

    let page = (props) => {
      return <FlatButton onTouchTap={props.onClick} label={props.value} />
    }
     
    let ellipsis = (props) => {
      return <FlatButton onTouchTap={props.onClick} label="..."/>
    }   
     
    let firstPageLink = (props) => {
      return <FlatButton onTouchTap={props.onClick} label="First"/>
    }
     
    let previousPageLink = (props) => {
      return <FlatButton onTouchTap={props.onClick} label="Previous"/>
    }
     
    let nextPageLink = (props) => {
      return <FlatButton onTouchTap={props.onClick} label="Next"/>
    }
     
    let lastPageLink = (props) => {
      return <FlatButton onTouchTap={props.onClick} label="Last"/>
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

    // render() {
    //     return (
    //         <div>
    //             {this.UltimatePagination}
    //         </div>
    //     );
    // }

export default UltimatePagination;