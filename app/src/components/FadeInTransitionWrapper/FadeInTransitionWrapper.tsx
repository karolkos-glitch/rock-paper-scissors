import { Fragment } from 'react';
import { Transition } from '@headlessui/react';

interface FadeInTranstionWrapperProps {
  appear?: boolean;
  children: React.ReactNode;
}

const FadeInTransitionWrapper = ({ children, appear = true }: FadeInTranstionWrapperProps) => {
  return (
    <Transition show appear={appear} as={Fragment} 
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {children}
    </Transition>
  )
}

export default FadeInTransitionWrapper