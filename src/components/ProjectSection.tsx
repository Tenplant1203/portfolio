import { ContentsCard } from "./ui/contents-card";

export default function ProjectSection() {
  return (
      <section id="project" className="my-auto scroll-m-20">
        <div className="flex flex-col items-center justify-center py-8">
          <h2 className="my-6 scroll-m-20 text-4xl font-semibold tracking-tight lg:text-4xl">
            My Projects
          </h2>
          <p className="text-muted-foreground">制作物(Coming Soon!)</p>
        </div>

        <div className="grid max-w-6xl gap-5 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          <ContentsCard />
          <ContentsCard />
          <ContentsCard />
        </div>
      </section>
  );
}
