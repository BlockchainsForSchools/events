import React, { Component, Fragment } from "react";

import EventPageAppBar from "./EventPageAppBar";
import EventPageImageCarousel from "./EventPageImageCarousel";
import EventPageHeader from "./EventPageHeader";

class EventPage extends Component {
  render() {
    return (
      <Fragment>
        <EventPageAppBar />
        <EventPageImageCarousel />
        <EventPageHeader />
      </Fragment>
    );
  }
}

export default EventPage;
