import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DatePicker from 'material-ui/DatePicker';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Checkbox from 'material-ui/Checkbox';

export default class ToolbarComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      open: false
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Đang chạy" />
            <MenuItem value={2} primaryText="Tạm dừng" />
            <MenuItem value={3} primaryText="Lưu trữ" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
          <DatePicker hintText="Chọn khoảng thời gian" container="inline" mode="landscape" />
          <ToolbarSeparator />
          <IconButton touch={true} onTouchTap={this.handleTouchTap}>
            <NavigationExpandMoreIcon />
          </IconButton>
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
             <List>
              <ListItem primaryText="Cost" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Imp" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Click" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Action" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="CPA" leftCheckbox={<Checkbox />} />
            </List>
        </Popover>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}