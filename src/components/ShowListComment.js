import React from 'react';
import axios from 'axios';

class ListComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {info : {}};
  }

  render() {
    if (this.props.post_id === this.props.id) {
      axios.get('http://api.trainingcolorme.tk/profile/'+this.props.user_id+'?token='+localStorage.getItem("token"))
        .then( (response) => {
          this.setState({info:response.data.data.user});
        })
        .catch(function (error) {
          throw (error);
        });
      return (
        <div>
          <div className="media">
            <a className="pull-left" href="#paper-kit">
              <div className="avatar">
                <img className="media-object" src={this.state.info.avt_url} alt="..." />
              </div>
            </a>
            <div className="media-body">
              <h6 className="media-heading card-category text-success" style={{color : "red"}}>{this.state.info.name}</h6>
              <div className="pull-right">
                <h6 className="card-category text-danger">{this.props.updated_at}</h6>
              </div>
              <p>{this.props.content}</p>
            </div>
          </div>
        </div>
      );
    }
    else return (
      <div>
      </div>
    );
  }
}

export default ListComment;
