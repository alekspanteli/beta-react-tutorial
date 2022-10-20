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
    <article className="card">
      <AvatarProps {...props} />
    </article>
  );
}
