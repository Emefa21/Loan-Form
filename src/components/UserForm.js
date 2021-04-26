import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';


export class UserForm extends Component {
    state = {
        step: 1,
        surName: '',
        otherNames: '',
        dateOfBirth: '',
        gender: '',
        maritalStatus: '',
        spouseName: '',
        postalAddress: '',
        residentialAddress: '',
        gpsAddressForHome: '',
        gpsAddressForWork: '',
        emergencyContactPersonName: '',
        emergencyContactPersonNumber: '',
        typeOfIdentification: '',
        idNumber: '',
        selfEmployed: '',
        nameOfBusiness: '',
        industry: '',
        natureOfBusiness: '',
        placeOfWorshipName: '',
        placeOfWorshipLocation: '',
        areYouCurrentlyServicingALoan: '',
        ifYesWithWhichCompany: '',
        loanAmountTaken: '',
        currentBalance: '',
        loanAmountRequested: '',
        tenure: '',
        rate: '',
        customerSignature: '',
        rtp: '',
        signatureVerificationName: '',
        signatureVerificationSignature: '',
        signatureVerificationdate: '',
        guarantorsSurname: '',
        guarantorsOtherNames: '',
        guarantorsGender: '',
        relationToApplicant: '',
        guarantorsDateOfBirth: '',
        guarantorsResidentialAddress: '',
        guarantorsLandmark: '',
        guarantorsOccupation: '',
        guarantorsInstitution: '',
        guarantorsPosition: '',
        guarantorsOfficeAddress: '',
        guarantorsOfficeNumbers: '',
        guarantorsEmail: '',
        guarantorsTelephoneNumbers: '',
        guarantorsIdType: '',
        guarantorsIdNumber: '',
        guarantorsPlaceOfWorshipName: '',
        guarantorsPlaceOfWorshipLocation: '',
        guarantorsDeclaration: '',
        guarantorsDeclarationSignature: '',
        guarantorsDeclarationDate: '',
    }

    // Proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { 
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
        guarantorsDeclarationDate,
        } = this.state;

        const values = { 
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
        guarantorsDeclarationDate,
        }
        
        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                )
            case 2:
                return (
                    <FormPersonalDetails 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                );
            case 3:
                return (
                 <Confirm 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
                    );
            case 4:
                return <Success />
        }
    }
}

export default UserForm

