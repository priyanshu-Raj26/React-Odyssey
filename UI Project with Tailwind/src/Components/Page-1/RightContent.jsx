import { useRef, useEffect } from "react";
import RightCard from "./RightCard";

export default function RightContent(props) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      id="right"
      ref={ref}
      className="h-full rounded-4xl overflow-x-auto flex flex-nowrap gap-10 p-6 w-2/3 cursor-grab select-none"
    >
      {props.users.map((user, idx) => {
        return <RightCard user={user} key={idx} id={idx} />;
      })}
    </div>
  );
}
