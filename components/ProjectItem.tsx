import { HiClock, HiFire, HiGlobeAlt, HiUser } from "react-icons/hi";
import CustomLink from "./Link";

type ProjectItemProps = {
  project: any;
  index: number;
};

export function ProjectItem({ project, index }: ProjectItemProps) {
  return (
    <div className="relative w-full max-w-30 rounded-xl md:w-auto">
      <div className="flex flex-row items-center space-x-2">
        <h2 className="text-xl font-semibold text-gray-200">{project.title}</h2>
      </div>
      <p className="mt-1 text-gray-400">{project.description}</p>
      <div className="flex flex-row my-3 space-x-3">
        <div className="flex flex-row items-center space-x-1">
          <HiUser className="text-sm fill-gray-500" />
          <span className="text-sm text-gray-500">
            {project.author.firstname + " " + project.author.lastname}
          </span>
        </div>
        <div className="flex flex-row items-center space-x-1">
          <HiGlobeAlt className="text-sm fill-gray-500" />
          <span className="text-sm text-gray-500">
            {project.status == "DEVELOPMENT"
              ? "In Development"
              : "In Production"}
          </span>
        </div>
        <div className="flex flex-row items-center space-x-1">
          <HiClock className="text-sm fill-gray-500" />
          <span className="text-sm text-gray-500">
            {new Date(project.publishedAt).toLocaleDateString()}
          </span>
        </div>
      </div>
      <CustomLink href={"/projects/" + project.slug}>See more</CustomLink>
    </div>
  );
}
