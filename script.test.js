function sum(a, b) {
  return a + b
}

test("Sum", () => {
  expect(sum(2, 2)).toBe(5)
})
