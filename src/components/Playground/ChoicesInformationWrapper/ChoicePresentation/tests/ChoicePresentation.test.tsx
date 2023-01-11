import { render, screen } from "@testing-library/react";
import ChoicePresentation from "..";

describe('<ChoicePresentation />', () => {
    it('should render', () => {
        render(<ChoicePresentation label="Happy New Year">
            <div>Children component</div>
        </ChoicePresentation>);

        screen.debug();

        expect(screen).toMatchSnapshot();
    })
})