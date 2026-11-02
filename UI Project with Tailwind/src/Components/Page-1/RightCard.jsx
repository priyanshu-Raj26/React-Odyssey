import RightCardContext from "./RightCardContext";

export default function RightCard({ user, id }) {
  return (
    <div className="h-full w-80 shrink-0 rounded-4xl overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src={user.img}
        alt="unplash image"
      />
      <RightCardContext user={user} id={id} />
    </div>
  );
}
