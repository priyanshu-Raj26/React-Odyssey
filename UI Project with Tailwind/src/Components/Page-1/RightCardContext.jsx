import { ArrowRight } from "lucide-react";

export default function RightCardContext({ user, id }) {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white h-12 w-12 text-xl font-semibold rounded-full flex justify-center items-center">
        {id + 1}
      </h2>
      <div>
        <p className="text-xl text-shadow-2xs leading-7 text-slate-100 mb-14 drop-shadow-md">
          {user.intro}
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: user.color }}
            className="text-white font-medium py-2 px-8 rounded-full text-lg"
          >
            {user.tag}
          </button>
          <button
            style={{ backgroundColor: user.color }}
            className="text-white font-medium py-2 px-3 rounded-full text-lg"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
