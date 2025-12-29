import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import StartScreen from './StartScreen';

describe('StartScreen Component', () => {
    it('renders all game mode buttons', () => {
        const mockStart = vi.fn();
        render(<StartScreen onStart={mockStart} />);

        expect(screen.getByText(/Classic Mode/i)).toBeInTheDocument();
        expect(screen.getByText(/Hardcore Mode/i)).toBeInTheDocument();
        expect(screen.getByText(/Time Attack Mode/i)).toBeInTheDocument();
    });

    it('starts correct mode for each button click', () => {
        const mockStart = vi.fn();
        render(<StartScreen onStart={mockStart} />);

        fireEvent.click(screen.getByText(/Classic Mode/i));
        expect(mockStart).toHaveBeenCalledWith('classic');

        fireEvent.click(screen.getByText(/Hardcore Mode/i));
        expect(mockStart).toHaveBeenCalledWith('hardcore');

        fireEvent.click(screen.getByText(/Time Attack Mode/i));
        expect(mockStart).toHaveBeenCalledWith('time_attack');
    });
});