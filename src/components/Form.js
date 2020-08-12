import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    image: '',
    result: ''
  };

  handleChange = (e) => {
    const files = e.target.files;
    this.setState({ image: files[0] });
  };

  handelSubmit = (e) => {
    //handleSubmit


  };
  render() {
    return (
      <form
        id="detect"
        className="m-auto container col-md-6 my-5"
        onSubmit={this.handelSubmit}
      >
        <h2 className="display">Detect The Defection</h2>
        <div className="form-group p-1 border">
          <label htmlFor="imageInput">Insert Steel image</label>
          <input
            type="file"
            className="form-control-file"
            id="imageInput"
            accept="image/png, image/jpeg"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Check Defects"
            className="btn btn-success"
          />
        </div>
        {
          this.state.result ? <div className="result">
            <p className="h1">The Defect belongs to</p>
            <p className="text-center h1 bg-secondary p-2 text-white border border-1">{this.state.result}</p>
          </div> : null
        }
      </form>
    );
  }
}
