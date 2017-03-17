import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import Campaign from '../../models/campaign';
import CampaignService from '../../services/campaign-service';

const campiagn = new Campaign('123456789', 'test campaign name');

console.log('campaign obj', campiagn);

export default class CampaignTableComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '100%',
      dataTable: []
    };
  }

  componentDidMount() {
    let self = this;

    console.log('event triger!');
    let service = new CampaignService();

    service.getCampaignList().then(function(response) {
      console.log('data', response);
      self.setState({
        dataTable: response.data
      });
    });
  }

  formatDate(time) {
    let d = new Date(time);
    console.log('1');
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

  render() {
    return (
        <div>
            <Table
                height={this.state.height}
                fixedHeader={this.state.fixedHeader}
                fixedFooter={this.state.fixedFooter}
                selectable={this.state.selectable}
                multiSelectable={this.state.multiSelectable}>
                <TableHeader
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}
                    enableSelectAll={this.state.enableSelectAll}>
                    <TableRow>
                        <TableHeaderColumn colSpan="5" tooltip="Super Header" style={{textAlign: 'center'}}>
                            Campangs List
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Name">Type</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Date">Create date</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={this.state.showCheckboxes}
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                    stripedRows={this.state.stripedRows}>
                    {this.state.dataTable.map( (row, index) => (
                      <TableRow key={index} selected={row.selected}>
                        <TableRowColumn>{row.id}</TableRowColumn>
                        <TableRowColumn>{row.name}</TableRowColumn>
                        <TableRowColumn>{row.adType}</TableRowColumn>
                        <TableRowColumn>{this.formatDate(row.createdAt)}</TableRowColumn>
                        <TableRowColumn>{row.campaignStatus}</TableRowColumn>
                      </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableRowColumn colSpan="5" style={{textAlign: 'center'}}>
                            <h3>Pagination content</h3>
                        </TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
  }
}