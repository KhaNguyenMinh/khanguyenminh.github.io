import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

console.log(process.env.NODE_ENV);
const style = {
  height: '100%',
  width: '100%',
  display: 'inline-block',
  minWidth: 600
}

class CreateCampaignStep1Component extends Component {
	state = {
	    value: 1,
	  }

	handleChange = (event, index, value) => this.setState({value});
    render() {
        return (
        	<Paper style={style} zDepth={1}>
        		<h2 className="paper-title">Hãy chọn kênh & Tạo chiến dịch</h2>
        		<div className="step-content">
        			<TextField
		          		name="userName"
		          		value={this.state.userName}
		          		onChange={this.handleUserName}
		          		fullWidth={true}
		          		floatingLabelText="Tên chiến dịch"
		          		floatingLabelFixed={true}
				    />

        			<SelectField
			          floatingLabelText="Chọn kênh"
			          value={this.state.value}
			          onChange={this.handleChange}
			        >
			          <MenuItem value={1} primaryText="Facebook" />
			          <MenuItem value={2} primaryText="Côccoc" />
			        </SelectField><br/>
			        
				    <SelectField
			          floatingLabelText="Chọn tài khoản liên kiết"
			          value={this.state.value}
			          onChange={this.handleChange}
			        >
			          <MenuItem value={1} primaryText="TK1" />
			          <MenuItem value={2} primaryText="TK2" />
			        </SelectField><br/>

			        <SelectField
			          floatingLabelText="Hình thức quảng cáo"
			          value={this.state.value}
			          onChange={this.handleChange}
			        >
			          <MenuItem value={1} primaryText="Banner" />
			          <MenuItem value={2} primaryText="Keyword" />
			        </SelectField><br/>

			        <SelectField
			          floatingLabelText="Mục tiêu"
			          value={this.state.value}
			          onChange={this.handleChange}
			        >
			          <MenuItem value={1} primaryText="Tương tác" />
			          <MenuItem value={2} primaryText="bla bla" />
			        </SelectField><br/>

			        <RadioButtonGroup name="shipSpeed" defaultSelected="1">
				      <RadioButton
				        value="1"
				        label="Tương tác bài post"
				        style={{marginBottom: 16}}
				      />
				      <RadioButton
				        value="2"
				        label="Số lượt thích trang"
				        style={{marginBottom: 16}}
				      />
				      <RadioButton
				        value="3"
				        label="Phản hồi sự kiện"
				      />
				    </RadioButtonGroup>
        		</div>
        		
        	</Paper>
        );
    }
}
 
export default CreateCampaignStep1Component