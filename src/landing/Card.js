// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import GradientText from './GradientText';

import photo from './img/photo-landing-card.jpg';
import { ScalingPlasticCard } from '../card/PlasticCard';

import ScrollToTarget from './ScrollToTarget';
import { Button } from './ui';

import variables from '../ui/variables';

const Container = styled.div`
  margin-bottom: 96px;
  ${breakpoint('tablet')`
    margin-bottom: 240px;
  `};
`;

const InnerContainer = styled.div`
  text-align: center;
  ${breakpoint('tablet')`
    width: 960px;
    margin: 0 auto;
  `};
`;

const TextContainer = styled.div`
  padding: 0 24px;
  ${breakpoint('tablet')`
    text-align: center;
    padding: 0;
    max-width: 600px;
    margin: 0 auto;
  `};
`;

const Heading = styled.div`
  font-family: ${variables.fontPrimary};
  font-weight: ${variables.fontWeightBold};
  font-size: ${variables.fontSizeLargest};
  line-height: 1.2;
  margin-bottom: 24px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeHuge};
    letter-spacing: -1px;
  `};
`;

const Body = styled.div`
  color: ${variables.colorNeutral};
  font-family: ${variables.fontSecondary};
  line-height: 1.5;
  margin-bottom: 24px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLarger};
    line-height: 1.4;
    margin-bottom: 36px;
  `};
`;

const Highlight = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLarge};
  font-weight: ${variables.fontWeightBold};
  line-height: 1.2;
  margin-bottom: 12px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLarger};
    margin-bottom: 24px;
  `};
`;

const VisualContainer = styled.div`
  position: relative;
  ${breakpoint('tablet')`
    height: 480px;
    margin-bottom: 168px;
  `};
`;

const ImageContainer = styled.div`
  ${breakpoint('tablet')`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${variables.zIndexCardImage};
    width: 720px;
    height: 480px;
  `};
`;

const Image = styled.img`
  width: 100%;
`;

const PlasticContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -60px;
  @media (max-width: 340px) {
    transform: scale(0.9);
  }
  ${breakpoint('tablet')`
    position: absolute;
    top: auto;
    bottom: -60px;
    left: 50%;
    margin: 0;
    z-index: ${variables.zIndexCardPlastic};
    transform: none;
  `};
`;

const ImageTransition = styled.div`
  opacity: 0;
  transform: translateX(-100%);
  transition: transform 0.9s, opacity 0.6s;
  ${props =>
    (props.state === 'entering' || props.state === 'entered') &&
    `
    opacity: 1;
    transform: translateX(0);
  `};
`;

const PlasticTransition = styled.div`
  opacity: 0;
  transform: translateX(192px);
  transition: transform 0.9s, opacity 0.6s;
  ${props =>
    (props.state === 'entering' || props.state === 'entered') &&
    `
    opacity: 1;
    transform: translateX(0);
  `};
`;

const FadeTransition = styled.div`
  opacity: 0;
  transition: all 0.9s;
  ${props => props.delay && `transition-delay: ${props.delay}ms`};
  ${props =>
    (props.state === 'entering' || props.state === 'entered') &&
    `
    opacity: 1;
  `};
`;

type Props = {};

type State = {
  isCardVisible: boolean,
  isTextVisible: boolean,
};

class Card extends React.Component<Props, State> {
  state = {
    isCardVisible: false,
    isTextVisible: false,
  };

  handleCardEnter = () => {
    this.setState({ isCardVisible: true });
  };

  handleCardLeave = () => {
    this.setState({ isCardVisible: false });
  };

  handleTextEnter = () => {
    this.setState({ isTextVisible: true });
  };

  handleTextLeave = () => {
    this.setState({ isTextVisible: false });
  };

  render() {
    return (
      <ScrollToTarget hash="#card" pos="center">
        <Container>
          <InnerContainer>
            <Waypoint
              onEnter={this.handleCardEnter}
              onLeave={this.handleCardLeave}
              topOffset="5%"
              bottomOffset="20%"
            >
              <VisualContainer>
                <Transition in={this.state.isCardVisible} timeout={2000}>
                  {state => (
                    <div>
                      <ImageContainer>
                        <ImageTransition state={state}>
                          <Image src={photo} alt="" />
                        </ImageTransition>
                      </ImageContainer>
                      <PlasticContainer>
                        <PlasticTransition state={state}>
                          <ScalingPlasticCard
                            name="Lisa Robinson"
                            number="1234 5678 9012 1101"
                            date="12/20"
                          />
                        </PlasticTransition>
                      </PlasticContainer>
                    </div>
                  )}
                </Transition>
              </VisualContainer>
            </Waypoint>
            <Waypoint
              onEnter={this.handleTextEnter}
              onLeave={this.handleTextLeave}
              topOffset="5%"
              bottomOffset="20%"
            >
              <TextContainer>
                <Transition in={this.state.isTextVisible} timeout={2000}>
                  {state => (
                    <div>
                      <FadeTransition state={state} delay={0}>
                        <Highlight>
                          <GradientText>Available for pre-order</GradientText>
                        </Highlight>
                      </FadeTransition>
                      <FadeTransition state={state} delay={150}>
                        <Heading>Change Card</Heading>
                      </FadeTransition>
                      <FadeTransition state={state} delay={300}>
                        <Body>
                          With Change Card you can make your payments and ATM
                          withdrawals in any supported currency. The card is
                          universally accepted, even in stores that don’t accept
                          virtual currencies.
                        </Body>
                      </FadeTransition>
                      <FadeTransition state={state} delay={450}>
                        <a href="https://app.getchange.com">
                          <Button color="gradient">Order free card</Button>
                        </a>
                      </FadeTransition>
                    </div>
                  )}
                </Transition>
              </TextContainer>
            </Waypoint>
          </InnerContainer>
        </Container>
      </ScrollToTarget>
    );
  }
}

export default Card;
