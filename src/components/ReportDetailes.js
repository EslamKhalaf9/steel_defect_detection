import React, { Component } from 'react'

export default class ReportDetailes extends Component {
  render() {
    const { hasDefect, classes, mask } = this.props.result;
    return (
      <div className="container">
        <div className="row py-5">
          <div className="col-sm">
            <p className="h3">Steel Image</p>
            <img src="/imgs/steel1.jpg" className="figure-img img-fluid rounded" alt="" />
          </div>
          <div className="col-sm">
            <p className="h3">Mask</p>
            <img src="/imgs/mask1.jpg" className="figure-img img-fluid rounded" alt="" />
          </div>
        </div>
        <p className="h3 mt-5">the image has<span className="text-primary">{classes.length} {classes.length > 1 ? "defects" : "defect"}</span></p>
        <hr />
        <a href="/">check another one?</a>
      </div>
    )
  }
}
