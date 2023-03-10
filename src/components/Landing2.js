import React from 'react'

export default function Landing2(props) {
    // const [ formValues , setFormValues ] = useEffect({
    //     name : "",
    //     email : "",
    //     phoneNo : ""
    // });

//   let userValue = (e) =>{
//     // e.preventDefault();
//     props.setUserName(formValues.name.current.value);
//   }
    let nameValue = () => {
        // userValue()
        let nameInput = document.getElementById("name");
        let nameError = document.getElementById("nameError");
        // props.setFormDetails.name = nameInput.value;
        if (nameInput.value.length < 3) {
            nameError.classList.remove("hidden")
            nameInput.style.border = "1px solid red";
        }
        else {
            nameError.classList.add("hidden")
            nameInput.style.border = "1px solid blue";
            // setFormValues.name(nameInput.value)
        }
        // props.setFormDetails(formValues.name);
    }
    let emailValue = () => {
        let emailInput = document.getElementById("email");
        let emailError = document.getElementById("emailError");
        props.setFormDetails.email = emailInput.value;
        if (emailInput.value.search("@") === -1) {
            emailError.classList.remove("hidden")
            emailInput.style.border = "1px solid red";
        }
        // if (emailInput.value.search(".") === -1) {
        //     emailError.classList.remove("hidden")
        //     emailInput.style.border = "1px solid red";
        // }
        else {
            emailError.classList.add("hidden")
            emailInput.style.border = "1px solid blue";
        }
    }
    let phoneValue = () => {
        let phoneInput = document.getElementById("phone");
        let phoneError = document.getElementById("phoneError");
        let mobileNo = phoneInput.value
        props.setFormDetails.phoneNo = mobileNo;
        let valueIsNo = isNaN(Number(mobileNo))
        if (valueIsNo === false) {
            if (mobileNo.length === 10) {
                phoneError.classList.add("hidden")
                phoneInput.style.border = "1px solid blue";
            }
        }
        if (valueIsNo === true) {
            phoneError.classList.remove("hidden")
            phoneInput.style.border = "1px solid red";
        }

        else {
            phoneError.classList.add("hidden")
        }
    }

    return (
        <>
            <form action="#">
                <div className="form_title">
                    <h2>Personal info</h2>
                    <p>Please provide your name, email, address, and phone number.</p>
                </div>
                <div className="form_input_box">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={nameValue} placeholder='e.g. Surya Bhai' required />
                    <p id='nameError' className="error hidden">This is Required</p>
                </div>
                <div className="form_input_box">
                    <label htmlFor="email">Email Address</label>
                    <input onChange={emailValue} type="email" name="email" id="email" placeholder='e.g. suryabhai88@gmail.com' required />
                    <p id='emailError' className="error hidden">This is Required</p>
                </div>
                <div className="form_input_box">
                    <label htmlFor="phone">Phone Number</label>
                    <input onChange={phoneValue} type="tel" name="phone" id="phone" placeholder='e.g. 8741582514' required />
                    <p id='phoneError' className="error hidden">This is Required</p>
                </div>
            </form>
        </>
    )
}
