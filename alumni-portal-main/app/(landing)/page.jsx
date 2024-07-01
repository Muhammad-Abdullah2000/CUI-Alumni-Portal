import Hero from "./sections/Hero";
import IndividualSteps from "./sections/IndividualSteps";
import MentorCarousal from "./sections/MentorCarousal";
import OrganizationSteps from "./sections/OrganizationSteps";
import WordDictionary from "./sections/WordDictionary";

export default function Home() {
  return (
    <main className="my-16">
      <Hero />
      <MentorCarousal />
      <OrganizationSteps />
      <IndividualSteps />
      <WordDictionary />
    </main>
  );
}
