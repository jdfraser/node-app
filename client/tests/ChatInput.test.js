import './setupTests';
import { expect, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChatInput from '../src/components/ChatInput';

describe('<ChatInput>', () => {
    it('accepts text input', async () => {
        render(<ChatInput/>);
        const user = userEvent.setup();
        const textInput = screen.getByRole('textbox');

        await user.type(textInput, 'Hello world!');

        expect(screen.getByDisplayValue('Hello world!')).toBeInTheDocument();
    })

    it('can be submitted using keyboard', async () => {
        const handleSubmit = jest.fn();
        render(<ChatInput onSubmit={handleSubmit} />);
        const user = userEvent.setup();
        const textInput = screen.getByRole('textbox');

        await user.type(textInput, 'Hello world!');
        await user.keyboard('{Enter}');

        expect(handleSubmit).toHaveBeenCalled();
    })

    it('can be submitted using button', async () => {
        const handleSubmit = jest.fn();
        render(<ChatInput onSubmit={handleSubmit} />);
        const user = userEvent.setup();
        const button = screen.getByRole('button');

        await user.click(button);
        
        expect(handleSubmit).toHaveBeenCalled();
    })
})