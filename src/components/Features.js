import React from 'react';

const Features = () => {
  return (
    <section id="Features mt-5">
      <div className="container text-center">
        <h2 className="display">App Features</h2>
        <p className="lead">
          Detect and Segment the defect part in the steel image in pixels level
          and map it to its belonging class
        </p>
        <p className="lead">
          there are four classes of steel defects this app can help you to
          detect if the steel defected and classify its defection
        </p>
        <figure className="figure m-1">
          <img
            src="/imgs/class1.JPG"
            className="figure-img img-fluid rounded"
            alt="..."
          />
          <figcaption className="figure-caption">Class1</figcaption>
        </figure>
        <figure className="figure m-1">
          <img
            src="/imgs/class2.JPG"
            className="figure-img img-fluid rounded"
            alt="..."
          />
          <figcaption className="figure-caption">Class2</figcaption>
        </figure>
        <figure className="figure m-1">
          <img
            src="/imgs/class3.JPG"
            className="figure-img img-fluid rounded"
            alt="..."
          />
          <figcaption className="figure-caption">Class3</figcaption>
        </figure>
        <figure className="figure m-1">
          <img
            src="/imgs/class4.JPG"
            className="figure-img img-fluid rounded"
            alt="..."
          />
          <figcaption className="figure-caption">Class4</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Features;
