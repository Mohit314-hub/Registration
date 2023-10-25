import React from 'react';
import LeftSide from './leftSide';
import RightSide from './rightSide';
import './main.css';

export default function Main() {
  return (
    <div className="container">
      <div className="centered-box">
        <div className="row">
          <div className="col-lg-6 col-md-12 leftSide">
            <LeftSide />
          </div>
          <div className="col-lg-6 col-md-12">
            <RightSide />
          </div>
        </div>
      </div>
    </div>
  );
}
