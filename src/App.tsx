import * as React from 'react';
import styled from 'react-emotion';
import './App.css';
import Exhibition from './containers/Exhibition';
import Gallery from './containers/Gallery';
// import exhibitionImage from './exhibition.jpg';
import galleryImage from './gallery.jpg';

interface InterfaceSectionProps {
  image: string
}

const AppWrapper = styled<InterfaceSectionProps, 'div'>('div')`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Section = styled('section')`
  padding: 50px 20px;
`;

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <AppWrapper image={galleryImage}>
          <Section>
            <Exhibition />
          </Section>
          <Section>
            <Gallery />
          </Section>
        </AppWrapper>
      </div>
    );
  }
}

export default App;
