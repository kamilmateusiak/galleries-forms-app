import * as React from 'react';
import styled from 'react-emotion';
import { Form, Text } from 'react-form';
import { ToastContainer, ToastMessageAnimated } from "react-toastr";
import Button from '../../components/Button';
import FieldWrapper from '../../components/FieldWrapper';
import firebase from '../../services/firebase';

const FormWrapper = styled('div')`
	max-width: 400px;
	margin: auto;
	border: 1px solid #0A0A66;
	border-radius: 3px;
	padding: 20px;
	box-shadow: 0 0 10px 0px #0A0A66;
	background-color: #fff;
`;

const FormHeader = styled('header')`
	font-size: 1.5rem;
	text-align: left;
`;

class Gallery extends React.Component<any, any> {
	private toastrRef: any

	constructor(props: any) {
		super(props);
		this.state = {
			galleriesData: []
		}
		this.toastrRef = React.createRef();
	}
  
	public handleSubmit = (data: any, event: any, formApi: any) => {
		firebase.database().ref('gallery/galeria' + Date.now()).set(data)
			.then(() => {
				this.toastrRef.current.success(`Successfully added new gallery`, `Success!`, {
					hideAnimation: 'animated bounceOutUp',
					showAnimation: 'animated bounceInDown',
					timeOut: 2000,
				})
				formApi.resetAll();
			})
	}

  public render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				{formApi => (
					<FormWrapper>
						<ToastContainer
							ref={this.toastrRef}
							toastMessageFactory={React.createFactory(ToastMessageAnimated)}
							className="toast-top-right"
						/>
						<FormHeader>Gallery</FormHeader>
						<form onSubmit={formApi.submitForm} id="gallery-form">
							<FieldWrapper id='gallery-name' text='Gallery Name'>
								<Text required={true} field="galleryName" id="gallery-name" />
							</FieldWrapper>
							<FieldWrapper id='gallery-cityPart' text='City part'>
								<Text required={true} field="cityPart" id="gallery-cityPart" />
							</FieldWrapper>
							<FieldWrapper id='gallery-description' text='Description'>
								<Text required={true}  field="description" id="gallery-description" />
							</FieldWrapper>
							<FieldWrapper id='gallery-likes' text='Likes'>
								<Text required={true} type='number' field="likes" id="gallery-likes" />
							</FieldWrapper>
							<FieldWrapper id='gallery-openingHrs' text='Opening hours'>
								<Text required={true}  field="openingHrs" id="gallery-openingHrs" />
							</FieldWrapper>
							<FieldWrapper id='gallery-location' text='Location'>
								<Text required={true}  field="location" id="gallery-location" />
							</FieldWrapper>
							<FieldWrapper id='gallery-photoURL' text='Photo URL'>
								<Text required={true}  field="photoURL" id="gallery-photoURL" />
							</FieldWrapper>
							<FieldWrapper id='gallery-ticketPrices' text='Ticket prices'>
								<Text required={true}  field="ticketPrices" id="gallery-ticketPrices" />
							</FieldWrapper>
							<FieldWrapper id='gallery-type' text='Type'>
								<Text required={true}  field="type" id="gallery-type" />
							</FieldWrapper>
							<FieldWrapper id='gallery-website' text='Website'>
								<Text required={true}  field="website" id="gallery-website" />
							</FieldWrapper>
							<Button buttonType="submit">
								Submit
							</Button>
						</form>
					</FormWrapper>
				)}
			</Form>
		);
  }
}

export default Gallery;