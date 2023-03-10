import React from 'react'

export default function Addone() {
    return (
        <>
            <form className='service_form' action="#">
                <div className="form_title">
                    <h2>Pick add-ons</h2>
                    <p>Add-ons help to enhance your gaming experience.</p>
                </div>
                <div className="service_container">
                    <div className="service_box">
                        <div className="service_info flex">
                            <input className='service_checkbox' type="checkbox" name="" id="serviceCheck" />
                            <div className="service_details">
                                <h4>Online service</h4>
                                <p>Access to multiplayer game</p>
                            </div>
                        </div>
                        <p className="price">+$1/mo</p>
                    </div>
                    <div className="service_box">
                        <div className="service_info flex">
                            <input className='service_checkbox' type="checkbox" name="" id="serviceCheck" />
                            <div className="service_details">
                                <h4>Online service</h4>
                                <p>Access to multiplayer game</p>
                            </div>
                        </div>
                        <p className="price">+$1/mo</p>
                    </div>
                    <div className="service_box">
                        <div className="service_info flex">
                            <input className='service_checkbox' type="checkbox" name="" id="serviceCheck" />
                            <div className="service_details">
                                <h4>Online service</h4>
                                <p>Access to multiplayer game</p>
                            </div>
                        </div>
                        <p className="price">+$1/mo</p>
                    </div>
                </div>
            </form>
        </>
    )
}