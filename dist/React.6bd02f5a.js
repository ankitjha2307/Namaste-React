inport;
const heading = React.createElement("h1", {
    id: "heading",
    className: "headingClass"
}, "Hello World");
//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(heading); 
//  <div id="parent">
//         <div id="child">
//             <h1>I m h1</h1>
//         </div>
// </div>
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "I m h1"), React.createElement("h1", {}, "Ankit")));
const root = ReactDOM.createRoot(document.getElementById("hello"));
root.render(parent);

//# sourceMappingURL=React.6bd02f5a.js.map
