import './setupTests';
import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import Message from '../src/components/Message';

describe('<Message>', () => {
    it('displays name and text', async () => {
        const message = { name: 'Tester', text: 'Hello world!' };
        render(<Message name='Tester' message={message} />);

        expect(screen.getByText('Tester', { exact: false })).toBeInTheDocument();
        expect(screen.getByText('Hello world!')).toBeInTheDocument();
    })
})