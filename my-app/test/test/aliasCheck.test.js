import { GenreNavBar } from '@/components'

test("alias import works", () => {
  expect(typeof GenreNavBar).toBe("function");
});
