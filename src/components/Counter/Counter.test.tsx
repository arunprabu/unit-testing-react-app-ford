import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

// Testing states, events and conditional rendering
describe("Counter", () => {
  it("renders counter with initial value 0", () => {
    render(<Counter />);
    const element = screen.getByTestId("counterValue"); 
    expect(element.textContent).toBe("0");
  });

  it("increments counter when increment button is clicked", () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId("incrementBtn");
    fireEvent.click(incrementBtn); // triggering the click programatically
    const element = screen.getByTestId("counterValue");
    expect(element.textContent).toBe("1");

    fireEvent.click(incrementBtn); // triggering the click programatically
    fireEvent.click(incrementBtn); // triggering the click programatically
    fireEvent.click(incrementBtn); // triggering the click programatically
    expect(element.textContent).toBe("4");
  });

  // TODO: Add test case for decrement button

  // TODO: Add test case for conditional rendering
  it("renders counter with initial value 0 when count is less than 10", () => {
    render(<Counter />);
    const element = screen.getByTestId("counterValue");
    expect(element.textContent).toBe("0");

    const incrementBtn = screen.getByTestId("incrementBtn");
    
    for(var i= 0; i < 10; i++){
      fireEvent.click(incrementBtn);
    } 
    expect(element.textContent).toBe("10");

    fireEvent.click(incrementBtn);
    expect(element.textContent).toBe("10");
  });
});