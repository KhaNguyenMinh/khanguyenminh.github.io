import React, { Component } from 'react'
import store from '../../store'
import Paper from 'material-ui/Paper'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import CreateCampaignStep1Component from '../create-campaign-step1/create-campaign-step1'
import CreateCampaignStep2Component from '../create-campaign-step2/create-campaign-step2'
import {showNotify} from '../../containers/system-notify/actions'

console.log(process.env.NODE_ENV);

class CreateCampaignComponent extends Component {
	state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3,
    });

    store.dispatch(showNotify('test mgs bla bla bla bla bla bla bla bla', undefined , true))
  };

  handlePrev = () => {
    const {stepIndex} = this.state
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1})
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <CreateCampaignStep1Component />
      case 1:
        return <CreateCampaignStep2Component />
      case 2:
        return 'Tạo quảng cáo...'
      case 3:
        return 'Hoàn thành...'
    }
  }
    render() {
    	const {finished, stepIndex} = this.state;
    	const contentStyle = {margin: '15px 15px 0 15px'};
        return (
        	<div>
        		<h5>Tạo chiến dịch</h5>
	        		<div style={{width: '100%', maxWidth: 900, margin: 'auto', paddingBottom: 20}}>
				        <Stepper activeStep={stepIndex}>
				          <Step>
				            <StepLabel>Tạo chiến dịch</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel>Nhóm & Đối tượng</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel>Tạo quảng cáo</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel>Hoàn thành</StepLabel>
				          </Step>
				        </Stepper>
				        <div style={contentStyle}>
				          {finished ? (
				            <p>
				              <a
				                href="#"
				                onClick={(event) => {
				                  event.preventDefault();
				                  this.setState({stepIndex: 0, finished: false});
				                }}
				              >
				                Click here
				              </a> to reset the example.
				            </p>
				          ) : (
				            <div>
				              <div>{this.getStepContent(stepIndex)}</div>
				              <div style={{marginTop: 12, float: 'right', marginBottom: 20}}>
				                <FlatButton
				                  label="Quay lại"
				                  disabled={stepIndex === 0}
				                  onTouchTap={this.handlePrev}
				                  style={{marginRight: 12}}
				                />
				                <RaisedButton
				                  label={stepIndex === 3 ? 'Hoàn thành' : 'Tiếp tục'}
				                  primary={true}
				                  onTouchTap={this.handleNext}
				                />
				              </div>
				            </div>
				          )}
				        </div>
				    </div>
        	</div>
        	
        );
    }
}
 
export default CreateCampaignComponent