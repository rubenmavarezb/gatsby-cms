import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const BgImage = styled(BackgroundImage)`
  height: 600px;
`;

const ImgText = styled.div`
    background-image: linear-gradient(to top, rgba(34, 49, 63, .8), rgba(34, 49, 64, .8));
    color: #FFF;
    height: 100%;
    display: flex;
    flex-direction:column;
    flex: 1;
    align-items:center;
    justify-content:center;

    h1 {
        font-size: 4rem;
        margin: 0%;

        @media (min-width: 992px){
            font-size: 5.8rem;
        }
    }

    p {
        font-size:2rem;
        @media (min-width: 992px) {
            font-size:2.6rem;
        }
    }
`;

const ImgHotel = () => {

    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "8.jpg" } ) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return ( 
        <BgImage
            tag="section"
            fluid={image.sharp.fluid}
            fadeIn="soft"
        >
            <ImgText>
                <h1>Welcome to Gatsby Hotel!</h1>
                <p>The best hotel for your vacations!</p>
            </ImgText>
        </BgImage>
    );
}
 
export default ImgHotel;