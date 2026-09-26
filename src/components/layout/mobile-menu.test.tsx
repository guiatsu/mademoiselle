import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { MobileMenu } from "@/components/layout/mobile-menu";
it("moves focus into the menu and returns it to the trigger on close", async () => {
  const user = userEvent.setup();
  render(<MobileMenu />);
  await user.tab();
  await user.keyboard("{Enter}");
  expect(screen.getByRole("button", { name: "Fechar menu" })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  expect(screen.getByRole("link", { name: "Início" })).toHaveFocus();
  await user.keyboard("{Escape}");
  expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Abrir menu" })).toHaveFocus();
});

it("closes when the visitor clicks outside the menu", async () => {
  const user = userEvent.setup();
  render(
    <>
      <MobileMenu />
      <button type="button">Fora do menu</button>
    </>,
  );

  await user.click(screen.getByRole("button", { name: "Abrir menu" }));
  await user.click(screen.getByRole("button", { name: "Fora do menu" }));

  expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
});
