// AAA (Arrange, Act, Assert )
// Arrange
import CompanyInfo from "./CompanyInfo";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react"; // rtl

// group of related tests or test cases or test specs  == Test Suite
describe("CompanyInfo", () => {
  // Act
  // Test spec or Test or test case
  it("receives companyName prop from parent componet and displays", () => {
    render(
      <CompanyInfo
        companyName="IBM"
        foundedYear="1940"
        employeesCount="200000"
      />
    );
    const companyNameElement = screen.getByText("IBM");
    const foundedYearElement = screen.getByText(/1940/i);

    expect(companyNameElement).toBeDefined();
    expect(foundedYearElement).toBeDefined();
  });

  // snapshot testing
  it("renders snapshot", () => {
    const tree = renderer
      .create(
        <CompanyInfo
          companyName="IBM"
          foundedYear="1940"
          employeesCount="200000"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
