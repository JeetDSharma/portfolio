import React, { useState } from "react";
import { Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion

const EmailWithCopy = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("jeetsharma2112@gmail.com");
    setIsCopied(true); // Show the modal
    setTimeout(() => setIsCopied(false), 2000); // Hide the modal after 2 seconds
  };

  return (
    <div className="relative text-center mt-4">
      {/* Email Display */}
      <p className="flex items-center justify-center gap-2">
        📩 <strong>Email:</strong>
        <a
          href="mailto:jeetsharma2112@gmail.com"
          className="text-blue-500 underline"
        >
          jeetsharma2112@gmail.com
        </a>
        {/* Copy to Clipboard Button */}
        <button
          onClick={copyToClipboard}
          className="ml-2 p-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          title="Copy to clipboard"
        >
          <Copy className="w-5 h-5" />
        </button>
      </p>

      {/* Animated Modal with Framer Motion */}
      <AnimatePresence>
        {isCopied && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-black text-white text-sm rounded-md shadow-lg"
          >
            Email copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmailWithCopy;
