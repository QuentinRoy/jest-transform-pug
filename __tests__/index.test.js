test("Simple case", () => {
  const template = require("./simple-template.pug");
  expect(template()).toMatchSnapshot();
});

test("With arguments", () => {
  const template = require("./template-with-args.pug");
  expect(
    template({ url: "http://example.com", title: "Test Title" }),
  ).toMatchSnapshot();
});
