// import Gallery, { Profile } from "./Gallery";
import ProfileProps from "./ProfileProps";
import "./App.css";
function App() {
  return (
    <div className="container">
      <ProfileProps
        person={{ name: "Alex Panteli", imageId: "100" }}
        size={100}
      />
      <ProfileProps
        person={{ name: "Alex Panteli", imageId: "200" }}
        size={200}
      />
    </div>
  );
}

export default App;
