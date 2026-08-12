import { hackathons } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import SectionHeading from "./SectionHeading";

export default function HackathonsSection() {
  return (
    <section id="hackathons" className="scroll-mt-16 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <MotionWrapper>
          <SectionHeading>Hackathons</SectionHeading>
        </MotionWrapper>

        <div className="divide-y divide-muted-foreground border-b-2 border-foreground">
          {hackathons.map((h, idx) => (
            <MotionWrapper key={h.name + h.date} delay={idx * 0.04}>
              <div className="grid gap-3 py-5 md:grid-cols-[1fr_auto] md:items-center md:gap-8 md:py-6">
                <div className="min-w-0">
                  <h3 className="text-lg font-black md:text-xl">{h.name}</h3>
                  {h.description && (
                    <p className="mt-0.5 text-sm text-muted-foreground">{h.description}</p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2 text-sm md:justify-end">
                  <span className="font-semibold text-muted-foreground tabular-nums">{h.date}</span>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
