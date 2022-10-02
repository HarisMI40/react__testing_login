import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting Component", () => {
  test("test apakah kata hello world ada", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ( nothing)

    //   Assert
    // ambil kata Hello World di file Greeting
    const greetingELement = screen.getByText("Hello World", { exact: false });

    // expetasi nya kata hello world ada di document
    expect(greetingELement).toBeInTheDocument();
  });

  test("test it's good to see you ada", () => {
    render(<Greeting />);

    const paragrafElement = screen.getByText("it's Good To see you !");

    expect(paragrafElement).toBeInTheDocument();
  });

  test("renders 'changed' if button was Clicked", () => {
    render(<Greeting />);

    // action
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const outputElement = screen.getByText("changed");
    expect(outputElement).toBeInTheDocument();
  });

  test("remove it's Good To see you ! when button cliked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const outputElement = screen.queryByText("it's Good To see you !", {exact : false});
    expect(outputElement).toBeNull();
  });

  test('test apkah list berjumlah 3', () => { 
    render(<Greeting />);

    const tagList = screen.getAllByRole("listitem");

    expect(tagList).toHaveLength(2);
   })
});
