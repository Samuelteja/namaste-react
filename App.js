const heading = React.createElement("div", 
{id: "content"}, 
[React.createElement("h1", 
{id: "heading"}, "This is heading"),
React.createElement("p", 
{id: "paragraph"}, "This is paragraph")], );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);