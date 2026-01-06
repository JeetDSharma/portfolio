"use client";

import React from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

const GitHubActivity = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-mono uppercase tracking-wider text-gray-900 dark:text-gray-100">
          GitHub Activity
        </h3>
        <a
          href="https://github.com/JeetDSharma"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          @JeetDSharma →
        </a>
      </div>

      <div className="w-full overflow-x-auto">
        <GitHubCalendar
          username="JeetDSharma"
          colorScheme={theme === "dark" ? "dark" : "light"}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          style={{
            width: "100%",
          }}
          theme={{
            light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#2c7da0", "#014f86"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
        />
      </div>

      <div className="mt-4 flex items-center gap-4 text-xs font-mono text-gray-500 dark:text-gray-400">
        <span>Less</span>
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"></div>
          <div className="w-3 h-3 bg-green-200 dark:bg-green-900 border border-gray-300 dark:border-gray-700"></div>
          <div className="w-3 h-3 bg-green-400 dark:bg-green-700 border border-gray-300 dark:border-gray-700"></div>
          <div className="w-3 h-3 bg-green-600 dark:bg-green-500 border border-gray-300 dark:border-gray-700"></div>
          <div className="w-3 h-3 bg-green-800 dark:bg-green-300 border border-gray-300 dark:border-gray-700"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

export default GitHubActivity;
