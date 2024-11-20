import { render, screen, fireEvent, waitFor  } from "@testing-library/react";
import '@testing-library/jest-dom';
import ToDoList from "./ToDoList";
import cookie from "cookie";

jest.mock("cookie", () => ({
    serialize: jest.fn(),
    parse: jest.fn(),
  }));

describe("ToDoList Component", () => {

    beforeEach(() => {
        cookie.parse.mockClear();
        document.body.classList.remove("dark-theme", "light-theme");
    });

    test('switch to dark theme', () => {
        cookie.parse.mockReturnValue({ theme: "dark" });

        render(<ToDoList />);

        expect(document.body.classList.contains("dark-theme")).toBe(true);
        expect(document.body.classList.contains("light-theme")).toBe(false);
    });

    test('switch to light theme', () => {
        cookie.parse.mockReturnValue({ theme: "light" });

        render(<ToDoList />);

        expect(document.body.classList.contains("light-theme")).toBe(true);
        expect(document.body.classList.contains("dark-theme")).toBe(false);
    });

    test("render the title", () => {
        render(<ToDoList />);
        expect(screen.getByText("Todo")).toBeInTheDocument();
    });

    test("renders progress linear bar", () => {
        render(<ToDoList />);
        const input = screen.getByPlaceholderText("Create a new todo...");
        fireEvent.change(input, { target: { value: "New task" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
        fireEvent.change(input, { target: { value: "Add task" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
        const checkbox = screen.getAllByRole('checkbox')[0];
        fireEvent.click(checkbox);
        expect(screen.getByText(/50%/i)).toBeInTheDocument();
    });

    test("add a new task", () => {
        render(<ToDoList />);
        const input = screen.getByPlaceholderText("Create a new todo...");
        fireEvent.change(input, { target: { value: "New task" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

        expect(screen.getByText(/New task/i)).toBeInTheDocument();
        expect(screen.getByText("Task added successfully!")).toBeInTheDocument();
        expect(screen.getByText(/1 items left/i)).toBeInTheDocument();
    });

    test("add an empty task", () => {
        render(<ToDoList />);
        const input = screen.getByPlaceholderText("Create a new todo...");
        fireEvent.change(input, { target: { value: "" } });
        fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
        expect(screen.queryByText("Empty task")).not.toBeInTheDocument();
        expect(screen.getByText(/0 items left/i)).toBeInTheDocument();
    });

    test("toggle task sort order between newest and oldest", () => {
        render(<ToDoList />);
        const sortButton = screen.getByRole('button', { name: /sort-button/i });

        expect(sortButton).toBeInTheDocument();
        expect(screen.getByText("newest")).toBeInTheDocument();

        fireEvent.click(sortButton);
        expect(screen.getByText("oldest")).toBeInTheDocument();
    });

    test("filter tasks by status", () => {
        render(<ToDoList />);
        const allFilterButton = screen.getAllByRole('button', { name: /all-filter-button/i });
        const activeFilterButton = screen.getAllByRole('button', { name: /active-filter-button/i });
        const completedFilterButton = screen.getAllByRole('button', { name: /completed-filter-button/i });
        const completedTask = screen.getByPlaceholderText("Create a new todo...");

        fireEvent.change(completedTask, { target: { value: "New task" } });
        fireEvent.keyDown(completedTask, { key: "Enter", code: "Enter" });

        fireEvent.click(allFilterButton[0]);
        expect(screen.getByText("New task")).toBeInTheDocument();

        fireEvent.click(activeFilterButton[0]);
        expect(screen.getByText("New task")).toBeInTheDocument();

        fireEvent.click(completedFilterButton[0]);
        expect(screen.queryByText("New task")).not.toBeInTheDocument();
    });

    test("open confirmation dialog when clearing completed tasks", () => {
        render(<ToDoList />);
        const clearCompletedButton = screen.getByLabelText(/clear-completed-button/i);

        fireEvent.click(clearCompletedButton); 

        const dialog = screen.getByRole("dialog");
        const dialogTitle = screen.getByText(/Delete All Tasks/i);
        const dialogContent = screen.getByText(/Do you want to delete all completed tasks\? You will not be able to restore them./i);
        expect(dialog).toBeInTheDocument();
        expect(dialogTitle).toBeInTheDocument();
        expect(dialogContent).toBeInTheDocument();
        expect(clearCompletedButton).toBeInTheDocument();
    });

    test("close dialog when clicking No", async  () => {
        render(<ToDoList />);
        const clearCompletedButton = screen.getByLabelText(/clear-completed-button/i);
        fireEvent.click(clearCompletedButton);
        const noButton  = screen.getByRole('button', { name: /no-button/i });

        fireEvent.click(noButton);

        await waitFor(() => {
            const dialog = screen.queryByRole("dialog");
            expect(dialog).not.toBeInTheDocument();
        });
    });

    test("close dialog and clear tasks when clicking Yes", async  () => {
        render(<ToDoList />);
        const clearCompletedButton = screen.getByLabelText(/clear-completed-button/i);
        fireEvent.click(clearCompletedButton);
        const yesButton  = screen.getByRole('button', { name: /yes-button/i });

        fireEvent.click(yesButton );

        await waitFor(() => {
            const dialog = screen.queryByRole("dialog");
            expect(dialog).not.toBeInTheDocument();
        });
    });

    test("renders the paragraph", () => {
        render(<ToDoList />);
        expect(screen.getByText("Drag and drop to reorder list")).toBeInTheDocument();
    });

});
