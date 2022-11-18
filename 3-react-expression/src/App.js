var fname = "Zahid";
var lname = "Hussain";
const date = new Date();
var year = date.getFullYear();

function App() {
  return (
    <div>
    <p>Created by {fname + " " + lname}</p>
    <p>Copyright {year}</p>
  </div>
  );
}

export default App;
