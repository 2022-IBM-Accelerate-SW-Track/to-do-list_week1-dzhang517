import React, { Component } from 'react';
import "./About.css";
import pic from "../assets/headshotsnow.JPG";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img className="profile_image" src={pic} alt="Profile Pic"></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Daniel</div>
            <div className="brief_description">
              Hi! My name is Daniel Zhang. I grew up in Charlotte, NC and attend school 
              at Williams College in Massachusetts. I plan to major in Computer Science
              and look forward to learning more about various aspects of tech throughout
              this program!
            </div>
          </div>
        </div>
      </div>
    )
  }
}