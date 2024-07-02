import React from 'react'
import "./credSecurity.css"
import Button from '../common/Button'
const CredSecurity = () => {
  return (
    <div className="cred-security photo-section">
        <div className="max-width">
            <div className="photo-section-child">
                <div className="photo-section-top">
                    <div className="photo-section-heading cred-experience-heading">
                        security first. and second.
                    </div>
                    <div className="photo-section-subheading">
                        whats yours remains only yours.
                    </div>
                </div>
                <div className="photo-section-bottom">
                    <div className="photo-section-description cred-experience-description">
                      CRED ensures that all your personal data and trasactions are encrypted, and secured to whats
                      yours remains only yours. there is no room for mistakes because we did't leave any.
                    </div>
                    <div className="photo-section-button">
                        <Button buttonText= "Become a member" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CredSecurity