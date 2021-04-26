import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        // Process Form //
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { 
        surName,
        otherNames,
        dateOfBirth,
        gender,
        maritalStatus,
        spouseName,
        postalAddress,
        residentialAddress,
        gpsAddressForHome,
        gpsAddressForWork,
        emergencyContactPersonName,
        emergencyContactPersonNumber,
        typeOfIdentification,
        idNumber,
        selfEmployed,
        nameOfBusiness,
        industry,
        natureOfBusiness,
        placeOfWorshipName,
        placeOfWorshipLocation,
        areYouCurrentlyServicingALoan,
        ifYesWithWhichCompany,
        loanAmountTaken,
        currentBalance,
        loanAmountRequested,
        tenure,
        rate,
        customerSignature,
        rtp,
        signatureVerificationName,
        signatureVerificationSignature,
        signatureVerificationdate,
        guarantorsSurname,
        guarantorsOtherNames,
        guarantorsGender,
        relationToApplicant,
        guarantorsDateOfBirth,
        guarantorsResidentialAddress,
        guarantorsLandmark,
        guarantorsOccupation,
        guarantorsInstitution,
        guarantorsPosition,
        guarantorsOfficeAddress,
        guarantorsOfficeNumbers,
        guarantorsEmail,
        guarantorsTelephoneNumbers,
        guarantorsIdType,
        guarantorsIdNumber,
        guarantorsPlaceOfWorshipName,
        guarantorsPlaceOfWorshipLocation,
        guarantorsDeclaration,
        guarantorsDeclarationSignature,
        guarantorsDeclarationDate, } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                  <AppBar title="Confirm User Data" /> 
                  <List>
                      <ListItem 
                      primaryText="Surname"
                      secondaryText={ surName }
                      />
                      <ListItem 
                      primaryText="Other Names"
                      secondaryText={ otherNames }
                      />
                      <ListItem 
                      primaryText="Date of Birth"
                      secondaryText={ dateOfBirth }
                      />
                      <ListItem 
                      primaryText="Gender"
                      secondaryText={ gender }
                      />
                      <ListItem 
                      primaryText="Marital Status"
                      secondaryText={ maritalStatus }
                      />
                      <ListItem 
                      primaryText="Name of Spouse"
                      secondaryText={ spouseName }
                      />
                      <ListItem 
                      primaryText="Postal Address"
                      secondaryText={ postalAddress }
                      />
                      <ListItem 
                      primaryText="Residential Address"
                      secondaryText={ residentialAddress }
                      />
                      <ListItem 
                      primaryText="Residential GPS Address"
                      secondaryText={ gpsAddressForHome }
                      />
                      <ListItem 
                      primaryText="Workplace GPS Address"
                      secondaryText={ gpsAddressForWork }
                      />
                      <ListItem 
                      primaryText="Emergency Contact Person's Name"
                      secondaryText={ emergencyContactPersonName }
                      />
                      <ListItem 
                      primaryText="Emergency Contact Person's Telephone Number(s)"
                      secondaryText={ emergencyContactPersonNumber }
                      />
                      <ListItem 
                      primaryText="Type of ID"
                      secondaryText={ typeOfIdentification }
                      />
                      <ListItem 
                      primaryText="ID Number"
                      secondaryText={ idNumber }
                      />
                      <ListItem 
                      primaryText="Employment Status"
                      secondaryText={ selfEmployed }
                      />
                      <ListItem 
                      primaryText="Name of Business"
                      secondaryText={ nameOfBusiness }
                      />
                      <ListItem 
                      primaryText="Industry"
                      secondaryText={ industry }
                      />
                      <ListItem 
                      primaryText="Nature of Business"
                      secondaryText={ natureOfBusiness }
                      />
                      <ListItem 
                      primaryText="Name of Place of Worship"
                      secondaryText={ placeOfWorshipName }
                      />
                      <ListItem 
                      primaryText="Location of Place of Worship"
                      secondaryText={ placeOfWorshipLocation }
                      />
                      <p>Loan History</p>
                      <ListItem 
                      primaryText="Are You Currently Servicing a Loan"
                      secondaryText={ areYouCurrentlyServicingALoan }
                      />
                      <ListItem 
                      primaryText="If Yes with Which Company"
                      secondaryText={ ifYesWithWhichCompany }
                      />
                      <ListItem 
                      primaryText="Loan Amount Taken"
                      secondaryText={ loanAmountTaken }
                      />
                      <ListItem 
                      primaryText="Current Balance"
                      secondaryText={ currentBalance }
                      />
                      <ListItem 
                      primaryText="Loan Amount Requested"
                      secondaryText={ loanAmountRequested }
                      />
                      <ListItem 
                      primaryText="Tenure"
                      secondaryText={ tenure }
                      />
                      <ListItem 
                      primaryText="Rate"
                      secondaryText={ rate }
                      />
                      <ListItem 
                      primaryText="Signature"
                      secondaryText={ customerSignature }
                      />
                      <ListItem 
                      primaryText="RTP"
                      secondaryText={ rtp }
                      />
                      <ListItem 
                      primaryText="Verification Name"
                      secondaryText={ signatureVerificationName }
                      />
                      <ListItem 
                      primaryText="Verification Signature"
                      secondaryText={ signatureVerificationSignature }
                      />
                      <ListItem 
                      primaryText="Verification Date"
                      secondaryText={ signatureVerificationdate }
                      />
                      <hr/>
                      <br/>
                      <p>Guarantors Details</p>
                      <ListItem 
                      primaryText="Surname"
                      secondaryText={ guarantorsSurname }
                      />
                      <ListItem 
                      primaryText="Other Names"
                      secondaryText={ guarantorsOtherNames }
                      />
                      <ListItem 
                      primaryText="Gender"
                      secondaryText={ guarantorsGender }
                      />
                      <ListItem 
                      primaryText="Relation to Applicant"
                      secondaryText={ relationToApplicant }
                      />
                      <ListItem 
                      primaryText="Date Of Birth"
                      secondaryText={ guarantorsDateOfBirth }
                      />
                      <ListItem 
                      primaryText="Residential Address"
                      secondaryText={ guarantorsResidentialAddress }
                      />
                      <ListItem 
                      primaryText="Residential Landmark"
                      secondaryText={ guarantorsLandmark }
                      />
                      <ListItem 
                      primaryText="Marital Status"
                      secondaryText={ maritalStatus }
                      />
                      <ListItem 
                      primaryText="Occupation"
                      secondaryText={ guarantorsOccupation }
                      />
                      <ListItem 
                      primaryText="Institution"
                      secondaryText={ guarantorsInstitution }
                      />
                      <ListItem 
                      primaryText="Position"
                      secondaryText={ guarantorsPosition }
                      />
                      <ListItem 
                      primaryText="Office Address"
                      secondaryText={ guarantorsOfficeAddress }
                      />
                      <ListItem 
                      primaryText="Telephone Number(s)"
                      secondaryText={ guarantorsOfficeNumbers }
                      />
                      <ListItem 
                      primaryText="Email"
                      secondaryText={ guarantorsEmail }
                      />
                      <ListItem 
                      primaryText="Telephone Number(s)"
                      secondaryText={ guarantorsTelephoneNumbers }
                      />
                      <ListItem 
                      primaryText="ID Type"
                      secondaryText={ guarantorsIdType }
                      />
                      <ListItem 
                      primaryText="ID Number"
                      secondaryText={ guarantorsIdNumber }
                      />
                      <ListItem 
                      primaryText="Place of Worship"
                      secondaryText={ guarantorsPlaceOfWorshipName }
                      />
                      <ListItem 
                      primaryText="Location"
                      secondaryText={ guarantorsPlaceOfWorshipLocation }
                      />
                      <ListItem 
                      primaryText="Guarantors Declaration"
                      secondaryText={ guarantorsDeclaration }
                      />
                      <ListItem 
                      primaryText="Guarantors Declaration"
                      secondaryText={ guarantorsDeclaration }
                      />
                      <ListItem 
                      primaryText="Signature"
                      secondaryText={ guarantorsDeclarationSignature }
                      />
                      <ListItem 
                      primaryText="Date"
                      secondaryText={ guarantorsDeclarationDate }
                      />
                  </List>
                  <br/>
                  <RaisedButton 
                    label="Confirm & Continue"
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

export default FormUserDetails
