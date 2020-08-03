import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    image: '',
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
      </form>
    );
  }
}
