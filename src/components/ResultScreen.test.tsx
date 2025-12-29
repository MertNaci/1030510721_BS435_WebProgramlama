import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ResultScreen from './ResultScreen';

describe('ResultScreen Component', () => {
    it('displays the score correctly', () => {
        const mockRestart = vi.fn();
        render(<ResultScreen score={5} totalQuestions={10} onRestart={mockRestart} />);

        expect(screen.getByText('5 / 10')).toBeInTheDocument();
        expect(screen.getByText(/Oyun Bitti/i)).toBeInTheDocument();
    });

    it('displays success message for perfect score', () => {
        const mockRestart = vi.fn();
        render(<ResultScreen score={10} totalQuestions={10} onRestart={mockRestart} />);

        expect(screen.getByText(/Mükemmel/i)).toBeInTheDocument();
    });

    it('calls onRestart when button is clicked', () => {
        const mockRestart = vi.fn();
        render(<ResultScreen score={5} totalQuestions={10} onRestart={mockRestart} />);

        const btn = screen.getByText(/Tekrar Oyna/i);
        fireEvent.click(btn);

        expect(mockRestart).toHaveBeenCalled();
    });
});