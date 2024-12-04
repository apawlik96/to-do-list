import { render, screen, fireEvent } from "@testing-library/react";
import { Task } from "./Task";
import '@testing-library/jest-dom';

const mockOnCheck = jest.fn();
const mockOnDelete = jest.fn();
const mockOnEdit = jest.fn();

const defaultProps = {
    id: 1,
    text: "Complete online JavaScript course",
    checked: true,
    onCheck: mockOnCheck,
    onDelete: mockOnDelete,
    onEdit: mockOnEdit,
    dateAdded: "2024-09-13",
};

describe("Task Component", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("renders the Task component", () => {
        render(<Task {...defaultProps} />);
        expect(screen.getByText("Complete online JavaScript course")).toBeInTheDocument();
        expect(screen.getByText("2024-09-13")).toBeInTheDocument();
    });

    test("handle marking task as checked", () => {
        render(<Task {...defaultProps} />);
        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);
        expect(mockOnCheck).toHaveBeenCalledWith(1);
        expect(checkbox).toBeChecked();
    });

    test("handle edit mode on double click", () => {
        render(<Task {...defaultProps} />);
        const paragraph = screen.getByText("Complete online JavaScript course");
        fireEvent.doubleClick(paragraph);
        expect(screen.getByDisplayValue("Complete online JavaScript course")).toBeInTheDocument();
    });

    test("handle edited text on Enter key press", () => {
        render(<Task {...defaultProps} />);
        const paragraph = screen.getByText("Complete online JavaScript course");
        fireEvent.doubleClick(paragraph);
        const input = screen.getByDisplayValue("Complete online JavaScript course");
        fireEvent.change(input, { target: { value: "Edited: Complete online JavaScript course" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
        expect(mockOnEdit).toHaveBeenCalledWith(1, "Edited: Complete online JavaScript course");
    });

    test("handle edited text on blur", () => {
        render(<Task {...defaultProps} />);
        const paragraph = screen.getByText("Complete online JavaScript course");
        fireEvent.doubleClick(paragraph);
        const input = screen.getByDisplayValue("Complete online JavaScript course");
        fireEvent.change(input, { target: { value: "Edited: Complete online JavaScript course" } });
        fireEvent.blur(input);
        expect(mockOnEdit).toHaveBeenCalledWith(1, "Edited: Complete online JavaScript course");
    });

    test("handle onDelete when delete button is clicked", () => {
        render(<Task {...defaultProps} />);
        const deleteButton = screen.getByLabelText(/delete-button/i);
        fireEvent.click(deleteButton);
        expect(mockOnDelete).toHaveBeenCalledWith(1);
    });
});
