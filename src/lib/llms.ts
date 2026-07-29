import type { BlogPost } from "@/lib/blog";
import { personalInfo, selectedWork, workExperience } from "@/lib/data";
import { absoluteUrl, DEFAULT_SITE_DESCRIPTION } from "@/lib/seo";

export function buildLlmsTxt(origin: string, posts: BlogPost[]): string {
  const home = absoluteUrl(origin, "/");
  const blog = absoluteUrl(origin, "/blog/");
  const resume = absoluteUrl(origin, personalInfo.resume);
  const experienceAnchor = absoluteUrl(origin, "/#experience");
  const workAnchor = absoluteUrl(origin, "/#work");
  const currentRole = workExperience[0];

  const lines: string[] = [
    `# ${personalInfo.name}`,
    `> ${DEFAULT_SITE_DESCRIPTION}`,
    "",
    personalInfo.heroDescription,
  ];

  if (currentRole) {
    lines.push(
      "",
      `Current role: ${currentRole.position} at ${currentRole.company} (${currentRole.period}).`,
    );
  }

  lines.push(
    "",
    "## Pages",
    `- [Home](${home}): Experience, selected work, skills, awards, and education`,
    `- [Blog](${blog}): Writing and notes on software engineering`,
    `- [Resume](${resume}): PDF resume`,
    "",
    "## Experience",
  );

  for (const job of workExperience) {
    const summary = job.achievements[0] ?? "";
    lines.push(
      `- [${job.company} — ${job.position}](${experienceAnchor}): ${job.period}. ${summary}`,
    );
  }

  lines.push("", "## Selected work");

  for (const project of selectedWork) {
    lines.push(`- [${project.title}](${workAnchor}): ${project.summary}`);
  }

  if (posts.length > 0) {
    lines.push("", "## Blog");

    for (const post of posts) {
      lines.push(
        `- [${post.data.title}](${absoluteUrl(origin, `/blog/${post.id}/`)}): ${post.data.description}`,
      );
    }
  }

  lines.push(
    "",
    "## Elsewhere",
    `- [GitHub](${personalInfo.github})`,
    `- [LinkedIn](${personalInfo.linkedin})`,
    `- [Email](mailto:${personalInfo.email})`,
  );

  return `${lines.join("\n")}\n`;
}
