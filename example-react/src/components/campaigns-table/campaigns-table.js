import React, {PropTypes} from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import './campaigns-table.less'
import Campaign from '../../models/campaign';
import capaignTableReducer from '../../containers/campaigns-table/campaigns-table-reducer';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import FontIcon from 'material-ui/FontIcon';
import store from '../../store'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'

const campiagn = new Campaign('123456789', 'test campaign name');

console.log('campaign obj', campiagn)



// const CampaignTableComponent = ({ camList, onTodoClick }) => (
//   <ul>
    
//   </ul>
// )

// CampaignTableComponent.propTypes = {
//   camList: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

export default class CampaignTableComponent extends React.Component {

  constructor(props) {
  	store.dispatch({type: 'GET_CAMPAIGN_DATA'})
    super(props);

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
      camList: []
    };
  }

  componentDidMount() {
    let self = this;

    // console.log('event triger!');
    // let service = new CampaignService();

    // service.getCampaignList().then(function(response) {
    //   console.log('data', response);
    //   self.setState({
    //     dataTable: response.data
    //   });
    // });
  }

  formatDate(time) {
    let d = new Date(time);
    // console.log('1');
    return d.toLocaleDateString();
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  customWidth = {
    width: 12
  };

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
                    {this.props.camList.map( (row, index) => (
                      <TableRow key={index} selected={row.selected}>
                        <TableRowColumn style={{width: '50px'}}>{index + 1}</TableRowColumn>
                        <TableRowColumn style={{width: '80px'}}>
                          <Toggle
                          defaultToggled={true}/>
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
                              <ul className="pagination">
                                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                                <li className="active"><a href="#!">1</a></li>
                                <li className="waves-effect"><a href="#!">2</a></li>
                                <li className="waves-effect"><a href="#!">3</a></li>
                                <li className="waves-effect"><a href="#!">4</a></li>
                                <li className="waves-effect"><a href="#!">5</a></li>
                                <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                              </ul>
                        </TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
  }
}
