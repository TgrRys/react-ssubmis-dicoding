import { cleanup, render, screen } from '@testing-library/react';
import {
    afterEach, describe, expect, it, vi,
} from 'vitest';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import ThreadInput from './ThreadInput';

expect.extend(matchers);

describe('ThreadInput component', () => {
    afterEach(() => {
        cleanup();
    });

    it('should handle title typing correctly', async () => {
        // Arrange
        render(<ThreadInput create={() => { }} />);
        const titleInput = await screen.getByPlaceholderText('Title Thread');

        // Action
        await userEvent.type(titleInput, 'titletest');

        // Assert
        expect(titleInput).toHaveValue('titletest');
    });

    it('should handle body typing correctly', async () => {
        // Arrange
        render(<ThreadInput login={() => { }} />);
        const bodyInput = await screen.getByPlaceholderText('Body');

        // Action
        await userEvent.type(bodyInput, 'bodytest');

        // Assert
        expect(bodyInput).toHaveValue('bodytest');
    });

    it('should handle category typing correctly', async () => {
        // Arrange
        render(<ThreadInput login={() => { }} />);
        const categoryInput = await screen.getByPlaceholderText('Category');

        // Action
        await userEvent.type(categoryInput, 'categorytest');

        // Assert
        expect(categoryInput).toHaveValue('categorytest');
    });

    it('should call create function when create button is clicked', async () => {
        // Arrange
        const mockCreateThread = vi.fn();
        render(<ThreadInput create={mockCreateThread} />);
        const titleInput = await screen.getByPlaceholderText('Title Thread');
        await userEvent.type(titleInput, 'title');
        const bodyInput = await screen.getByPlaceholderText('Body');
        await userEvent.type(bodyInput, 'body');
        const categoryInput = await screen.getByPlaceholderText('Category');
        await userEvent.type(categoryInput, 'category');
        const createButton = await screen.getByRole('button');

        // Action
        await userEvent.click(createButton);

        // Assert
        expect(mockCreateThread).toBeCalledWith({
            title: 'title',
            body: 'body',
            category: 'category',
        });
    });
});
