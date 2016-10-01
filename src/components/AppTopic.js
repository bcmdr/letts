import React, { Component } from 'react';
import { PageHeader, ListGroup, ListGroupItem, Grid, PanelGroup, Panel } from 'react-bootstrap';

class AppTopic extends Component {
  render() {
    let question1 = (
      <div>
        <span>Question Title</span>
        <span className="pull-right">Status</span>
      </div>
    );
    return (
      <div>
        <PageHeader>Topic Title</PageHeader>
        <PanelGroup defaultActiveKey="1" accordion>
          <Panel header={question1} eventKey="1">
            <ListGroup>
              <ListGroupItem>
                Suggestion 1
              </ListGroupItem>
            </ListGroup>
          </Panel>
        </PanelGroup>
      </div>
    );
  }
}

export default AppTopic;
