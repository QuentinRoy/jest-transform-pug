test("Simple case", () => {
  const template = require("./templates/template-simple.pug");
  expect(template()).toMatchSnapshot();
});

test("With arguments", () => {
  const template = require("./templates/template-with-args.pug");
  expect(
    template({ url: "http://example.com", title: "Test Title" }),
  ).toMatchSnapshot();
  expect(
    template({ url: "http://something-else.com", title: "Other title" }),
  ).toMatchSnapshot();
});

test("With include", () => {
  const template = require("./templates/template-with-include.pug");
  expect(template()).toMatchSnapshot();
});

test("With extends", () => {
  const template = require("./templates/template-with-extends.pug");
  expect(template()).toMatchSnapshot();
});
