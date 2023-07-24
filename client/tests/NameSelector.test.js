import './setupTests';
import { expect, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NameSelector from '../src/components/NameSelector';

describe('<NameSelector>', () => {
    it('accepts text input', async () => {
        render(<NameSelector open={true}/>);
        const user = userEvent.setup();
        const textInput = screen.getByRole('textbox');

        await user.type(textInput, 'MyName');

        expect(screen.getByDisplayValue('MyName')).toBeInTheDocument();
    })

    it('can be submitted using keyboard', async () => {
        const handleSubmit = jest.fn();
        render(<NameSelector open={true} onSubmit={handleSubmit} />);
        const user = userEvent.setup();
        const textInput = screen.getByRole('textbox');

        await user.type(textInput, 'MyName');
        await user.keyboard('{Enter}');

        expect(handleSubmit).toHaveBeenCalled();
    })

    it('can be submitted using button', async () => {
        const handleSubmit = jest.fn();
        render(<NameSelector open={true} onSubmit={handleSubmit} />);
        const user = userEvent.setup();
        const button = screen.getByRole('button');

        await user.click(button);
        
        expect(handleSubmit).toHaveBeenCalled();
    })

    it('can be closed using keyboard', async () => {
        const handleClose = jest.fn();
        render(<NameSelector open={true} onClose={handleClose} />);
        const user = userEvent.setup();

        await user.keyboard('{Escape}');

        expect(handleClose).toHaveBeenCalled();
    })
})