import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Jayati Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection sectionId="articles" heading="Work Experiences"/>  */}
        <AboutSection sectionId="about" heading="My Story" />
        <InterestsSection sectionId="details" heading="Skills" />
        <ProjectsSection sectionId="features" heading="Project Highlights" />
        <ContactSection sectionId="github" heading="Want to Chat?" />
      </Page>
    </>
  );
}
