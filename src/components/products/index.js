import React from 'react';
import styled from "styled-components";

import CallToAction from '../call-to-action';

import circle from '../../images/product-circle.png';
import leftg from '../../images/product-leftg.png';
import rightg from '../../images/product-rightg.png';
import triangle from '../../images/product-triangle.png';
import heroRight from '../../images/product-right.png';
import tempimg from '../../images/temp.png';


const ProductWrapper = styled.div`
    position: relative;

    .triangle-img {
        position: absolute;
        margin-top: -60px;
        left: 4%;
        width: 115px;
        height: 115px;
        background-image: url(${triangle});
        background-position: center;
        background-size: cover;
        opacity: 0.8;
        z-index: 2;
        display: block;
    }
`;

const ProductSectionTitle = styled.section`
    position: relative;
    overflow: hidden;
    margin-top: -75px;
    background-color: #EFF9FB;
    z-index: 1;
    min-height: 90vh;

    .circle-img {
        position: absolute;
        top: -250px;
        left: -300px;
        width: 600px;
        height: 600px;
        background-image: url(${circle});
        background-position: center;
        background-size: cover;
        opacity: 0.8;
        z-index: -1;
    }

    .hero-right-img {
        position: absolute;
        top: 0;
        right: 0;
        width: 650px;
        height: 666px;
        background-image: url(${heroRight});
        background-position: center;
        background-size: cover;
        opacity: 0.8;
        z-index: -1;
    }


    .flex-box { 
        align-items: center; 
        margin: 70px auto 0;
        width: 100%;
    }

    .item.right {
        flex-basis: 30%;

        img {
            width: 100%;
        }
    }

    h2 { 
        font-size: 50px; 
        text-align: left;
        z-index: 2;
    }

    @media screen and (max-width: 1020px) {
        h2 { 
            font-size: 3em; 
            line-height: 1.2
        }
    }
    @media screen and (max-width: 750px) {
        text-align: center;

        .flex-box {
            flex-wrap: wrap;
        }

        .item { 
            flex-basis: 100%!important;
        }
        .hero-right-img { display: none; }
    }
`;

const ProductSectionContent = styled.section`
    text-align: center;
    max-width: 900px;
    margin: auto;

    .flex-box {
        justify-content: space-evenly;
        align-items: center;
        // margin: 40px 80px 40px 0;
    }

    .item { 
        padding: 35px;
        border: 1px solid;
        border-radius: 10px;
        flex-grow: 1;
        margin: auto 30px
    }
    
    .step-header { 
        font-size: 24px; 
        margin: 0;
        line-height: 2;
    }

    img { 
        width: 150px;
        height: 150px;
    }

    @media screen and (max-width: 900px) {
        .step-header { font-size: 1.75em; }
        .flex-box, .flex-box.flip {
            margin: 40px auto;
            justify-content: start;
        }
    }
    @media screen and (max-width: 600px) {
        .flex-box {
            flex-wrap: wrap;

            &.flip { flex-wrap: wrap-reverse; }
        }

        .item { 
            flex-basis: 100%;
            text-align: center;
            img { max-width: 300px;}
        }
    }
`;

const Product = () => (
    <ProductWrapper id="product">
        <ProductSectionTitle>
            <div className="circle-img"></div>
            <div className="hero-right-img"></div>
            <div className="container">
                <div className="flex-box two-items container">
                    <div className="item left">
                        <h2>
                            Modernizing the underwriting formula, by understanding velocity and volatility.
                        </h2>
                    </div>
                    <div className="item right">
                        <img src={tempimg} alt="temporary img" />
                    </div>
                </div>
            </div>
        </ProductSectionTitle>
        <div className="triangle-img"></div>
        <ProductSectionContent>
            <div className="container">
                <h3>Our Products</h3>
                <div className="flex-box">
                    <div className="item">
                        <img src={tempimg} alt="temporary img" />
                        <h4>Product 1</h4>
                        <p>Whether you integrate our API into your business ecosystem, or use our interface to face your client, our onboarding team is here for you.</p>
                    </div>
                    <div className="item">
                        <img src={tempimg} alt="temporary img" />
                        <h4>Product 2</h4>
                        <p>Loan simulations, stochastic stresses, and machine learning. We learn your borrower’s behavior and provide you the limits of their payment probability. </p>
                    </div>
                </div>
            </div>
        </ProductSectionContent>
        <CallToAction type="question"/>
    </ProductWrapper>
);

export default Product;