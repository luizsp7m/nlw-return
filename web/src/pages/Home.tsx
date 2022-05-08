import { Sidebar } from "../components/Sidebar";
import { Widget } from "../components/Widget";

export function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <Sidebar />
      <Widget />
    </div>
  );
}