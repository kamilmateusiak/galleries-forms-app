import * as React from 'react';
import styled from 'react-emotion';
import { Form, Select, Text } from 'react-form';
import { ToastContainer, ToastMessageAnimated } from "react-toastr";
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Button from '../../components/Button';
import DatePicker from '../../components/Datepicker';
import FieldWrapper from '../../components/FieldWrapper';
// import * as actionCreators from '../../redux/actionCreators';
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

class Exhibition extends React.Component<{galleries: any}, any> {
	private toastrRef: any

	constructor(props: any) {
		super(props);
		this.toastrRef = React.createRef();
	}

	public handleSubmit = (data: any, event: any, formApi: any) => {
		firebase.database().ref('exhibition/exhibition' + Date.now()).set(data)
			.then(() => {
				this.toastrRef.current.success(`Successfully added new exhibition`, `Success!`, {
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
						<FormHeader>Exhibition</FormHeader>
						<form onSubmit={formApi.submitForm} id="exhibition-form">
							<FieldWrapper id='exhibition-title' text='Title'>
								<Text required={true}  field="title" id="exhibition-title" />
							</FieldWrapper>
							<FieldWrapper id='exhibition-description' text='Description'>
								<Text required={true}  field="description" id="exhibition-description" />
							</FieldWrapper>
							<FieldWrapper id='exhibition-author' text='Author'>
								<Text required={true}  field="author" id="exhibition-author" />
							</FieldWrapper>
							<FieldWrapper id='exhibition-cityPart' text='City part'>
								<Text required={true}  field="cityPart" id="exhibition-cityPart" />
							</FieldWrapper>
							<FieldWrapper id='exhibition-opening_date' text='Opening Date'>
								<DatePicker field='openingDate' id='exhibition-opening_date'/>
							</FieldWrapper>
							<FieldWrapper id='exhibition-closing_date' text='Closing Date'>
								<DatePicker field='closingDate' id='exhibition-closing_date'/>
							</FieldWrapper>
							<FieldWrapper id='exhibition-photourl' text='Photo URL'>
								<Text required={true}  field="photoURL" id="exhibition-photourl" />
							</FieldWrapper>
							<FieldWrapper id='exhibition-type' text='Type'>
								<Text required={true}  field="type" id="exhibition-type" />
							</FieldWrapper>
							<FieldWrapper id='exhibition-gallery' text='Gallery'>
								<Select required={true} field="galleryID" options={this.props.galleries} id="exhibition-gallery" />
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

export default Exhibition;