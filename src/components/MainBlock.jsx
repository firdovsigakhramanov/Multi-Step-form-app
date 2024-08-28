import React, { useState } from 'react'
import YourInfo from '../pages/YourInfo'
import Header from '../layout/Header'
import Button from './Button'
import YourPlan from '../pages/YourPlan';
import PickAddOns from '../pages/PickAddOns';
import Finish from '../pages/Finish';
import Congratulations from '../pages/Congratulations';

function MainBlock({
    step,
    setStep,
    steps,
    selected,
    setSelected,
    result,
    setResult,
    selectedPickAddOns,
    setSelectedPickAddOns,
    setTertiaryResult,
    tertiaryResult
}) {

    const stepID = steps.find(item => item.id == step)
    const [tariff, setTariff] = useState("monthly")
    const [isChecked, setIsChecked] = useState(false)
    const [name, setName] = useState("firstCode");
    const [email, setEmail] = useState("firstCode@gmail.com");
    const [phone, setPhone] = useState("65464");

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let numberRegex = /^\d+$/;

    const emailVerify = email.match(regex)
    const phoneVerify = phone.match(numberRegex)


    function handlePrev() {
        if (step > 1) setStep(step - 1)
    }
    function handleNext() {
        if (step < 4) setStep(step + 1)
    }

    function primaryStep() {
        if (name !== "firstCode" && name !== "" && emailVerify && email !== "firstCode@gmail.com" && phoneVerify && phone !== "65464") {
            handleNext()
        }
    }

    function secondaryStep() {
        setResult(selected)
        if (selected) {
            handleNext()
        }
    }

    function tertiaryStep() {
        setTertiaryResult(selectedPickAddOns)
        if (selectedPickAddOns) {
            handleNext()
        }
    }

    function onSubmit(e) {
        e.preventDefault();
        if (step < 5) setStep(step + 1)
    }

    return (
        <div className='main-block' >
            <Header>{stepID?.page}</Header>
            {step == 1 &&
                <YourInfo
                    email={email}
                    setEmail={setEmail}
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                    emailVerify={emailVerify}
                    phoneVerify={phoneVerify}
                />}
            {step == 2 &&
                <YourPlan
                    step={stepID}
                    tariff={tariff}
                    setTariff={setTariff}
                    selected={selected}
                    setSelected={setSelected}
                    isChecked={isChecked}
                    setIsChecked={setIsChecked}
                />}
            {step == 3 &&
                <PickAddOns
                    step={stepID}
                    tariff={tariff}
                    selectedPickAddOns={selectedPickAddOns}
                    setSelectedPickAddOns={setSelectedPickAddOns}
                    tertiaryStep={tertiaryStep}
                />}
            {step == 4 && <Finish secondaryResult={result} tertiaryResult={tertiaryResult} tariff={tariff} />}
            {step == 5 && <Congratulations />}
            {
                step > 1 && step < 5 &&
                <Button onClick={handlePrev} className="btn btn-secondary">
                    Go Back
                </Button>
            }
            {
                step == 1 &&
                < Button onClick={primaryStep} className="btn btn-primary"  >
                    Next Step
                </ Button>
            }

            {
                step == 2 &&
                < Button onClick={secondaryStep} className="btn btn-primary"  >
                    Next Step
                </ Button>
            }

            {
                step == 3 &&
                < Button onClick={tertiaryStep} className="btn btn-primary"  >
                    Next Step
                </ Button>
            }

            {
                step == 4 &&
                < Button onClick={onSubmit} className="btn btn-tertiary" type="Submit" >
                    Confirm
                </ Button>
            }
        </div >
    )
}

export default MainBlock