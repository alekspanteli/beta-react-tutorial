export function Profile() {
  return (
    <img
      className="rounded-md"
      src="https://via.placeholder.com/100"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <div className="flex flex-wrap gap-[10px]">
      <Profile />
      <Profile />
      <Profile />
    </div>
  );
}
