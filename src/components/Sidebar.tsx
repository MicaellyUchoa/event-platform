import { gql, useQuery } from "@apollo/client";
import { LessonsQueryResponse } from "../data-access/LessonsQueryResponse";
import ILesson from "../interfaces/ILesson";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      availableAt
      lessonType
    }
  }
`;

export function Sidebar() {
  const { data } = useQuery<LessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className="sm:w-full md:w-[400px] p-6 bg-gray-700 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Cronograma de aulas</span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            type={lesson.lessonType}
            availableAt={new Date(lesson.availableAt)}
            slug={lesson.slug}
          />
        ))}
      </div>
    </aside>
  );
}
