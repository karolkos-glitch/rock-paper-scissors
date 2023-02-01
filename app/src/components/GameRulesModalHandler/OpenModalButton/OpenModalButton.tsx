interface OpenModalButtonProps {
  openModal: () => void;
}

const OpenModalButton = ({ openModal }: OpenModalButtonProps) => (
  <button
    type="button"
    onClick={openModal}
    className="rounded-md bg-white px-4 
      py-2 text-sm text-dark-text hover:bg-opacity-80 
      focus:outline-none "
  >
    Show rules
  </button>
);

export default OpenModalButton;
