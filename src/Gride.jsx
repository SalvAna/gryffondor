// Gride.jsx

import React, { Component } from 'react';
import './Gride.css';
import Cell from './Cell';



class Gride extends Component {
  constructor(props){
    super(props);
    this.rows = 10 ;
    //this.boxsize = 100;
  }
  render() {
    return(
      <div className="Gride">

      {

     Array(this.rows).fill(0).map((item, i) => { return ( <Cell key = {i + "" } /* x = {i * this.boxsize} width = {this.boxsize} style={this.boxsize,}*//> ) } )

      }

        </div>
      );

    }

  }


  export default Gride;
