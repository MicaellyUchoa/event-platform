import { Header } from "../components/Header";
import { Lesson } from "../components/Lesson";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  return (
    <>
      <Header />
      <main className="sm:block md:flex">
        <Video />
        <Sidebar />
      </main>
      <Lesson />
    </>
  );
}
