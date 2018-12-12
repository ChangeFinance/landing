// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import IntercomBubble from './IntercomBubble';
import variables from '../ui/variables';

const Container = styled.div`
  margin-bottom: 60px;
  ${breakpoint('tablet')`
    width: 960px;
    margin: 0 auto 120px;
  `};
  ${breakpoint('desktop')`
    width: 1152px;
  `};
`;

const InnerContainer = styled.div`
  padding: 96px 24px 24px;
  display: flex;
  flex-direction: column;
  ${breakpoint('tablet')`
    flex-direction: row;
    width: 960px;
    margin: 0 auto;
  `};
  ${breakpoint('desktop')`
    flex-direction: rowx;
    width: 1152px;
  `};
`;


const IntroHeading = styled.div`
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeLarge};
  margin-bottom: 18px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLarger};
    margin-bottom: 36px;
  `};
`;


export const ContactUs = class ContactUs extends React.Component<{}> {

  render() {
    return (
      <Container>
        <InnerContainer>
          <IntroHeading>
            <container>Contact us</container> <br/><br/>
            <p>xChange AS<br/>Company id: 14428150<br/>Rävala pst 4, Tallinn, Estonia 10143<br/>support@getchange.com</p>
          </IntroHeading>
        </InnerContainer>
        <IntercomBubble />
      </Container>
    );
  }
};

export default ContactUs;
