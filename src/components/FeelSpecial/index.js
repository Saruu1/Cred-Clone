import React from 'react'
import "./feelSpecial.css"
import Button from '../common/Button'
const FeelSpecial = () => {
  return (
    <div className="feel-special photo-section">
        <div className="max-width">
            <div className="photo-section-child">
                <div className="photo-section-top">
                    <div className="photo-section-heading">
                        feel special more often.
                    </div>
                    <div className="photo-section-subheading">
                        exclusive rewards for paying your bills
                    </div>
                </div>
                <div className="photo-section-bottom">
                    <div className="photo-section-description">
                        everytime you pray your credit card bills on CRED, you recieve CRED coins.
                        you can use these to win exclusive rewards or get special access to curated 
                        products and experiences. on CRED, good begets good.
                    </div>
                    <div className="photo-section-button">
                        <Button buttonText= "Explore Rewards" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeelSpecial