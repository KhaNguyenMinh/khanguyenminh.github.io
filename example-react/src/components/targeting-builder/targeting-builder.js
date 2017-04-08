import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

export default class TargetingBuilderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded})
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={<h2 className="card-title">Hãy chọn kênh & Tạo chiến dịch</h2>}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions expandable={true}>
          <RaisedButton
            label='Lưu thông tin'
            primary={true}
            onTouchTap={this.handleNext}
          />
        </CardActions>
      </Card>
    );
  }
}