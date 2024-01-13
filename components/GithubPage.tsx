"use client";
require('dotenv').config();

import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";





const GitHubPage = ({ userName }) => {
  const [user, setUser] = useState({
    avatar_url: null,
    login: null,
    name: null,
    bio: null,
    public_repos: null,
    followers: null,
  });


// Get your access token from the environment variable
const accessToken = process.env.GITHUB_API_ACCESS_TOKEN;



  
  async function getUserData(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`, {
        headers: {
          Accept: 'application/vnd.github.v3+json', // Use the v3 version of the API
          Authorization: `Bearer ${accessToken}`, // Include your access token in the Authorization header
        },
      });
      setUser(response.data)
      console.log(response.data); // This will log the user data to the console
    } catch (error) {
      console.error('Error fetching GitHub data', error);
    }
  }

  useEffect(() => {
    getUserData(userName);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div>
        {user.avatar_url === null ? null : (
          <Avatar>
            <AvatarImage src={user.avatar_url} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}

        <div className="grid grid-cols-2 gap-1 mt-2">
          <div className="flex flex-col">
            <p className="text-3xl">{user.name}</p>
            <p className="text-xl px-2 text-gray-400">{user.login}</p>
            {user.bio === null ? null : <p>{user.bio}</p>}
          </div>
          <div className="flex flex-col">
            {user.public_repos === null ? null : (
              <p>Public repos: {user.public_repos}</p>
            )}
            {user.followers === null ? null : (
              <p>Followers: {user.followers}</p>
            )}
          </div>
        </div>
        <div className="mt-5 border border-zinc-200 rounded-lg p-5">
          <GitHubCalendar
            username={userName}
            // theme={{
            //   light: ["hsl(0, 0%, 92%)", "#C83224"],
            // }}
          />
        </div>

        {/* Add more fields as needed */}
      </div>
    </div>
  );
};

export default GitHubPage;
