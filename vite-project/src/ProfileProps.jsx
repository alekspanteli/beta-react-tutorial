// import AvatarProps from "./AvatarProps";

// export default function ProfileProps({ person, size }) {
//   return (
//     <>
//       <AvatarProps person={person} size={size} />
//     </>
//   );
// }

import AvatarProps from "./AvatarProps";

export default function ProfileProps(props) {
  return (
    <>
      <AvatarProps {...props} />
    </>
  );
}
