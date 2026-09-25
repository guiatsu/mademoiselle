import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { MobileMenu } from "@/components/layout/mobile-menu";
it("opens with the keyboard and closes after navigation or Escape", async () => {
  const user = userEvent.setup();
  render(<MobileMenu />);
  await user.tab();
  await user.keyboard("{Enter}");
  expect(screen.getByRole("button", { name: "Fechar menu" })).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  await user.click(screen.getByRole("link", { name: "Tratamentos" }));
  expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: "Abrir menu" }));
  await user.keyboard("{Escape}");
  expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
});
