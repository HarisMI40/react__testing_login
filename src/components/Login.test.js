import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Login from "./Login";

jest.mock("axios", () => ({
    __esModule:true,

    default : {
        get: () => ({
            data : {id:1, name:"john"},
        }),
    },
})) 


test('Username input should be rendered', () => { 
    render(<Login />);

    // dapatkan elemen berdasarkan placeholder
    const userInputEl = screen.getByPlaceholderText(/username/i);

    expect(userInputEl).toBeInTheDocument();
 })

 test('Username input should be empty', () => { 
    render(<Login />);

    // dapatkan elemen berdasarkan placeholder
    const userInputEl = screen.getByPlaceholderText(/username/i);

    expect(userInputEl.value).toBe("");
 })

 test('Username input should be Change', () => { 
    render(<Login />);

    // dapatkan elemen berdasarkan placeholder
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const testValue = "test";

    fireEvent.change(userInputEl, {target : {value: testValue}});

    expect(userInputEl.value).toBe(testValue);
 })


test('Password input should be rendered', () => { 
    render(<Login />);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);

    expect(passwordInputEl).toBeInTheDocument();
 })

 

 test('Password input should be empty', () => { 
    render(<Login />);

    // dapatkan elemen berdasarkan placeholder
    const passwordInputEl = screen.getByPlaceholderText(/password/i);

    expect(passwordInputEl.value).toBe("");
 })


test('Button input should be rendered', () => { 
    render(<Login />);
    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toBeInTheDocument();
 })

 
 test('Button input should be disable', () => { 
    render(<Login />);
    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toBeDisabled();
 })

 test('Loading should be rendered when click', () => { 
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);

    const testValue = "test";

    fireEvent.change(userInputEl, {target : {value: testValue}});
    fireEvent.change(passwordInputEl, {target : {value: testValue}});
    fireEvent.click(buttonEl);

    expect(buttonEl).toHaveTextContent(/please wait/i);
 })

 test('Loading should be rendered when click', () => { 
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);

    const testValue = "test";

    fireEvent.change(userInputEl, {target : {value: testValue}});
    fireEvent.change(passwordInputEl, {target : {value: testValue}});
    fireEvent.click(buttonEl);

    expect(buttonEl).toHaveTextContent(/please wait/i);
 })

 test('Loading should not be rendered after fetching', async () => { 
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);

    const testValue = "test";

    fireEvent.change(userInputEl, {target : {value: testValue}});
    fireEvent.change(passwordInputEl, {target : {value: testValue}});
    fireEvent.click(buttonEl);

    await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
 })

 test('User should be rendered after fetching', async () => { 
    render(<Login />);
    const buttonEl = screen.getByRole("button");
    const userInputEl = screen.getByPlaceholderText(/username/i);
    const passwordInputEl = screen.getByPlaceholderText(/password/i);

    const testValue = "test";

    // buat simulasi user input ditambahkan text "test"
    fireEvent.change(userInputEl, {target : {value: testValue}});

    // buat simulasi password input ditambahkan text "test
    fireEvent.change(passwordInputEl, {target : {value: testValue}});

    // buat simulasi button di click
    fireEvent.click(buttonEl);

    const userItem = await screen.findByText("john");

    expect(userItem).toBeInTheDocument();
})





 test('Error info should not be visible', () => { 
    render(<Login />);

    // dapatkan elemen berdasarkan placeholder
    const ErrorInfo = screen.getByTestId("error");

    expect(ErrorInfo).not.toBeVisible();
 })