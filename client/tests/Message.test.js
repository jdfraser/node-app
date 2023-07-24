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

    it('styles own name differently than others', () => {
        const ownMessage = { name: 'First', text: 'Hello world!' };
        const secondMessage = { name: 'Second', text: 'Hello world!' };
        const thirdMessage = { name: 'Third', text: 'Hello world!' };
        
        render(<Message name='First' message={ownMessage} />);
        render(<Message name='First' message={secondMessage} />);
        render(<Message name='First' message={thirdMessage} />);
        
        let ownClass = screen.getByText('First', {exact: false}).className;
        let secondClass = screen.getByText('Second', {exact: false}).className;
        let thirdClass = screen.getByText('Third', {exact: false}).className;

        expect(ownClass).not.toBe(secondClass);
        expect(ownClass).not.toBe(thirdClass);
        expect(secondClass).toBe(thirdClass);
    })
})