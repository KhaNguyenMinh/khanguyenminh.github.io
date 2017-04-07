import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

console.log(process.env.NODE_ENV);

const style = {
  height: '100%',
  width: '100%',
  textAlign: 'center',
  display: 'inline-block',
  minWidth: 600
};

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
        return 'Tạo chiến dịch...'
      case 1:
        return 'Nhóm & Đối tượng...'
      case 2:
        return 'Tạo quảng cáo...'
      case 3:
        return 'Hoàn thành...'
    }
  }
    render() {
    	const {finished, stepIndex} = this.state;
    	const contentStyle = {margin: '0 16px'};
        return (
        	<div>
        		<h5>Tạo chiến dịch</h5>
        		<Paper style={style} zDepth={1}>
	        		<div style={{width: '100%', maxWidth: 700, margin: 'auto', paddingBottom: 20}}>
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
				              <p>{this.getStepContent(stepIndex)}</p>
				              <div style={{marginTop: 12}}>
				                <FlatButton
				                  label="Back"
				                  disabled={stepIndex === 0}
				                  onTouchTap={this.handlePrev}
				                  style={{marginRight: 12}}
				                />
				                <RaisedButton
				                  label={stepIndex === 2 ? 'Finish' : 'Next'}
				                  primary={true}
				                  onTouchTap={this.handleNext}
				                />
				              </div>
				            </div>
				          )}
				        </div>
				      </div>
	        	</Paper>
        	</div>
        	
        );
    }
}
 
export default CreateCampaignComponent