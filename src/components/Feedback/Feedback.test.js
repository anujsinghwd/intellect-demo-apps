import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import WellbeingWidget from "."; // Adjust the import based on your file structure
import "@testing-library/jest-dom/extend-expect";

describe("WellbeingWidget Component", () => {
  test("renders the heading and emojis", () => {
    render(<WellbeingWidget />);

    // Check if the heading is rendered
    expect(screen.getByText(/Select Your Mood/i)).toBeInTheDocument();

    // Check if all emojis are rendered
    expect(screen.getByText("😢")).toBeInTheDocument();
    expect(screen.getByText("😞")).toBeInTheDocument();
    expect(screen.getByText("😐")).toBeInTheDocument();
    expect(screen.getByText("😊")).toBeInTheDocument();
    expect(screen.getByText("😁")).toBeInTheDocument();

    // Check if all labels are rendered
    expect(screen.getByText("Terrible")).toBeInTheDocument();
    expect(screen.getByText("Bad")).toBeInTheDocument();
    expect(screen.getByText("Alright")).toBeInTheDocument();
    expect(screen.getByText("Pretty Good")).toBeInTheDocument();
    expect(screen.getByText("Fantastic")).toBeInTheDocument();
  });

  test("selects an emoji and displays the selected emoji text", () => {
    render(<WellbeingWidget />);

    // Click on the first emoji
    fireEvent.click(screen.getByText("😢"));

    // Check if the selected emoji text is displayed correctly
    expect(screen.getByText(/You selected:/i)).toHaveTextContent("😢");

    // Check if the selected class is applied
    expect(screen.getAllByText("😢")[0]).toHaveClass("selected");
  });

  test("updates the selected emoji when a different emoji is clicked", () => {
    render(<WellbeingWidget />);

    // Click on the first emoji
    fireEvent.click(screen.getByText("😢"));
    expect(screen.getByText(/You selected:/i)).toHaveTextContent("😢");

    // Click on the third emoji
    fireEvent.click(screen.getByText("😐"));
    expect(screen.getByText(/You selected:/i)).toHaveTextContent("😐");

    // Check that the first emoji is no longer selected
    expect(screen.getAllByText("😢")[0]).not.toHaveClass("selected");

    // Check that the third emoji is now selected
    expect(screen.getAllByText("😐")[0]).toHaveClass("selected");
  });

  test("does not display the selected emoji text when no emoji is selected", () => {
    render(<WellbeingWidget />);

    // Initially, no emoji is selected
    expect(screen.queryByText(/You selected:/i)).not.toBeInTheDocument();
  });
});
