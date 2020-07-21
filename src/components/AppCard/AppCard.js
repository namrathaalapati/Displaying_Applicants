import React, { Component } from "react";
import { connect } from "react-redux";
import "./Card/card.scss";
import Slider from "react-slick";
import Card from './Card/Card';

import * as actions from '../../store/actions/index';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

class Appcard extends Component {

  componentDidMount(){
    this.props.getApplicants();
  }

  render() {
    let itemList = this.props.applicants? this.props.applicants.map((item) => {
          const initials = item.firstName.substr(0, 1) + item.lastName.substr(0, 1);
            return(
              <Card key = {item.id} initials= {initials} item ={item}/>
            )
            }) :null;

    return (
      <div className="container">
        <h5 className="center">{this.props.title}</h5>
        <Slider {...settings}>{itemList} </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    applicants: state.applicants.applicants,
    error:state.applicants.error
  };
};

const mapDispatchToProps = dispatch=>{
  return{
    getApplicants:()=>dispatch(actions.getApplicants())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Appcard);
