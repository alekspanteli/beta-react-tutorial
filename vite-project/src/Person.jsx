const baseUrl = "https://via.placeholder.com/";
const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
  imageId: "100",
};

export default function Person() {
  const desc = "Alex Panteli";
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img src={baseUrl + person.imageId} alt={desc} />
    </div>
  );
}
