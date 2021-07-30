import React from "react";
import RadioButton from "./radio_btn";
import HomeButton from "./home_btn";
import "./css/radio.css";

class RadioButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      story: false,
      skill: false,
      contact: false,
    };
    this.HomeRadioBtnHandle = (e) => {
      if (this.state.home !== true) {
        this.setState({ home: e, story: false, skill: false, contact: false });
        this.props.currentTarget(0);
      }
    };
    this.storyRadioBtnHandle = (e) => {
      if (this.state.story !== true) {
        this.setState({ story: e, skill: false, contact: false, home: false });
        this.props.currentTarget(1);
      }
    };
    this.skillRadioBtnHandle = (e) => {
      if (this.state.skill !== true) {
        this.setState({ skill: e, story: false, contact: false, home: false });
        this.props.currentTarget(2);
      }
    };
    this.contactRadioBtnHandle = (e) => {
      if (this.state.contact !== true) {
        this.setState({ contact: e, story: false, skill: false, home: false });
        this.props.currentTarget(3);
      }
    };
  }
  
	componentDidMount(){
		this.props.currentTarget(0);
	}

  render() {
    const cName = this.props.cName;
    return (
      <div className={`radio-group ${cName}`}>
        <HomeButton
          selected={this.state.home}
          onClick={this.HomeRadioBtnHandle}
        />
        <RadioButton
          selected={this.state.story}
          onClick={this.storyRadioBtnHandle}
        />
        <RadioButton
          selected={this.state.skill}
          onClick={this.skillRadioBtnHandle}
        />
        <RadioButton
          selected={this.state.contact}
          onClick={this.contactRadioBtnHandle}
        />
      </div>
    );
  }
}
export default React.memo(RadioButtonGroup);
