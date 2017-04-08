import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import TargetingBuilderComponent from '../targeting-builder/targeting-builder'
import PositionAdsBuilderComponent from '../position-ads-builder/position-ads-builder'
import BudgetAndScheduleBuilderComponent from '../budget-and-schedule-builder/budget-and-schedule-builder'

export default class CreateCampaignStep2Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
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
    	<div>
    		<TargetingBuilderComponent />
    		<PositionAdsBuilderComponent />
        <BudgetAndScheduleBuilderComponent />
    	</div>
    );
  }
}