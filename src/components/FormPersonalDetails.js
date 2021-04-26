import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                  <AppBar title="Enter Guarantors Details" /> 
                  <TextField 
                  hintText="Enter Surname"
                  floatingLabelText="Enter Surname"
                  onChange={handleChange('guarantorsSurnamen')}
                  defaultValue={values.guarantorsSurname} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Other Names"
                  floatingLabelText="Other Names"
                  onChange={handleChange('guarantorsOtherNames')}
                  defaultValue={values.guarantorsOtherNames} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Gender"
                  floatingLabelText="Gender"
                  onChange={handleChange('guarantorsGender')}
                  defaultValue={values.guarantorsGender} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Relation to Applicant"
                  floatingLabelText="Relation to Applicant"
                  onChange={handleChange('relationToApplicant')}
                  defaultValue={values.relationToApplicant} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Date of Birth"
                  floatingLabelText="Date of Birth"
                  onChange={handleChange('guarantorsDateOfBirth')}
                  defaultValue={values.guarantorsDateOfBirth} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Residential Address"
                  floatingLabelText="Residential Address"
                  onChange={handleChange('guarantorsResidentialAddress')}
                  defaultValue={values.guarantorsResidentialAddress} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Landmark"
                  floatingLabelText="Landmark"
                  onChange={handleChange('guarantorsLandmark')}
                  defaultValue={values.guarantorsLandmark} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Occupation"
                  floatingLabelText="Occupation"
                  onChange={handleChange('guarantorsOccupation')}
                  defaultValue={values.guarantorsOccupation} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Institution"
                  floatingLabelText="Institution"
                  onChange={handleChange('guarantorsInstitution')}
                  defaultValue={values.guarantorsInstitution} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Office Address"
                  floatingLabelText="Office Address"
                  onChange={handleChange('guarantorsOfficeAddress')}
                  defaultValue={values.guarantorsOfficeAddress} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Office Telephone Number(s) Your City"
                  floatingLabelText="Office Telephone Number(s)"
                  onChange={handleChange('guarantorsOfficeNumbers')}
                  defaultValue={values.guarantorsOfficeNumbers} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Email"
                  floatingLabelText="Email"
                  onChange={handleChange('guarantorsEmail')}
                  defaultValue={values.guarantorsEmail} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Telephone Number(s)"
                  floatingLabelText="Telephone Number(s)"
                  onChange={handleChange('guarantorsTelephoneNumbers')}
                  defaultValue={values.guarantorsTelephoneNumbers} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Type of ID"
                  floatingLabelText="Type"
                  onChange={handleChange('guarantorsIdType')}
                  defaultValue={values.guarantorsIdType} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Name of Place of Worship"
                  floatingLabelText="Place of Worship"
                  onChange={handleChange('guarantorsPlaceOfWorshipName')}
                  defaultValue={values.guarantorsPlaceOfWorshipName} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Location of Place of Worship"
                  floatingLabelText="Location"
                  onChange={handleChange('guarantorsPlaceOfWorshipLocation')}
                  defaultValue={values.guarantorsPlaceOfWorshipLocation} 
                  /> 
                  <br/>
                  <h2>Guarantors Declaration</h2>
                  <TextField  
                  hintText="Enter Name"
                  floatingLabelText="Enter NameCity"
                  onChange={handleChange('guarantorsDeclaration')}
                  defaultValue={values.guarantorsDeclaration} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Signature"
                  floatingLabelText="Signature"
                  onChange={handleChange('guarantorsDeclarationSignature')}
                  defaultValue={values.guarantorsDeclarationSignature} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Date of Signage"
                  floatingLabelText="Date of Signage"
                  onChange={handleChange('guarantorsDeclarationDate')}
                  defaultValue={values.guarantorsDeclarationDate} 
                  /> 
                  
                  <br/>
                  <RaisedButton 
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                  />
                  <RaisedButton 
                    label="back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                  />
                  
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin:15
    }
}

export default FormPersonalDetails
