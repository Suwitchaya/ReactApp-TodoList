import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import DatePickers from './DatePickers';
import OutlinedButtons from './Button';
class Modal extends React.Component {

  
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    width:60%;
  `;
    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 300,
      minHeight: 200,
      margin: '0 auto',
      padding: 30
    };

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          {this.props.children}
          <div>
            <div className="text-lable"> <span> Title : </span><Input placeholder="Title" type="text" /></div>
            <div className="text-lable"> <span> Description : </span><Input placeholder="Description" type="text" /></div>
            <div className="text-lable"> <span> Date : </span><DatePickers /></div>
          </div>
          <div className="footer">
          <OutlinedButtons onClick={this.props.onClose}>Add</OutlinedButtons>
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;