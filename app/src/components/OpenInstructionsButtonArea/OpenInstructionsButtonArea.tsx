import { Fragment, useState, lazy, Suspense} from "react"
import { Dialog, Transition } from '@headlessui/react';


const ModalContent = lazy(() => import('./ModalContent'));

const OpenInstructionsButtonArea = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const openModal = () => setShouldShowModal(true);
  const closeModal = () => setShouldShowModal(false);

  return (
      <>
        <div className="inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Show rules
          </button>
        </div>
        <Transition appear show={shouldShowModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Suspense>
              <ModalContent />
            </Suspense>
          </Dialog>
        </Transition>
      </>
  )
}

export default OpenInstructionsButtonArea