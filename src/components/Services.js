import React from "react";

const Services = () => {
  return (
    <div className="container" id="service_section">
      <h2 className="my-5">
        <span className="line-sec"></span> Services I provide
      </h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card services">
            <p className="text-center">
              <i class="fas fa-pencil-ruler"></i>
            </p>
            <div className="card-body">
              <h4 className="card-title">UI/UX Design</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card services">
            <p className="text-center">
              <i class="fab fa-react"></i>
            </p>
            <div className="card-body">
              <h4 className="card-title">Front-end React</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card services">
            <p className="text-center">
              <i class="fab fa-node"></i>
            </p>
            <div className="card-body">
              <h4 className="card-title">Nodejs</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card services">
            <p className="text-center">
              <i class="fab fa-js"></i>
            </p>
            <div className="card-body">
              <h4 className="card-title">JavaScript</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card services">
            <p className="text-center">
              <i class="fab fa-angular"></i>
            </p>
            <div className="card-body">
              <h4 className="card-title">Angular</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card services">
            <p className="text-center">
              <i class="fab fa-php"></i>
            </p>
            <div className="card-body">
              <h4 className="card-title">PHP</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
