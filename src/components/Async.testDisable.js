import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Async from "./Async";

describe("Async Component", () => {
  test("renders post if request succeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 1, title: "First Post" }],
    });
    render(<Async />);

    // action
    const listItemElements = await screen.findAllByRole("listitem");
    /* 
                listitem akan bernilai array,

                untuk role role element yg lain bisa dilihat disini :
                https://www.w3.org/TR/html-aria/#docconformance
            */

    expect(listItemElements).not.toHaveLength(0);
    // cek jika array lisitem tidak punya length 0
  });
});
