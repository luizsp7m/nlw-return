import { Presentation } from "../components/Presentation";
import { Widget } from "../components/Widget";

export function Home() {
  return (
    <div className="flex flex-col items-center">
      <Presentation />

      <div className="flex gap-2 bg-slate-200 p-3 rounded-lg">
        <button className="h-12 w-32 bg-slate-100 rounded-lg font-medium transition-colors hover:bg-slate-100">Projects</button>
        <button className="h-12 w-32 bg-slate-200 rounded-lg font-medium transition-colors hover:bg-slate-100">Skill</button>
      </div>

      <Widget />
    </div>
  );
}