// components/SignInSteps.js
import React from 'react';
import LoginContent from "./LoginContent";
import FirstProcessContent from "./FirstProcessContent";
import SecondProcessContext from "./SecondProcessContext";
import ThirdProcessContent from "./ThirdProcessContent";
import FourthProcessContent from "./FourthProcessContent";

const SignInSteps = ({ currentStep, nextStep, prevStep, onLogin, closeModal }) => {
    const steps = [
        <LoginContent onNext={nextStep} />,
        <FirstProcessContent onNext={nextStep} onPrev={prevStep} />,
        <SecondProcessContext onNext={nextStep} onPrev={prevStep} />,
        <ThirdProcessContent onNext={nextStep} onPrev={prevStep} />,
        <FourthProcessContent onPrev={prevStep} onClose={closeModal} onLogin={onLogin} />
    ];

    return steps[currentStep - 1];
};

export default SignInSteps;
