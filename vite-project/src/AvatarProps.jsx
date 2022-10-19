export default function AvatarProps({ person, size = 50 }) {
  return (
    <>
      <img
        className="avatar"
        src={`https://via.placeholder.com/${person.imageId}`}
        alt={person.name}
        width={size}
        height={size}
      />
    </>
  );
}
