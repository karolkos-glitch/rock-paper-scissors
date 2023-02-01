interface OpenModalButtonProps {
  openModal: () => void;
}
const OpenModalButton = ({ openModal }: OpenModalButtonProps) => {
  return (
    <button
      type="button"
      onClick={openModal}
      className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Show rules
    </button>
  );
};

export default OpenModalButton;
