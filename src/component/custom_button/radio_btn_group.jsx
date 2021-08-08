import React from "react";
import RadioButton from "./radio_btn";
import "./css/radio.css";
import { Link } from "react-router-dom";

class RadioButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      service: false,
      contact: false,
    };

    this.homeRadioBtnHandle = (e) => {
      if (this.state.home !== true) {
        this.setState({ home: true, service: false, contact: false });
        this.props.currentTarget(0);
      }
    };
    this.serviceRadioBtnHandle = (e) => {
      if (this.state.service !== true) {
        this.setState({ home: false, service: true, contact: false });
        this.props.currentTarget(1);
      }
    };
    this.contactRadioBtnHandle = (e) => {
      if (this.state.contact !== true) {
        this.setState({ home: false, service: false, contact: true });
        this.props.currentTarget(2);
      }
    };
  }

  componentDidMount() {
    this.props.currentTarget(0);
  }

  render() {
    const cName = this.props.cName;
    const refHome = this.props.refHome;
    const refService = this.props.refService;
    const refContact = this.props.refContact;
    return (
      <div className={`radio-group ${cName}`}>
        <Link to="/">
          <RadioButton
            selected={this.state.home}
            onClick={this.homeRadioBtnHandle}
            refit={refHome}
          />
        </Link>
        <Link to="/about">
          <RadioButton
            selected={this.state.service}
            onClick={this.serviceRadioBtnHandle}
            refit={refService}
          />
        </Link>
        <Link to="contact">
          <RadioButton
            selected={this.state.contact}
            onClick={this.contactRadioBtnHandle}
            refit={refContact}
          />
        </Link>
      </div>
    );
  }
}

export default React.memo(RadioButtonGroup);
