import React from "react";
import {connect} from "react-redux";

function Tickets(props) {
  return(
    <div className="col-lg-3 col-md-6">
      <div className="panel panel-red">
        <div className="panel-heading">
          <div className="row">
            <div className="col-xs-3">
              <i className="fa fa-support fa-5x"></i>
            </div>
            <div className="col-xs-9 text-right">
              <div className="huge">{props.tickets}</div>
              <div>Support Tickets!</div>
            </div>
          </div>
        </div>
        <a href="#">
          <div className="panel-footer">
            <span className="pull-left">View Details</span>
            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
            <div className="clearfix"></div>
          </div>
        </a>
      </div>
    </div>);
}
function mapStateToProps(state){
  return{
    // the below key needs to be the same name as the props you require above,
    // and the value needs to be the state.js files object(s) being
    // called within the file
    tickets:state.tickets
  }
}
// calling connect returns a function which is why you can call functions
// immediately afterward.  Always in that order  OR...for example,
// this is how it's called:

// const connectedThingFunction = connect(mapStateToProps);
// const ListOfUsersContainer = connectedThingFunction(ListOfUsers);
const TicketsContainer = connect(mapStateToProps)(Tickets);
export default TicketsContainer
