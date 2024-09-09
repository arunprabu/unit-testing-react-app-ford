// TEST PATTERN: AAA (Arrange, Act, Assert )
// Arrange
import App from "./App";
import { render, screen } from "@testing-library/react"; // rtl

// group of related tests or test cases or test specs  == Test Suite
describe("App", () => {
  // Act
  // Test spec or Test or test case
  test("renders heading with Welcome to Unit Testing React App", () => {
    render(<App />);
    const element = screen.getByText("Welcome to unit testing ReactJS app!!!");

    // assert -- MUST
    expect(element).toBeInTheDocument();
  });

  // Test spec or Test or test case
  it("renders paragraph with This is a sample app to learn unit testing in ReactJS", () => {
    render(<App />);
    const paraElement = screen.getByText(/This is a sample app to learn unit testing in ReactJS/i);
    expect(paraElement).toBeTruthy();
  });
});
