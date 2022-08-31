import React, { Component } from "react";

import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Modal () {
  return (
    <div className="modalBG">
      <div className="modalContainer">
        <button> X </button>
        <div className="header">
          <h1>This is where the picture goes</h1>
        </div>
        <div className="body">
          <strong>Name of Project 'project URL'</strong>
          <strong>GitHub Repo URL</strong>
          <p>about the project</p>
          <p>technologies</p>
        </div>
      </div>
    </div>
  )
}

export default Modal;