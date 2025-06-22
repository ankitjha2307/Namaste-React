import React from "react";
import ReactDOM from "react-dom/client"; 

//  React.element => Object => HTMLElement

// const heading = React.createElement("h1",
//   {id: "heading"},
//   "hello world"
// );

// JSX

const Title = () => (<h1 id="heading">
  hello world using JSX
  </h1>);


const number = 2678;

const HeaderComponent = () => {
  return (
    <div id="container">
      <Title /> 
       {/* this is a component composition example */}
       <h1>{number}</h1> 
      <h1>Namaste Ankit</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);

// console.log(heading);
// console.log(jsxheading);


 


// root.render(heading);
// root.render(jsxheading);

  
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

