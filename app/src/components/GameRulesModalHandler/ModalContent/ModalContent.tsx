import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ModalContent = () => (
  <>
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="ax-w-mdm transform overflow-hidden rounded-2xl bg-white p-12 align-middle shadow-xl transition-all flex justify-center">
            <img src="./image-rules.svg" alt="Game rules" />
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  </>
);

export default ModalContent;
