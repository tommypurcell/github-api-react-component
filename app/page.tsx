"use client"
import Image from "next/image";
import GitHubPage from "@/components/GithubPage";
import { useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputUserName = event.target.elements.githubInput.value;
    setUserName(inputUserName);
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="grid grid-cols-1 gap-y-1 place-items-center">
        <GitHubPage userName={userName} />
        <div>
          <h1>Enter Github Username</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="border border-black"
              type="text"
              name="githubInput"
            />
            <button type="submit" className="ml-2">
              Submit
            </button>
        </form>
        </div>
      </div>
    </div>
  );
}
