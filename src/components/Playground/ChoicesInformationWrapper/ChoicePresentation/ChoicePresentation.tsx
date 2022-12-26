interface ChoicePresentationProps {
  label: string;
  children: React.ReactNode;
}

const ChoicePresentation = ({ label, children }: ChoicePresentationProps) => (
  <div>
    <div className="text-center my-8 text-xl">{label}</div>
    {children}
  </div>
);

export default ChoicePresentation;
