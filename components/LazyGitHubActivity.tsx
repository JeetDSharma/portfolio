"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const GitHubActivity = dynamic(() => import("./GitHubActivity"), {
  ssr: false,
  loading: () => <GitHubActivitySkeleton />,
});

const GitHubActivitySkeleton = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="flex items-center justify-between mb-6">
        <div className="h-5 w-40 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded"></div>
      </div>

      <div className="w-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded">
        <div className="space-y-3">
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
        </div>

        <div className="mt-6 grid grid-cols-7 gap-1">
          {Array.from({ length: 364 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gray-200 dark:bg-gray-800 rounded-sm"
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <div className="h-3 w-12 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gray-200 dark:bg-gray-800 rounded"
            ></div>
          ))}
        </div>
        <div className="h-3 w-12 bg-gray-200 dark:bg-gray-800 rounded"></div>
      </div>
    </div>
  );
};

const LazyGitHubActivity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "100px" }}
      className="max-w-4xl mx-auto"
    >
      <Suspense fallback={<GitHubActivitySkeleton />}>
        <GitHubActivity />
      </Suspense>
    </motion.div>
  );
};

export default LazyGitHubActivity;
