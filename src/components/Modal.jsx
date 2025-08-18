import React from 'react'
import './Modal.css'
import IconSelector from './IconSelector'
import Button from './Button'
import IconButton from './IconButton'

function Modal(){
    return(
        <div className="modal-container">
            <div className="frame-1">
                <IconButton
                iconName="closeIcon"
                onClick={() => {}}
                size="medium"
                variant="default"
            />
            </div>

            <div className="frame-2">
                <IconSelector
                color="var(--ciam-dark)"
                name="notificationIcon"
                size="display"
                />
                <h4>¡Notification!</h4>
            </div>
            <div className="frame-3">
                 <p>You're about to delete this item. This action is permanent and cannot be reverted.</p>
            </div>

            <div className="frame-4 modal-buttons">
                <Button
                onClick={() => {}}
                size="large"
                text="Cancel"
                type="button"
                variant="btn-error"
                />
                <Button
                onClick={() => {}}
                size="large"
                text="Accept"
                type="button"
                variant="btn-primary"
                />
            </div>
            
        </div>
    );
};

export default Modal;