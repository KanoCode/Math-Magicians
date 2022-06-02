import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("1) When user clicks on Home button", () => {
  it("should render the home page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    userEvent.click(screen.getByRole("link", { name: /home/i }));

    expect(
      screen.getByRole("heading", { name: /welcome to math magicians/i })
    ).toBeInTheDocument();
  });
});

describe("2) when user clicks on Calculator link", () => {
  it("should render the home page", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    userEvent.click(screen.getByRole("link", { name: /calculator/i }));

    expect(
      screen.getByRole("heading", { name: /let's do some math!/i })
    ).toBeInTheDocument();
  });
});

describe("3) When user clicks on Quote link", () => {
  it("should render the quotes component", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // what user does
    userEvent.click(screen.getByRole("link", { name: /quote/i }));
    // what i expect
    expect(
      screen.getByText(
        /“mathematics expresses values that reflect the cosmos, including orderliness, balance, harmony, logic, and abstract beauty\.”/i
      )
    ).toBeInTheDocument();
  });
});
