import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
    it('renders the start screen initially', () => {
        render(<App />);
        expect(screen.getByText(/AI Tahmin Oyunu/i)).toBeInTheDocument();
    });

    it('switches to game screen when Start is clicked', () => {
        render(<App />);

        const startBtn = screen.getByText(/Classic Mode/i);
        fireEvent.click(startBtn);

        expect(screen.getByText(/Puan:/i)).toBeInTheDocument();
    });
});