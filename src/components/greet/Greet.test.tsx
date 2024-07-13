import { render, screen} from "@testing-library/react";
import { Greet } from "./Greet";
test('Greet renders correctly',()=>{
    render(<Greet/>);
    // const textElement = screen.getByText(/hello/i); //hello/i   ignore case with regx
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
})

test('Green renders with name', ()=>{
    render(<Greet name={"Dipak"}/>)
    const textElement = screen.getByText("Hello Dipak");
    expect(textElement).toBeInTheDocument();
})