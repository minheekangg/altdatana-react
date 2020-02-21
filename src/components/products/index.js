import React from 'react';

import CallToAction from '../call-to-action';
import TempImg from '../../images/lock.png';
import TempImg2 from '../../images/temptyg6.jpg';
import { ROUTE_ROOT } from "../../utils/constants";

const Products = () => (
    <div id="products">
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
            <section class="product-deeper">
                <div class="img-wrapper">
                    <img src={TempImg2} alt='phone in hand' />
                    <p class="img-tag">Photo by Balázs Kétyi on Unsplash</p>
                </div>
                <div class="desc">
                    Our home equity line allows you to consolidate debt
                            at a lower rate compared to credit cards and
                            personal loans.
                </div>
            </section>
        </div>
        <CallToAction type="apply" />
    </div>

);

export default Products;