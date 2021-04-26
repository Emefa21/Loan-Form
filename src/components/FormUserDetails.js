import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                  <AppBar title="Enter Your Bio/Details" /> 
                  <TextField 
                  hintText="Enter Your Surname"
                  floatingLabelText="Surname"
                  onChange={handleChange('surName')}
                  defaultValue={values.surtName} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Other Name(s)"
                  floatingLabelText="Other Name(s)"
                  onChange={handleChange('otherNames')}
                  defaultValue={values.otherNames} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Date of Birth"
                  floatingLabelText="Date of Birth"
                  onChange={handleChange('dateOfBirth')}
                  defaultValue={values.dateOfBirth} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Gender"
                  floatingLabelText="Gender"
                  onChange={handleChange('gender')}
                  defaultValue={values.gender} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Marital Status (Single, Married, Separated, Divorced)"
                  floatingLabelText="(Single, Married, Separated, Divorced)"
                  onChange={handleChange('maritalStatus')}
                  defaultValue={values.maritalStatus} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Spouse Name (if married)"
                  floatingLabelText="Spouse Name(if married)"
                  onChange={handleChange('spouseName')}
                  defaultValue={values.spouseName} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Postal Address"
                  floatingLabelText="Postal Address"
                  onChange={handleChange('postalAddress')}
                  defaultValue={values.postalAddress} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Residential Address"
                  floatingLabelText="Residential Address"
                  onChange={handleChange('residentialAddress')}
                  defaultValue={values.residentialAddress} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Home GPS Address"
                  floatingLabelText="Home GPS Address"
                  onChange={handleChange('gpsAddressForHome')}
                  defaultValue={values.gpsAddressForHome} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Work GPS Address"
                  floatingLabelText="Work GPS Address"
                  onChange={handleChange('gpsAddressForWork')}
                  defaultValue={values.gpsAddressForWork} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Emergency Contact Person's Name"
                  floatingLabelText="Emergency Contact Person Name"
                  onChange={handleChange('emergencyContactPersonName')}
                  defaultValue={values.emergencyContactPersonName} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Emergency Contact Person's Number"
                  floatingLabelText="Emergency Contact Person's Number"
                  onChange={handleChange('emergencyContactPersonNumber')}
                  defaultValue={values.emergencyContactPersonNumber} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Type of Identification"
                  floatingLabelText="Type of Identification"
                  onChange={handleChange('typeOfIdentification')}
                  defaultValue={values.typeOfIdentification} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your ID Number"
                  floatingLabelText="ID Number"
                  onChange={handleChange('idNumber')}
                  defaultValue={values.idNumber} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Employment History (Self Employed Yes/No)"
                  floatingLabelText="Self Employed (Yes/No)"
                  onChange={handleChange('selfEmployed')}
                  defaultValue={values.selfEmployed} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Business Name"
                  floatingLabelText="Business Name"
                  onChange={handleChange('nameOfBusiness')}
                  defaultValue={values.nameOfBusiness} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Business Industry"
                  floatingLabelText="Business Industry"
                  onChange={handleChange('industry')}
                  defaultValue={values.industry} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter the Nature of Your Business"
                  floatingLabelText="Nature of Business"
                  onChange={handleChange('natureOfBusiness')}
                  defaultValue={values.natureOfBusiness} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter the Name of Your Place of Worship"
                  floatingLabelText="Name of Place of Worship"
                  onChange={handleChange('placeOfWorshipName')}
                  defaultValue={values.placeOfWorshipName} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter the Location of Your Place of Worship"
                  floatingLabelText="Location of Place of Worship"
                  onChange={handleChange('placeOfWorshipLocation')}
                  defaultValue={values.placeOfWorshipLocation} 
                  /> 
                  <br/>
                  <h2>Borrowing History</h2>
                  <TextField 
                  hintText="Are You Currently Servicing A Loan (Yes/No)"
                  floatingLabelText="Are You Currently Servicing A Loan (Yes/No)"
                  onChange={handleChange('areYouCurrentlyServicingALoan')}
                  defaultValue={values.areYouCurrentlyServicingALoan} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="If Yes, Enter Company Name"
                  floatingLabelText="If Yes, Enter Company Name"
                  onChange={handleChange('ifYesWithWhichCompany')}
                  defaultValue={values.ifYesWithWhichCompany} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Loan Amount Taken"
                  floatingLabelText="Loan Amount Taken"
                  onChange={handleChange('loanAmountTaken')}
                  defaultValue={values.loanAmountTaken} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Current Balance"
                  floatingLabelText="Current Balance"
                  onChange={handleChange('currentBalance')}
                  defaultValue={values.currentBalance} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Tenure"
                  floatingLabelText="Tenure"
                  onChange={handleChange('tenure')}
                  defaultValue={values.tenure} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Rate"
                  floatingLabelText="Rate"
                  onChange={handleChange('rate')}
                  defaultValue={values.rate} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Signature"
                  floatingLabelText="Signature"
                  onChange={handleChange('customerSignature')}
                  defaultValue={values.customerSignature} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="RTP"
                  floatingLabelText="RTP"
                  onChange={handleChange('rtp')}
                  defaultValue={values.rtp} 
                  /> 
                  <br/>
                  <h2>Signature Verification</h2>
                  <TextField 
                  hintText="Verify Your Name"
                  floatingLabelText="Verify Your Name"
                  onChange={handleChange('signatureVerificationName')}
                  defaultValue={values.signatureVerificationName} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Verify Your Signature"
                  floatingLabelText="Verify Your Signature"
                  onChange={handleChange('signatureVerificationSignature')}
                  defaultValue={values.signatureVerificationSignature} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Your Last Name"
                  floatingLabelText="Last Name"
                  onChange={handleChange('lastName')}
                  defaultValue={values.lastName} 
                  /> 
                  <br/>
                  <TextField 
                  hintText="Enter Verification Date"
                  floatingLabelText="Verification Date"
                  onChange={handleChange('signatureVerificationdate')}
                  defaultValue={values.signatureVerificationdate} 
                  /> 
                  <br/>
                  <RaisedButton 
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
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

export default FormUserDetails
