import { useState } from "react"
import "./assets/scss/main.scss"
import StepBlock from "./components/StepBlock"
import MainBlock from './components/MainBlock'
const initialSteps = [
    {
        id: 1,
        info: "Your Info",
        page: {
            title: "Personal info",
            description: "Please provide your name, email address, and phone number."
        }
    }, {
        id: 2,
        info: "Select Plan",
        page: {
            title: "Select your plan",
            description: "You have the option of monthly or yearly billing.",
            content: {
                monthly: [
                    {
                        id: 1,
                        title: "Acrade",
                        img: "./src/assets/img/Shape.svg",
                        price: 9,
                        text: "mo"
                    },
                    {
                        id: 2,
                        title: "Advanced",
                        img: "./src/assets/img/advanced.svg",
                        price: 12,
                        text: "mo"
                    },
                    {
                        id: 3,
                        title: "Pro",
                        img: "./src/assets/img/pro.svg",
                        price: 15,
                        text: "mo"
                    }
                ],
                yearly: [
                    {
                        id: 1,
                        title: "Acrade",
                        img: "./src/assets/img/Shape.svg",
                        price: 90,
                        text: "yr"
                    },
                    {
                        id: 2,
                        title: "Advanced",
                        img: "./src/assets/img/advanced.svg",
                        price: 120,
                        text: "yr"
                    },
                    {
                        id: 3,
                        title: "Pro",
                        img: "./src/assets/img/pro.svg",
                        price: 150,
                        text: "yr"
                    }
                ]
            }
        }
    }
    , {
        id: 3,
        info: "Add-Ons",
        page: {
            title: "Pick add-ons",
            description: "Add-ons help enhance your gaming experience.",
            content: {
                monthly: [
                    {
                        id: 1,
                        title: "Online service",
                        context: "Access to multiplayer games",
                        price: 1,
                        text: "mo"
                    },
                    {
                        id: 2,
                        title: "Larger storage",
                        context: "Extra 1TB of cloud save",
                        price: 2,
                        text: "mo"
                    },
                    {
                        id: 3,
                        title: "Customizable profile",
                        context: "Custom theme on your profile",
                        price: 2,
                        text: "mo"
                    }
                ],
                yearly: [
                    {
                        id: 1,
                        title: "Online service",
                        context: "Access to multiplayer games",
                        price: 10,
                        text: "yr"
                    },
                    {
                        id: 2,
                        title: "Larger storage",
                        context: "Extra 1TB of cloud save",
                        price: 20,
                        text: "yr"
                    },
                    {
                        id: 3,
                        title: "Customizable profile",
                        context: "Custom theme on your profile",
                        price: 20,
                        text: "yr"
                    }
                ]
            }
        }
    },
    {
        id: 4,
        info: "Summary",
        page: {
            title: "Finishing up",
            description: "Double-check everything looks OK before confirming."
        }
    }
]

export default function App() {
    const [step, setStep] = useState(1);
    const [steps, setSteps] = useState(initialSteps)
    const [selectedPlan, setSelectedPlan] = useState(null)
    const [secondaryResult, setSecondaryResult] = useState([])
    const [tertiaryResult, setTertiaryResult] = useState([])
    const [selectedPickAddOns, setSelectedPickAddOns] = useState(null)
    return (
        <div className="container">
            <div className="form-container">
                <StepBlock steps={steps} step={step} />
                <MainBlock
                    selected={selectedPlan}
                    setSelected={setSelectedPlan}
                    setStep={setStep}
                    step={step}
                    steps={steps}
                    result={secondaryResult}
                    setResult={setSecondaryResult}
                    selectedPickAddOns={selectedPickAddOns}
                    setSelectedPickAddOns={setSelectedPickAddOns}
                    setTertiaryResult={setTertiaryResult}
                    tertiaryResult={tertiaryResult}
                />
            </div>
        </div>
    )
}