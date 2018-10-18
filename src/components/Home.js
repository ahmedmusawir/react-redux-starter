import React from 'react';
import { Link } from 'react-router-dom';

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
          <h1 className="mt-5">Shawshank Redemption</h1>
          <img
            className="img-fluid float-left"
            src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            alt=""
          />
          <h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum pariatur sequi sint
            aliquam ipsam neque unde dignissimos perferendis, eveniet cupiditate! Aliquid eligendi
            quasi id consequuntur. Culpa ad aliquam esse sunt.
          </h5>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nisi cum minus dolorum
            illum? Voluptates illo ullam, alias eveniet sit eligendi excepturi debitis eos porro
            maiores. Autem dolorum amet praesentium. Lorem ipsum dolor sit amet consectetur voluptas
            tempora temporibus iusto minima itaque.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nisi cum minus dolorum
            illum? Voluptates illo ullam, alias eveniet sit eligendi excepturi debitis eos porro
            maiores. Autem dolorum amet praesentium. Lorem ipsum dolor sit amet consectetur
          </p>
          <p>
            <Link className="btn btn-danger float-right" to="/sold-out">
              BUY NOW
            </Link>
          </p>
        </article>
      </div>
    </div>
    {/* end row */}
  </div>
  // end container
);

export default Home;
