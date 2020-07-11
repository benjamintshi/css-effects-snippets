const icons = {
  logo: {
    paths: [
      {
        path:
          "M36.67 19.34a6.6 6.6 0 01-4.88-1.96 6.64 6.64 0 01-1.95-4.88 6.64 6.64 0 011.95-4.88 6.6 6.6 0 014.88-1.96 6.58 6.58 0 013.46.92 5.8 5.8 0 012.29 2.49l-1.9 1.09A3.85 3.85 0 0039 8.5a4.4 4.4 0 00-2.33-.62 4.4 4.4 0 00-3.26 1.32 4.5 4.5 0 00-1.31 3.3 4.47 4.47 0 001.31 3.28 4.4 4.4 0 003.26 1.32 4.53 4.53 0 002.34-.61 4.1 4.1 0 001.59-1.65l1.92 1.12a6.32 6.32 0 01-2.39 2.45 6.66 6.66 0 01-3.46.93zm9.94-9.83a1.37 1.37 0 00.75 1.2 6.76 6.76 0 001.82.74q1.07.27 2.13.62a4.13 4.13 0 011.82 1.2 3.14 3.14 0 01.76 2.17 3.42 3.42 0 01-1.37 2.83 5.51 5.51 0 01-3.5 1.07 6.08 6.08 0 01-3.25-.83 4.65 4.65 0 01-1.92-2.21l1.95-1.12a2.74 2.74 0 001.17 1.48 3.75 3.75 0 002.05.55 3.6 3.6 0 001.85-.43 1.44 1.44 0 00.73-1.34 1.37 1.37 0 00-.75-1.21 6.76 6.76 0 00-1.82-.73q-1.07-.27-2.13-.64a4.29 4.29 0 01-1.82-1.2 3.05 3.05 0 01-.76-2.13 3.46 3.46 0 011.31-2.78 4.97 4.97 0 013.3-1.1 5.53 5.53 0 012.81.72 4.58 4.58 0 011.86 2l-1.9 1.06a2.72 2.72 0 00-2.78-1.67 2.87 2.87 0 00-1.64.46 1.46 1.46 0 00-.67 1.29zm11.1 0a1.37 1.37 0 00.75 1.2 6.76 6.76 0 001.82.74q1.07.27 2.13.62a4.13 4.13 0 011.82 1.2 3.14 3.14 0 01.76 2.17 3.42 3.42 0 01-1.37 2.83 5.51 5.51 0 01-3.5 1.07 6.08 6.08 0 01-3.25-.83 4.65 4.65 0 01-1.92-2.21l1.95-1.12a2.74 2.74 0 001.17 1.48 3.75 3.75 0 002.05.55 3.6 3.6 0 001.85-.43 1.44 1.44 0 00.73-1.34 1.37 1.37 0 00-.75-1.21 6.76 6.76 0 00-1.82-.73q-1.07-.27-2.13-.64a4.29 4.29 0 01-1.82-1.2 3.05 3.05 0 01-.76-2.13 3.46 3.46 0 011.31-2.78 4.97 4.97 0 013.3-1.1 5.53 5.53 0 012.81.72 4.58 4.58 0 011.86 2l-1.9 1.06a2.72 2.72 0 00-2.78-1.67 2.87 2.87 0 00-1.64.46 1.46 1.46 0 00-.67 1.29zm11.18 4.03a4.29 4.29 0 001.6 2.7 4.97 4.97 0 003.1.96 4.07 4.07 0 003.75-1.9l1.92 1.1a6.35 6.35 0 01-5.72 2.94 6.8 6.8 0 01-5.03-1.94 6.64 6.64 0 01-1.94-4.9 6.73 6.73 0 011.9-4.89 6.55 6.55 0 014.92-1.95 5.98 5.98 0 014.66 2.02 7.01 7.01 0 011.8 4.85 6.83 6.83 0 01-.07 1.01zm4.5-5.75a4.47 4.47 0 00-3.02 1.03 4.45 4.45 0 00-1.48 2.74h8.68a4.33 4.33 0 00-1.45-2.8 4.17 4.17 0 00-2.73-.97zm22.44-5.4q-3.41-.29-3.41 2.96V6h3.4v2.18h-3.4V19h-2.26V8.18h-4.84V19h-2.26V8.18h-2.08V6h2.08v-.39a5.14 5.14 0 011.47-3.98A5.46 5.46 0 0188.75.46v2.19q-3.43-.29-3.43 2.96V6h4.84v-.65a5.17 5.17 0 011.45-3.98A5.42 5.42 0 0195.82.2zm2.6 11.15a4.29 4.29 0 001.6 2.7 4.97 4.97 0 003.1.96 4.07 4.07 0 003.75-1.9l1.92 1.1a6.35 6.35 0 01-5.72 2.94 6.8 6.8 0 01-5.03-1.94 6.64 6.64 0 01-1.94-4.9 6.73 6.73 0 011.9-4.89 6.55 6.55 0 014.91-1.95 5.98 5.98 0 014.67 2.02 7.01 7.01 0 011.8 4.85 6.83 6.83 0 01-.07 1.01zm4.5-5.75a4.47 4.47 0 00-3.02 1.03 4.45 4.45 0 00-1.48 2.74h8.68a4.33 4.33 0 00-1.46-2.8 4.17 4.17 0 00-2.73-.97zm15.15 11.55a6.6 6.6 0 01-4.89-1.96 6.64 6.64 0 01-1.95-4.88 6.64 6.64 0 011.95-4.88 6.6 6.6 0 014.89-1.96 6.58 6.58 0 013.46.92 5.8 5.8 0 012.29 2.49l-1.9 1.09a3.85 3.85 0 00-1.52-1.66 4.4 4.4 0 00-2.33-.62 4.4 4.4 0 00-3.26 1.32 4.5 4.5 0 00-1.32 3.3 4.47 4.47 0 001.32 3.28 4.4 4.4 0 003.26 1.32 4.53 4.53 0 002.34-.61 4.1 4.1 0 001.59-1.65l1.92 1.12a6.32 6.32 0 01-2.4 2.45 6.66 6.66 0 01-3.45.93zm15.16-11.16h-3.46v7.05a1.98 1.98 0 00.38 1.37 1.55 1.55 0 001.15.41q.78.01 1.93-.04V19a6.69 6.69 0 01-4.34-.48q-1.38-.87-1.38-3.29V8.18h-2.57V6h2.57V3.04l2.26-.68V6h3.46zm4 1.33a1.37 1.37 0 00.75 1.2 6.76 6.76 0 001.82.74q1.07.27 2.13.62a4.13 4.13 0 011.82 1.2 3.14 3.14 0 01.76 2.17 3.42 3.42 0 01-1.37 2.84 5.51 5.51 0 01-3.5 1.06 6.08 6.08 0 01-3.25-.83 4.65 4.65 0 01-1.92-2.21l1.95-1.12a2.74 2.74 0 001.17 1.48 3.75 3.75 0 002.05.55 3.6 3.6 0 001.85-.43 1.44 1.44 0 00.73-1.34 1.37 1.37 0 00-.76-1.2 6.76 6.76 0 00-1.82-.74q-1.06-.27-2.13-.63a4.29 4.29 0 01-1.82-1.2 3.05 3.05 0 01-.75-2.13 3.46 3.46 0 011.31-2.79 4.97 4.97 0 013.29-1.09 5.53 5.53 0 012.82.72 4.58 4.58 0 011.86 1.99l-1.9 1.06a2.72 2.72 0 00-2.78-1.66 2.87 2.87 0 00-1.64.45 1.46 1.46 0 00-.67 1.29z"
      },

      {
        path: "M12.74 6.37a6.37 6.37 0 10-1.87 4.5 6.37 6.37 0 001.87-4.5z",
        fill: "#4c51bf"
      },
      {
        path: "M12.74 18.53a2.32 2.32 0 11-2.32-2.31 2.32 2.32 0 012.32 2.31z",
        fill: "#a3bffa"
      },
      {
        path: "M16.8 9.27a4.05 4.05 0 104.05 4.05 4.05 4.05 0 00-4.06-4.05z",
        fill: "#667eea"
      }
    ]
  }
};
export default icons;