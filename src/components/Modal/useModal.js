import { useState } from "react";
import Modal from "./Modal";

export default function useModal(props) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function handleDismiss() {
    setShowModal(false);
    props?.onDismiss && props.onDismiss();
  }

  return {
    Modal,
    modalProps: {
      show: showModal,
      onDismiss: handleDismiss,
      ...props,
    },
    openModal,
  };
}
