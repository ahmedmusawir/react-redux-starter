import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../home-image.jpg';

const Home = props => (
  <div id="home-main" className="container">
    <div className="row container-body my-5 pt-xs-3 pt-sm-4 pb-sm-4 p-sm-3 animated fadeIn">
      <div className="col-md-12 col-lg-12" />
      <div className="col-md-12 col-lg-12">
        <article className="description clearfix">
          <p className="badge badge-danger">FEATURED PRESENTATION</p>
          <h5 className="float-right">
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
          </h5>
          <h1 className="mt-5 mb-5 text-center">Application Architecture</h1>
          <img className="img-fluid float-left" src={homeImage} alt="" />
        </article>
      </div>
    </div>
    {/* end row */}
  </div>
  // end container
);

export default Home;
