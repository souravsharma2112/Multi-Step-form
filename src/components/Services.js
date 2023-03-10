import React from 'react'

export default function Services() {
    return (
        <>
            <form className='service_form' action="#">
                <div className="form_title">
                    <h2>Select your plan</h2>
                    <p>You have the option of monthly or yearly billing.</p>
                </div>
                <div className="plans">
                    <div className="plan">
                        <div className="plan_icon">
                            <span style={{background : "#ffd382"}} className="material-symbols-outlined">
                                extension
                            </span>
                        </div>
                        <div className="plan_title">
                            <h4>Arcade</h4>
                            <p>$9/mo</p>
                            <p>2 months free</p>
                        </div>
                    </div>
                    <div className="plan">
                        <div className="plan_icon">
                            <span style={{background : "#ffafaf"}} className="material-symbols-outlined">
                                sports_esports
                            </span>
                        </div>
                        <div className="plan_title">
                            <h4>Advanced</h4>
                            <p>$12/mo</p>
                            <p>2 months free</p>
                        </div>
                    </div>
                    <div className="plan">
                        <div className="plan_icon">
                            <span style={{background : "#1f50ef"}} className="material-symbols-outlined">
                                videogame_asset
                            </span>
                        </div>
                        <div className="plan_title">
                            <h4>Pro</h4>
                            <p>$15/mo</p>
                            <p>2 months free</p>
                        </div>
                    </div>
                </div>
                <div className="plan_period">
                    <div className="plan_type flex">
                        <h5>Monthly</h5>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <h5>Yearly</h5>
                    </div>
                </div>
            </form>
        </>
    )
}
