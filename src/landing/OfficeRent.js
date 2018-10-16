// @flow
import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import breakpoint from 'styled-components-breakpoint';

import Contact from './Contact';
import { Link } from 'react-router-dom';

import headerImg from './img/header.jpg';
import checkImg from './img/checkmark.svg';

import img1 from './img/office-rent/1.jpg';
import img2 from './img/office-rent/2.png';
import img3 from './img/office-rent/3.png';
import img4 from './img/office-rent/4.png';
import img5 from './img/office-rent/5.jpg';
import img6 from './img/office-rent/6.jpg';
import img7 from './img/office-rent/7.jpg';
import img8 from './img/office-rent/8.png';
import {Button} from "./ui";
import variables from './ui/variables';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${headerImg}) no-repeat;
  background-size: cover;
  height: 70vh;
  overflow: hidden;
  margin-bottom: 60px;
`;

const WhiteHeading = styled.h1`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeSuperLarge};
  font-weight: 300;
  line-height: 1;
  letter-spacing: -3px;
  text-align: center;
  color: #ffffff;
`;

const BlackHeading = styled.h1`
 font-family: ${variables.fontPrimaryBold};
 font-size: ${variables.fontSizeMedium};
  padding-top: 15px;
`;

const BlackParagraph = styled.p`
  font-family: ${variables.fontPrimary};
   font-size: ${variables.fontSizeNormal};;
  text-align: justify;
`;

const WhiteSubHeading = styled.h2`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLargest};
  text-align: center;
  color: #eeeeee;
`;

const WhiteSmallSubHeading = styled.h3`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLarge};
  text-align: center;
  color: #eeeeee;
  margin-top: 20px;
`;

const InnerContainer = styled.div`
  margin: 0 5%;
`;

const FeatureTitle = styled.p`
  font-family: ${variables.fontPrimaryBold};
 font-size: ${variables.fontSizeMedium};
`;

const FeatureDescription = styled.p`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeNormal};;
`;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 350px;
  min-height: 180px;
`;

const FeatureSet = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  img {
    margin-bottom: 10px;
  }
`;

const PhotosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin-left:auto;
  margin-right:auto;
  max-width: 550px;
  ${breakpoint('mobile')`
    transform: scale(0.5);
  `};
  ${breakpoint('desktop')`
   transform: scale(1);
  `};
`;


const Bullets = styled.ul`
  margin: 0 auto;

  li {
    font-family: OpenSans;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
  }
`;

const MoreInfoContainer = styled.div`
  margin-top: 40px;
`;

const StyledButton = Button.extend`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  @media only screen and (max-device-width: 480px){
    padding-left: 6px;
    padding-right: 6px;
  }
`;

const StyledLink = styled.div`
  text-decoration: none !important;
`;

const Header = () => (
  <HeaderContainer>
    <WhiteSubHeading>Looking for an office to rent?</WhiteSubHeading>
    <WhiteHeading>We are looking for neighbours</WhiteHeading>
    <WhiteSmallSubHeading>Exclusive new 2-floor office for rent in Tallinn city center</WhiteSmallSubHeading>
    <br/>
    <StyledLink><Link to="/office-rent/#officecontacts"><StyledButton color="white">Contact us</StyledButton></Link></StyledLink>
  </HeaderContainer>
);

const Feature = (props: any) => (
  <FeatureContainer>
    <FeatureTitle><img src={checkImg} height="15" alt="Check" /> {props.title}</FeatureTitle>
    <FeatureDescription>{props.description}</FeatureDescription>
  </FeatureContainer>
);

const Features = () => (
  <FeaturesContainer>
    <Bullets>
      <li>EU House, Rävala Avenue 4</li>
      <li>9th and 10th floor</li>
      <li>209 m2 office space + 500 m2 roof terrace + 100 m2 chill area</li>
      <li>18 EUR/m2. Common areas and terrace free of charge.</li>
      <li>In renovation, available from mid November 2018.</li>
    </Bullets>
    <br /><br />
    <FeatureSet>
      <Feature title="Modern industrial style" description="Bright and spacious modern industrial style done by an interior designer. High-quality materials used." />
      <Feature title="Two floors" description="Office through 9th and 10th floor of the EU house. First floor working spaces and kitchen area and second mezzanine floor with meeting rooms." />
      <Feature title="Best views" description="Full-length windows on two sides offering unforgettable views of old town and central business district." />
      <Feature title="Central location" description="Next to Viru Keskus in the core center of Tallinn where everything is walking distance." />
      <Feature title="High-end office building" description="One of the most luxurious office buildings in town in the middle of Tornimäe financial district." />
      <Feature title="Always secure" description="24/7 administrator in the building, floor access for only 2 companies secured with digital access passes and cameras over entrances." />
      <Feature title="Huge roof terrace" description="Roof terrace of over 500m2 that is highly unique for Tallinn city center shared with Change team." />
      <Feature title="Common chill area" description="A relaxing area with a pingpong table and chill corner shared with Change team." />
      <Feature title="Oh so comfortable" description="Everything you need from food to conference centers and gyms is right there. Even a direct elevator to MyFitness with a pool and sauna complex." />
      <Feature title="New everything" description="Full renovation including climate system, ventilation, heating, ATS, internet connections, access systems etc replaced during construction in 2018." />
      <Feature title="Have a say in the interior design" description="Space is currently in construction and there’s room for adjustments based on your needs." />
      <Feature title="Awesome neighbours" description="Next door is Change’s awesome international team for more exciting coffee chats." />
    </FeatureSet>
  </FeaturesContainer>
);

const Photos = () => {
  const images = [
      {
        original: img1,
        thumbnail: img1,
        description:'EU House'
      },
      {
        original: img2,
        thumbnail: img2,
        description:'Floor plan',
      },
      {
        original: img3,
        thumbnail: img3,
        description:'Floor plan'
      },
      {
        original: img4,
        thumbnail: img4,
        description:'Floor plan'
      },
      {
        original: img5,
        thumbnail: img5
      },
      {
        original: img6,
        thumbnail: img6
      },
      {
        original: img7,
        thumbnail: img7
      },
      {
        original: img8,
        thumbnail: img8
      }
    ]
 

  return <PhotosContainer>
    <ImageGallery 
    items={images} />
  </PhotosContainer>
};

const MoreInfo = () => (
  <MoreInfoContainer>
    <BlackHeading>EU House</BlackHeading>
    <BlackParagraph>The contemporary 10-storey office building, constructed in 2006, was designed by a prominent architectural bureau Alver & Trummal and has an outstanding architectural design unique in the city of Tallinn.</BlackParagraph>

    <BlackParagraph>Known as the ‘EU House’ after the main tenants European Parliament and European Commission, the property has been constructed based on requirements requested by EU institutions. It has been regularly maintained to a high standard, thus the building is in a great condition.</BlackParagraph>

    <BlackParagraph>Tenants include well known and reputable international companies such as Riigi Kinnisvara, European Commission and European Parliament, Ernst & Young Baltic, Magnum Grupp , several law firms, and a unique My Fitness gym with a spa and sauna center.</BlackParagraph>

    <BlackHeading>Location</BlackHeading>
    <BlackParagraph>The office space is located in the centre of the central business district (CBD) of Tallinn on A. Laikmaa Street 15 / Rävala Avenue 4.</BlackParagraph>

    <BlackHeading>Conditions</BlackHeading>
    <BlackParagraph>Rental period is 1 year, with an opportunity to extend for 1 year. The office is unfurnished, except from the kitchen.</BlackParagraph>
  </MoreInfoContainer>
);

const OfficeRent = () => (
  <Container>
    <Header></Header>
    <InnerContainer>
      <Features></Features>
      <Contact></Contact>
      <Photos></Photos>
      <MoreInfo></MoreInfo>
    </InnerContainer>
  </Container>
);

export default OfficeRent;