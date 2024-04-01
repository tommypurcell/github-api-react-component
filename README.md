This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# GitHub API Stats Component

This repository contains a React component designed to display GitHub API statistics for a given GitHub user. It uses the GitHub API to fetch user information and renders it on a web page. This component is built using Next.js and relies on several dependencies, including axios for making API requests and react-github-calendar for displaying GitHub contribution calendars.

## Usage

To use this component in your Next.js project, follow these steps:

1. Install the necessary dependencies in your project:

   ```bash
   npm install axios react react-github-calendar
   ```

```bash
import GitHubPage from "@/path/to/GitHubPage";

// Use the GitHubPage component within your Next.js app
const YourComponent = () => {
  // ...

  return (
    <div>
      {/* Other content */}
      <GitHubPage userName="your-github-username" />
    </div>
  );
};
```

Replace `bash "your-github-username"` with the GitHub username for which you want to display statistics.

Customize the component as needed. You can modify the appearance, add more fields, or adjust the styling to suit your application's design.

### Component Features

- Display user avatar, name, login, bio, public repositories, and followers (if available).
- Fetch user data from the GitHub API using Axios.
- Render a GitHub contribution calendar using react-github-calendar by Jonathan Gruber.

### Example Output

The GitHubPage component will render user information, including the avatar, name, login, bio, public repositories, and followers (if available). Additionally, it will display a GitHub contribution calendar for the specified GitHub user.

![example output for the github component](/app/public/screenshot-profile.png)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
