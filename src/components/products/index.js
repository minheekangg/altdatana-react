import React from 'react';

import CallToAction from '../call-to-action';
import TempImg from '../../images/lock.png';
import TempImg2 from '../../images/temptyg6.jpg';
import { ROUTE_ROOT } from "../../utils/constants";

const Products = () => (
    <div id="products" className="gradient">
        <div className="curvy-border">
            <div className="container tight">
                <section>
                    <p className="section-tag">Products</p>
                    <h2 style={{ color: "black" }}>I am looking to finance...</h2>
                    <div className="products-list flex-box four-items">
                        <a className="product item" href={`${ROUTE_ROOT}/products/1`}>
                            <img src={TempImg} alt="school" />
                            <div className="product-title">Loan for School</div>
                            <p>
                                Our home equity line allows you to consolidate debt
                                at a lower rate compared to credit cards and
                                personal loans.
                            </p>

                            <div className="learn-more">+ Learn more</div>
                        </a>
                        <div className="product item">
                            <img src={TempImg} alt="school" />
                            <div className="product-title">Refinance</div>
                            <p>
                                Our home equity line allows you to consolidate debt
                                at a lower rate compared to credit cards and
                                personal loans.
                            </p>
                        </div>
                        <div className="product item">
                            <img src={TempImg} alt="school" />
                            <div className="product-title">Home</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div class="step-by-step">
            <div className="container tight">
                    <p className="section-tag" style={{marginTop: "60px", color: 'white'}}>start here</p>
                    <h2 style={{ color: "white", marginBottom: '60px' }}>I am looking to finance...</h2>
                <section className="steps">
                    <div className="step-one">
                        <h4 className="number">01</h4>
                        <h3 ><strong>Where do I start?&nbsp;</strong></h3>
                        <p class="center-align">It only takes moments to see your new rate. No commitment, no documents, no impact on your credit score.
                        </p>
                    </div>
                    <div className="step-two">
                        <h4 className="number">02</h4>
                        <h3 ><strong>Where do I start?&nbsp;</strong></h3>
                        <p class="center-align">It only takes moments to see your new rate. No commitment, no documents, no impact on your credit score.
                        </p>
                    </div>
                        <div class="timeline-dotted-line">
                            <div class="line">
                                <div class="dots">
                                    <div class="dot-wrapper-2">
                                        <div class="dot dot-top"></div>
                                    </div>
                                    <div class="dot-wrapper-2">
                                        <div class="dot dot-middle"></div>
                                    </div>
                                    <div class="dot-wrapper-2">
                                        <div class="dot dot-bottom"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    <div className="step-three">
                        <h4 className="number">03</h4>
                        <h3 ><strong>Where do I start?&nbsp;</strong></h3>
                        <p class="center-align">It only takes moments to see your new rate. No commitment, no documents, no impact on your credit score.
                        </p>
                    </div>
                </section>
      
                <section class="product-deeper">

                        <div class="img-wrapper">
                            <img src={TempImg2} alt='phone in hand' />
                            <p class="img-tag">Photo by Balázs Kétyi on Unsplash</p>
                        </div>
                        <h3 class="desc">
                            Our home equity line allows you to consolidate debt
                                    at a lower rate compared to credit cards and
                                    personal loans.
                        </h3>

                </section>
            </div>
        </div>
        <CallToAction type="apply" />
    </div>

);

export default Products;