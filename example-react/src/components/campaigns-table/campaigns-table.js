import React from 'react'
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import CircularProgress from 'material-ui/CircularProgress';
import { Pagination } from 'react-materialize';
import './campaigns-table.less'
import Toggle from 'material-ui/Toggle'
import store from '../../store'
import UltimatePagination from '../commons/pagination'

export default class CampaignTableComponent extends React.Component {
    constructor(props) {
      	store.dispatch({type: 'GET_CAMPAIGN_DATA'})
        super(props)
        this.state = {
            fixedHeader: false,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            height: '500px',
            camList: [],
            loading: true
        }
    }

    componentDidMount() {
        // let self = this
    }

    componentWillReceiveProps(nextProps) {
        console.log('recived data', nextProps)
        this.setState({loading: false})
    }

    formatDate(time) {
        let d = new Date(time)
        return d.toLocaleDateString()
    }

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled
        })
    }

    handleChange = (event) => {
        this.setState({height: event.target.value})
    }

    customWidth = {
        width: 12
    }

    pageOnSelect = (event) => {
        console.log('page selected', event)
    }

    render() {
        return (
            <div className="test-class">
                <Table className="table-cam" height={this.state.height}
                        fixedFooter={this.state.fixedFooter}>
                    <TableHeader
                        displaySelectAll={this.state.showCheckboxes}
                        adjustForCheckbox={this.state.showCheckboxes}
                        enableSelectAll={this.state.enableSelectAll}>
                        <TableRow>
                            <TableHeaderColumn tooltip="The index" style={{width: '50px'}}>Index</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The status" style={{width: '80px'}}>Status</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Type</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Date">Create date</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Date">Cost</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Date">Click</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Date">Action</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}>
                        {this.state.loading &&
                            <TableRow>
                                <TableRowColumn colSpan="8">
                                    <div style={{textAlign: "center"}}>
                                        <CircularProgress
                                            mode="indeterminate"
                                            size={30}
                                        />
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                        }
                        {!this.state.loading && this.props.camList.length === 0 &&
                            <TableRow>
                                <TableRowColumn colSpan="8">
                                    <div style={{textAlign: "center"}}>
                                        <p>Không tìm thấy campiagn</p>
                                    </div>
                                </TableRowColumn>
                            </TableRow>
                        }
                        {this.props.camList.map( (row, index) => (
                            <TableRow key={index} selected={row.selected}>
                                <TableRowColumn style={{width: '50px'}}>{index + 1}</TableRowColumn>
                                <TableRowColumn style={{width: '80px'}}>
                                    <Toggle defaultToggled={true}/>
                                </TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.adType}</TableRowColumn>
                                <TableRowColumn>{this.formatDate(row.createdAt)}</TableRowColumn>
                                <TableRowColumn>0</TableRowColumn>
                                <TableRowColumn>0</TableRowColumn>
                                <TableRowColumn>0</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableRowColumn colSpan="5" style={{textAlign: 'center'}}>
                                    <UltimatePagination currentPage={1} totalPages={10} boundaryPagesRange={1} siblingPagesRange={1} onChange={this.pageOnSelect} hideFirstAndLastPageLink={true}/>
                            </TableRowColumn>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        )
    }
}
