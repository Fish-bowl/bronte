import React, { Component } from 'react';
import { 
  Header, 
  Container,
  Segment,
  Divider,
  Grid, 
} from 'semantic-ui-react';
import Carousel from './Carousel'

class Home extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Header textAlign='center' as='h1'>Brontë</Header>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Carousel />
        </Grid.Row>
      </Grid>
    );
  }
}

export default Home;
