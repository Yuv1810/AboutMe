"use client";
import Book from "@/component/Book";
import ContactPage from "@/component/Contact";
import Education from "@/component/Education";
import ExperiencePage from "@/component/Experince";
import ProjectPage from "@/component/Project";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f0f4f8] w-screen h-screen">
       
      <Book></Book>
      <Education/>
      <ExperiencePage></ExperiencePage>
      <ProjectPage></ProjectPage>
      <ContactPage></ContactPage>
    </div>
  );
}
