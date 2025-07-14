const par=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h2",{},"I am a sibling 1"),
        React.createElement("h2",{},"I am a sibling 2")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h2",{},"I am a sibling 1"),
        React.createElement("h2",{},"I am a sibling 2")
    ])

]
   
    
);

const heading = React.createElement( // creates object 
    "h1", 
    {id:"heading",s:"abc"}, 
    "Hello World from React!!!"
);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(par); // converting heading object to h1 tag