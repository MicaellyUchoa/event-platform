import { Lesson } from "./Lesson";

export function Sidebar() {
  return (
    <aside className="sm:w-full md:w-[400px] p-6 bg-gray-700 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Cronograma de aulas</span>
      <div className="flex flex-col gap-8">
        <Lesson title="Abertura" type="live" availableAt={new Date(Date.now())} slug="abertura" />
      </div>
    </aside>
  );
}
