import React from 'react'

export default function Summary() {
    return (
        <>
            <form className='service_form' action="#">
                <div className="form_title">
                    <h2>Finishing up</h2>
                    <p>Double-check everything looks OK before confirming.</p>
                </div>
                <div className="summary_container">
                    <div className="summary_details">
                        <div className="summary_detail s1">
                            <div className="title">
                                <h3>Arcade (Monthly)</h3>
                                <button>Change</button>
                            </div>
                            <p className="price">$9/mo</p>
                        </div>
                        <div className="summary_detail s2" >
                            <div className="title">
                                <p>Customizable profile</p>
                            </div>
                            <p className="price">$9/mo</p>
                        </div>
                        <div className="summary_detail s2">
                            <div className="title">
                                <p>Online service</p>
                            </div>
                            <p className="price">$9/mo</p>
                        </div>
                    </div>
                    <div className="summary_total st1">
                        <p>Total (per month)</p>
                        <p className="price">$12/mo</p>
                    </div>
                </div>
            </form>
        </>
    )
}
