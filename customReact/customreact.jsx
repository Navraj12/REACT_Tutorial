function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.Children;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
}
const react = {
  type: "a",
  props: {
    href: "http://google.com",
    target: "_blank",
  },
  Children: "Click me to visit google",
};
const mainContainer = document.querySelector("#root");
