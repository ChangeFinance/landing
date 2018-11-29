// @flow

import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';
import About from './About';

import Careers from './Careers';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import AppPlaceholder from './AppPlaceholder'
import NotifyMeSuccess from './NotifyMeSuccess';
import PrivacyPolicy from './PrivacyPolicy';
import { SecurityTokenOffering } from './SecurityTokenOffering';

import ScrollToTop from './ScrollToTop';
import TermsAndConditions from './TermsAndConditions';

import variables from '../ui/variables';
import { LegalDefinitions } from './LegalDefinitions';
import OfficeRent from './OfficeRent';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  background: ${variables.colorWhite};
`;

type Props = {
  location: Object,
};

type State = {
  hasScrolled: boolean,
};

type WaypointProps = {};

class Landing extends React.Component<Props, State> {
  state = {
    hasScrolled: false,
  };

  componentDidMount() {
    document.title = 'Change – Your Blockchain-based Mobile Finance App';
  }

  handleWaypointEnter = (props: WaypointProps) => {
    this.setState({ hasScrolled: false });
  };

  handleWaypointLeave = (props: WaypointProps) => {
    this.setState({ hasScrolled: true });
  };

  handleWaypointPositionChange = (props: WaypointProps) => {
    if (window.pageYOffset > 20) {
      this.setState({ hasScrolled: true });
    }
  };

  render() {
    return (
      <ScrollToTop>
        <Container>
          <Waypoint
            onEnter={this.handleWaypointEnter}
            onLeave={this.handleWaypointLeave}
            onPositionChange={this.handleWaypointPositionChange}
          />

          <Header withBackground={this.state.hasScrolled} />

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/careers" component={Careers} />
            <Route path="/legal/terms" component={TermsAndConditions} />
            <Route path="/legal/privacy-policy" component={PrivacyPolicy} />
            <Route path="/legal/definitions" component={LegalDefinitions} />
            <Route path="/notify-me-success" component={NotifyMeSuccess} />
            <Route path="/security-token-offering" component={SecurityTokenOffering} />
            <Route path="/app" component={AppPlaceholder} />
            <Route path="/office-rent" component={OfficeRent} />
            <Route path="/" component={Home} />
          </Switch>

          <Footer />
        </Container>
      </ScrollToTop>
    );
  }
}

export default withRouter(Landing);
