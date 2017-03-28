import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

 class DialogBox extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <div>
        <RaisedButton label="View" onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.title}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.props.overview}
        </Dialog>
      </div>
    );
  }
}

DialogBox.propTypes = {
  title: React.PropTypes.string,
  overview: React.PropTypes.string,  
};

export default DialogBox;