import CounterButton from './CounterButton';
import { render, screen,fireEvent } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from "./../App";
describe("Testing Counter App",()=>{
  test("Should render without any error btn Add",()=>{
    render(<CounterButton></CounterButton>);
    let button =screen.getByTestId("cButton_Add");
    expect(button).toBeInTheDocument();
   
  });
  test("Should render without any error btn Reduce",()=>{
    render(<CounterButton></CounterButton>);
    let button =screen.getByTestId("cButton_Reduce");
    expect(button).toBeInTheDocument();
   
  });
  it("Checking counter element are exist or not",()=>{
    render(<App></App>);
    let h1 = screen.getByText("InitalCounter Value : 0");
    expect(h1).toHaveTextContent(0);
  })
  it("OnClick then increment by 5",()=>{
    render(<App></App>);
    let h1 = screen.getByText("InitalCounter Value : 0");
    let button =screen.getByTestId("cButton_Add");
    fireEvent.click(button);
    expect(h1).toHaveTextContent(5);
  })
  it("OnClick then decrement by 5",()=>{
    render(<App></App>);
    let h1 = screen.getByText("InitalCounter Value : 0");
    let add =screen.getByTestId("cButton_Add");
    fireEvent.click(add);
    
    let reduce =screen.getByTestId("cButton_Reduce");
    fireEvent.click(reduce);
    expect(h1).toHaveTextContent(0);

  })
  
  
})