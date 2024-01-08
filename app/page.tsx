"use client";
import Image from "next/image";
import GitHubPage from "@/components/GithubPage";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <GitHubPage userName="tommypurcell" />
    </div>
  );
}
