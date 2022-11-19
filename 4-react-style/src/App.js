import './App.css';

let customCss = {
  color: "#85C1E9",
  fontFamily: "sans-serif",
  fontSize: "19px"
};

function App() {
  return (
    <>
    <h1
      style={{
        color: "#117A65",
        textDecoration: "underline",
        fontFamily: "sans-serif"
      }}
    >
      What is React?
    </h1>
    <p style={{ color: "#52BE80", fontSize: "20px" }}>
      React is frontend library developed by facebook.
    </p>
    <h3 style={{ color: "#2471A3", fontSize: "22px" }}>
      Some other famous frontend framework.
    </h3>
    <ul style={customCss}>
      <li>Angular</li>
      <li>Vue.js</li>
      <li>JQuery</li>
    </ul>
  </>
  );
}

export default App;
