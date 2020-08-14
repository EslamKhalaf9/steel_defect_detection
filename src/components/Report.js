import React, { Component } from 'react';
import ReportDetailes from './ReportDetailes';

export default class Report extends Component {
  render() {
    const { result } = this.props.result;
    const { hasDefect } = result;
    return (
      result ? <div className="report">
        <nav className="bg-primary text-white shadow-sm py-2">
          <p className="display-4 text-center">Report</p>
        </nav>
        {hasDefect ? <ReportDetailes result={result} /> : <p>There are no defects</p>}
      </div> : <h1 className="display-2 text-center">404</h1>
    )
  }
}
