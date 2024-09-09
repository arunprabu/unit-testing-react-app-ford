import { render, screen } from "@testing-library/react";
import Posts from "./Posts";
import mockFetch from "./mockFetch";

describe('Posts', () => {
  /* it('renders posts with title and id', async() => {
    render(<Posts />);
    const postId = await screen.findByTestId('post1');
    expect(postId.textContent).toBe('#1');
  })


  it("fetches post thru REST API call [1]", async () => {
    render(<Posts />);

    expect(await screen.findByText("qui est esse")).toBeInTheDocument();
    // learn about getBy, findby, queryBy: https://testing-library.com/docs/queries/about/

    // 3 Challenges / Disadv of Testing Rest API 
     // 1. Time consuming
     // 2. Availability of REST API is a concern (may be in dev, may be down)
      //3. No guarantee for the sample data like this 'qui est esse' to be present
  
  });
  */

  // ideal place to mock
  // setting up
  beforeEach(() => {
    // prepare to attach a spy
    jest.spyOn(window, "fetch").mockImplementation(mockFetch);
  });

  // tearing down
  afterEach(() => {
    jest.resetAllMocks();
  });

  // Solution is to use mock or spy
  it("renders blog posts properly [SPY]", async () => {
    render(<Posts />);

    expect(await screen.findByText(/first post/)).toBeInTheDocument();
    expect(await screen.findByText(/third post/)).toBeInTheDocument();
  });
}) 