"use client";

import React, { useEffect, useState } from "react";

interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  accountAge: number;
}

const GitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(
          "https://api.github.com/users/JeetDSharma"
        );
        const userData = await userResponse.json();

        // Fetch repos to count stars
        const reposResponse = await fetch(
          "https://api.github.com/users/JeetDSharma/repos?per_page=100"
        );
        const reposData = await reposResponse.json();

        const totalStars = reposData.reduce(
          (acc: number, repo: any) => acc + repo.stargazers_count,
          0
        );

        // Calculate account age
        const createdDate = new Date(userData.created_at);
        const now = new Date();
        const accountAge = Math.floor(
          (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24 * 365)
        );

        setStats({
          totalRepos: userData.public_repos,
          totalStars,
          accountAge,
        });
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        // Fallback to static values if API fails
        setStats({
          totalRepos: 45,
          totalStars: 120,
          accountAge: 4,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-6 py-4 text-xs font-mono text-gray-400 dark:text-gray-600 animate-pulse">
        <span>Loading stats...</span>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-center gap-8 text-xs font-mono text-gray-600 dark:text-gray-400">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {stats.totalRepos}
          </span>
          <span className="uppercase tracking-wider">Repositories</span>
        </div>
        <div className="w-px h-12 bg-gray-200 dark:bg-gray-800"></div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {stats.totalStars}
          </span>
          <span className="uppercase tracking-wider">Stars</span>
        </div>
        <div className="w-px h-12 bg-gray-200 dark:bg-gray-800"></div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {stats.accountAge}+
          </span>
          <span className="uppercase tracking-wider">Years Coding</span>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
