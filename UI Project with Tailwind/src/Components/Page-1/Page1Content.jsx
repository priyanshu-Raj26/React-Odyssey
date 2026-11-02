import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function Page1Content(props) {
  return (
    <div className="pb-16 flex items-center gap-10 h-[90vh]  px-18">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
}
