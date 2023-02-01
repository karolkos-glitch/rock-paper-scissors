import { Fragment, useState, lazy, Suspense } from "react";
import { Dialog, Transition } from "@headlessui/react";
import OpenModalButton from "./OpenModalButton";

const OpenInstructionsButtonArea = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const openModal = () => setShouldShowModal(true);
  const closeModal = () => setShouldShowModal(false);
  const ModalContent = lazy(() => import("./ModalContent"));

  return (
    <>
      <div className="flex items-center justify-center md:justify-end p-16 self-end w-full">
        <OpenModalButton openModal={openModal} />
      </div>
      <Transition appear show={shouldShowModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Suspense>
            <ModalContent />
          </Suspense>
        </Dialog>
      </Transition>
    </>
  );
};

export default OpenInstructionsButtonArea;
