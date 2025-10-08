import GenreNavBar from "components/GenreSelect/GenreNavBar";

test("alias import works", () => {
  expect(typeof GenreNavBar).toBe("function");
});
