import React from 'react';
import bg_1 from "./img/Rectangle 1270.png"
import bg_2 from "./img/bg-2.png"
import data_1 from "./img/Group 209.png"
import data_2 from "./img/Group 222.png"
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./johnsPart.css"

const JohnsPart = () => {
    return (
        <div className="container">
            <div className='row w-100'>

                <div className="col-6 img">
                    <img src={bg_1} alt="" />
                    <img src={data_1} alt="" />
                </div>
                <div className="col-6 content">
                    <div>
                        <div className="content-header my-3">
                            <h2>We connect our customers with the best, and help them keep up-and stay open.</h2>
                        </div>
                        <div className="content_text">
                            <div className='w-100 my-3 d-flex'>
                                <i class="bi bi-check-circle-fill fs-3 text-info"></i>
                                <p>We connect our customers with the best.</p>
                            </div>
                            <div className='w-100 my-3 d-flex'>
                                <i class="bi bi-check-circle-fill fs-3 text-info"></i>
                                <p>Advisor success customer launch party.</p>
                            </div>
                            <div className='w-100 my-3 d-flex'>
                                <i class="bi bi-check-circle-fill fs-3 text-info"></i>
                                <p>Business-to-consumer long tail.</p>
                            </div>


                            <button className='btn'>Start Now</button>

                        </div>
                    </div>
                </div>

                <div className="col-6 content">
                    <div>
                        <div className="content-header my-3">
                            <h2>We connect our customers with the best, and help them keep up-and stay open.</h2>
                        </div>
                        <div className="content_text ">
                            <div className='w-100 my-3 p-2 d-flex  pi'>
                                <i class="bi bi-check-circle-fill fs-3 text-info"></i>
                                <p>We connect our customers with the best.</p>
                            
                            </div>
                            <div className='w-100 my-3 p-2 d-flex '>
                                <i class="bi bi-check-circle-fill fs-3 text-info"></i>
                                <p>Advisor success customer launch party.</p>
                            
                            </div>
                            <div className='w-100 my-3 p-2 d-flex  '>
                                <i class="bi bi-check-circle-fill fs-3 text-info"></i>
                                <p>Business-to-consumer long tail.</p>
                            
                            </div>


                            <button className='btn'>Start Now</button>

                        </div>
                    </div>
                </div>
                <div className="col-6 img">
                    <img src={bg_2} alt="" />
                    <img src={data_2} alt="" />
                </div>
            </div>
        </div>

    );
}

export default JohnsPart;
