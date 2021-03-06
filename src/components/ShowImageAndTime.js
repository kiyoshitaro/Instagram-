import React from 'react';

class ShowImageAndTime extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <div>
          <center>
            <a href={this.props.img_url} >
              <img src={this.props.img_url} alt = "No Img ... " />
            </a></center>
          <br/>
          <div className="col-md-6 offset-md-7" >
            <h6 className="card-category text-success"><i className="fa fa-clock-o"/>
              Update at : {this.props.updated_at}</h6>
          </div>
          <br/>
          <div style={{color: "mediumseagreen"}}>
            <div className="card-block" style={{
              "border-left": "solid 3px red",
              margin: "20px",
              "padding-top": "0px",
              "padding-bottom": "0px"
            }}>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default ShowImageAndTime;
