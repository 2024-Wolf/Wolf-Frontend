// components/SignInSteps.js
import React, { useState } from 'react';
import LoginContent from "./LoginContent";
import FirstProcessContent from "./FirstProcessContent";
import SecondProcessContext from "./SecondProcessContext";
import ThirdProcessContent from "./ThirdProcessContent";
import FourthProcessContent from "./FourthProcessContent";

const SignInSteps = ({ redirectUrl, currentStep, nextStep, prevStep, onLogin, closeModal, signupInfo, handleInputChange, handleInputReset }) => {

    const steps = [
        <LoginContent redirectUrl={redirectUrl} />,
        <FirstProcessContent onNext={nextStep} onPrev={prevStep} handleInputChange={handleInputChange} handleInputReset={handleInputReset} />,
        <SecondProcessContext onNext={nextStep} onPrev={prevStep} handleInputChange={handleInputChange} handleInputReset={handleInputReset} />,
        <ThirdProcessContent onNext={nextStep} onPrev={prevStep} handleInputChange={handleInputChange} handleInputReset={handleInputReset} />,
        <FourthProcessContent onPrev={prevStep} onClose={closeModal} signupInfo={signupInfo} handleInputChange={handleInputChange} handleInputReset={handleInputReset} onLogin={onLogin} />
    ];

    return steps[currentStep - 1];
};

export default SignInSteps;
