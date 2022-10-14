export default function Avatar() {
  const avatar = "https://via.placeholder.com/100";
  const desc = "Alex Panteli";
  return (
    <>
      <h1 style={{ backgroundColor: "red" }}>Hello {desc}</h1>
      <img className="avatar" src={avatar} alt={desc} />
    </>
  );
}
