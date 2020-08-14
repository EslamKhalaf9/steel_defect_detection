import React, { Component } from 'react';
import Report from './Report';
import { withRouter, Route } from 'react-router-dom';

class Form extends Component {
  state = {
    image: '',
    result: ''
  };

  handleChange = (e) => {
    const files = e.target.files;
    var tmppath = URL.createObjectURL(files[0]);
    this.setState({ image: files[0], path: tmppath });
    console.log(this.state.image)
  };

  handelSubmit = (e) => {
    //handleSubmit
    // var tmppath = URL.createObjectURL(this.state.image);
    console.log(this.state.path);
    this.props.changeResult({ hasDefect: true, classes: [1, 3], mask: "123456789456" });
    this.props.history.push('/report');
  };
  render() {
    return (
      <form
        id="detect"
        className="m-auto container col-md-6 my-5"
        onSubmit={this.handelSubmit}
      >
        <h2 className="display mb-4">Detect The Defection</h2>
        {/* <img src={this.state.path} alt="" /> */}
        <div className="form-group mb-3">
          <label htmlFor="imageInput" className="custom-file-upload btn btn-primary btn-block">Insert Steel image
            <input
              type="file"
              className="form-control-file btn btn-primary"
              id="imageInput"
              accept="image/png, image/jpeg"
              onChange={this.handleChange}
            />
          </label>
        </div>
        {this.state.image ? <p className="text-center">{this.state.image.name}</p> : null}
        <div className="form-group mb-5">
          <input
            type="submit"
            value="Check Defects"
            className="btn btn-success btn-block"
          />
        </div>
      </form>
    );
  }
}

export default withRouter(Form);
