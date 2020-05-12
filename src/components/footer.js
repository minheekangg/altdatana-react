import React from 'react';
import styled from "styled-components";

const FooterWrapper = styled.footer`
    padding: 10px;
    max-width: 1200px;
    margin: 0 auto 30px;
    position: absolute;
    bottom: 0;
    width: 100%;

    .flex-box { justify-content: space-between; }

    p, a { font-size: 14px; }

    .item { margin: 10px 5px; }

    a~a {
        margin-left: 10px;
        border-left: 1px solid;
        padding-left: 10px
    }

    @media screen and (max-width: 400px) {
        .item { margin: 5px; }
        .flex-box {
            display: block;
        }
    }
`;

const Footer = () => (
    <FooterWrapper>
        <div className="flex-box">
            <div className="item">
                <p>Ⓒ company name 2020</p>
            </div>
            <div className="item">
                <a href="/terms" target="_blank">Terms of Use</a>
                <a href="/policy" target="_blank">Privacy Policy</a>
            </div>
        </div>
    </FooterWrapper>
)
    

export default Footer
