export default interface ILesson {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}
