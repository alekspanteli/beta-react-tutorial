import AvatarProps from "./AvatarProps";

export default function ProfileProps() {
  return (
    <>
      <AvatarProps
        person={{ name: "Lin Lanying", imageId: "100" }}
        size={100}
      />
      <AvatarProps
        person={{ name: "Alex Panteli", imageId: "200" }}
        size={200}
      />
    </>
  );
}
