import React from 'react';

import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const createEventFormConfirmation = (props) => {
  const continueToNextStep = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const goBackToPreviousStep = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values } = props;
  const { name, url, startTime, endTime, location, tags, imageUrl } = values;

  return (
    <ThemeProvider>
      <List>
        <ListItem>
          <ListItemText>
            <ListItemText primary="Event Name" secondary={name} />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <ListItemText primary="Event URL" secondary={url} />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <ListItemText primary="Start time" secondary={startTime} />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <ListItemText primary="End time" secondary={endTime} />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <ListItemText primary="Location" secondary={location} />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <ListItemText primary="tags" secondary={tags} />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <ListItemText primary="Image URL" secondary={imageUrl} />
          </ListItemText>
        </ListItem>
      </List>
      <br />

      <Button
        color="secondary"
        variant="contained"
        onClick={goBackToPreviousStep}
      >
        Back
      </Button>

      <Button color="primary" variant="contained" onClick={continueToNextStep}>
        Confirm & Continue
      </Button>
    </ThemeProvider>
  );
};

export default createEventFormConfirmation;
