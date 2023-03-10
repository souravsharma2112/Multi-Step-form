import React, { useState } from 'react'
import Addone from './Addone';
import Landing2 from './Landing2';
import Services from './Services';
import Summary from './Summary';
import Thankyou from './Thankyou';

export default function Landing() {
    const [stepNo, setStepNo] = useState(0);
    const [formDetails , setFormDetails] = useState({
        name : "",
        email : "",
        phoneNo : ""
    })
    const nextStep = () => {
        setStepNo(stepNo + 1);
    }

    let index1 = document.getElementById("index1");
    let index2 = document.getElementById("index2");
    let index3 = document.getElementById("index3");
    let index4 = document.getElementById("index4");
    let backBtn = document.getElementById("backBtn")
    let nextBtn = document.getElementById("nextBtn");
    let confirmBtn = document.getElementById("confirmBtn");
    const backStep = () => {
        nextBtn.classList.remove("hidden");
        confirmBtn.classList.add("hidden");

        if (stepNo === 1) {
            index1.classList.add("active")
            index2.classList.remove("active")
            index3.classList.remove("active")
            index4.classList.remove("active")
            backBtn.style.visibility = "hidden";
        }
        setStepNo(stepNo - 1);
    }
    const pageDisplay = () => {
        if (stepNo !== 0) {
            backBtn.style.visibility = "visible";
            if (stepNo === 4) {
                backBtn.style.visibility = "hidden";
            }
            if (stepNo === 3) {
                nextBtn.classList.add("hidden");
                confirmBtn.classList.remove("hidden");
            }
        }

        if (stepNo === 0) {

            return <Landing2 setFormDetails = {setFormDetails}/>
        }
        if (stepNo === 1) {
            index1.classList.remove("active")
            index2.classList.add("active")
            index3.classList.remove("active")
            index4.classList.remove("active")
            return <Services />
        }
        if (stepNo === 2) {
            index1.classList.remove("active")
            index2.classList.remove("active")
            index3.classList.add("active")
            index4.classList.remove("active")
            return <Addone />
        }
        if (stepNo === 3) {
            index1.classList.remove("active")
            index2.classList.remove("active")
            index3.classList.remove("active")
            index4.classList.add("active")
            return <Summary />
        }
        if (stepNo === 4) {
            return <Thankyou />
        }
        else {
            backBtn.style.visibility = "hidden";
        }
    }

    const stepBtn1 = () => {
        setStepNo(0)
        nextBtn.classList.remove("hidden");
        confirmBtn.classList.add("hidden");
        index1.classList.add("active")
        index2.classList.remove("active")
        index3.classList.remove("active")
        index4.classList.remove("active")
        backBtn.style.visibility = "hidden";
    }
    const stepBtn2 = () => {
        setStepNo(1)
        index1.classList.remove("active")
        index2.classList.add("active")
        index3.classList.remove("active")
        index4.classList.remove("active")
    }
    const stepBtn3 = () => {
        setStepNo(2)
        index1.classList.remove("active")
        index2.classList.remove("active")
        index3.classList.add("active")
        index4.classList.remove("active")
    }
    const stepBtn4 = () => {
        setStepNo(3)
        index1.classList.remove("active")
        index2.classList.remove("active")
        index3.classList.remove("active")
        index4.classList.add("active")
    }
    const cnfBtn = () => {
        confirmBtn.classList.add("hidden");
        setStepNo(4)
    }
    console.log(formDetails.name);
    console.log(formDetails.email);
    console.log(formDetails.phoneNo);
    return (
        <>
            <main>
                <div className="container">
                    <div className="left_container">
                        <div id='stepChild' className="step_box">
                            <div onClick={stepBtn1} className="steps">
                                <div className="steps_number flex">
                                    <div id='index1' className="index active">1</div>
                                </div>
                                <div className="steps_info">
                                    <p>STEP 1</p>
                                    <h3>YOUR INFO</h3>
                                </div>
                            </div>
                            <div onClick={stepBtn2} className="steps">
                                <div className="steps_number flex">
                                    <div id='index2' className="index">2</div>
                                </div>
                                <div className="steps_info">
                                    <p>STEP 2</p>
                                    <h3>SELECT PLAN</h3>
                                </div>
                            </div>
                            <div className="steps" onClick={stepBtn3}>
                                <div className="steps_number flex">
                                    <div id='index3' className="index">3</div>
                                </div>
                                <div className="steps_info">
                                    <p>STEP 3</p>
                                    <h3>ADD-ONS</h3>
                                </div>
                            </div>
                            <div className="steps" onClick={stepBtn4}>
                                <div className="steps_number flex">
                                    <div id='index4' className="index">4</div>
                                </div>
                                <div className="steps_info">
                                    <p>STEP 4</p>
                                    <h3>SUMMARY</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right_container">
                        <div className="form_box custom__scrollbar">
                            <div className="">
                                {pageDisplay()}
                            </div>
                        </div>
                        <div id='formBtn' className="form_btn">
                            <button id='backBtn' onClick={backStep} className='backBtn' type="submit">Go Back</button>
                            <button id='nextBtn' onClick={nextStep} className='' type="submit">Next Step</button>
                            <button id='confirmBtn' onClick={cnfBtn} className='hidden' type="submit">Confirm</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
