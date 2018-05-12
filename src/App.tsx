import * as React from 'react';
import styled from 'react-emotion';
import './App.css';
import Art from './containers/Art';
import Exhibition from './containers/Exhibition';
import Gallery from './containers/Gallery';
// import exhibitionImage from './exhibition.jpg';
import galleryImage from './gallery.jpg';
import firebase from './services/firebase';

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

class App extends React.Component<any, {galleriesData: any}> {
  private firebaseRef: any
  private firebaseCallback: any

  constructor (props: any) {
    super(props);
    this.state = {
			galleriesData: []
		}
  }

	public componentDidMount() {
		this.firebaseRef = firebase.database().ref('/gallery');
		this.firebaseCallback = this.firebaseRef.on('value', (snap: any) => {
			const data = snap.val();
			
			const newGalleriesData:Array<{}> = [];
			Object.keys(data).forEach(galleryKey => {
				newGalleriesData.push({label: data[galleryKey].galleryName, value: galleryKey}) 
			})      
      this.setState({ galleriesData: newGalleriesData });
    });
  }
  
	public componentWillUnmount() {
    this.firebaseRef.off('value', this.firebaseCallback);
  }

  public render() {
    return (
      <div className="App">
        <AppWrapper image={galleryImage}>
          <Section>
            <Exhibition galleries={this.state.galleriesData}/>
          </Section>
          <Section>
            <Gallery />
          </Section>
          <Section>
            <Art galleries={this.state.galleriesData}/>
          </Section>
        </AppWrapper>
      </div>
    );
  }
}

export default App;
