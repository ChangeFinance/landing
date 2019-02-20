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
  align-items: center;
  justify-content: center;
  height: 100vh;
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
  text-align: center;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLarger};
    margin-bottom: 36px;
  `};
`;


export const OrderConfirmed = class OrderConfirmed extends React.Component<{}> {

  render() {
    return (
      <Container>
        <InnerContainer>
          <IntroHeading>
            <container>Your order is now confirmed</container> <br/><br/>
            <p>It might take a few hours until you see your balance being updated</p>
          </IntroHeading>
        </InnerContainer>
        <IntercomBubble />
      </Container>
    );
  }
};

export default OrderConfirmed;
