import React, { useState, useEffect } from "react";

export default function DeleteModal({
  title,
  children,
  onSave,
  show,
  onDismiss,
}) {
  const [open, setOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  useEffect(() => {
    if (show) {
      setShowBackdrop(true);
      setTimeout(() => setOpen(true), 200);
    }
  }, [show]);

  function hide() {
    setOpen(false);
    setTimeout(() => setShowBackdrop(false), 200);
  }

  function handleDismiss() {
    onDismiss();
    hide();
  }

  function handleSave() {
    onSave();
    onDismiss();
    hide();
  }

  return (
    <>
      <div
        className={`modal fade${open ? " show" : ""}`}
        style={{ display: showBackdrop ? "block" : "none" }}
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {title}
              </h5>
              <button
                type="button"
                className="close"
                onClick={handleDismiss}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {children}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleDismiss}
              >
                Cancel
              </button>
              {onSave && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  Delete Item
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop fade${open ? " show" : ""}`}
        style={{ display: showBackdrop ? "block" : "none" }}
      ></div>
    </>
  );
}
