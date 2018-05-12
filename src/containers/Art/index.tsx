import * as React from 'react';
import styled from 'react-emotion';
import { Form, Select, Text } from 'react-form';
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

class Art extends React.Component<{galleries: any}, any> {
	private toastrRef: any

	constructor(props: any) {
		super(props);
		this.state = {
			galleriesData: []
		}
		this.toastrRef = React.createRef();
	}
  
	public handleSubmit = (data: any, event: any, formApi: any) => {
		firebase.database().ref('art/art' + Date.now()).set(data)
			.then(() => {
				this.toastrRef.current.success(`Successfully added new art`, `Success!`, {
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
						<FormHeader>Art</FormHeader>
						<form onSubmit={formApi.submitForm} id="art-form">
							<FieldWrapper id='art-title' text='Title'>
								<Text required={true} field="title" id="art-title" />
							</FieldWrapper>
							<FieldWrapper id='art-author' text='Author'>
								<Text required={true} field="author" id="art-author" />
							</FieldWrapper>
							<FieldWrapper id='art-price' text='Price'>
								<Text required={true}  field="price" id="art-price" />
							</FieldWrapper>
							<FieldWrapper id='art-photoUrl' text='Photo URL'>
								<Text required={true}  field="photoURL" id="art-photoUrl" />
							</FieldWrapper>
							<FieldWrapper id='art-gallery' text='Gallery'>
								<Select required={true} field="galleryID" options={this.props.galleries} id="art-gallery" />
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

export default Art;