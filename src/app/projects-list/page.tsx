import ListProjects from "@/components/ListProjects";

export default function ProjectsList() {
  return <>
    <div className="max-w-screen-md mx-auto pt-10 pb-2 px-6">
      <h1 className="text-2xl pt-4 md:text-4xl md:pt-8 font-bold pb-5 md:pb-8">Projects List</h1>

      <ListProjects />
    </div>
  </>
}