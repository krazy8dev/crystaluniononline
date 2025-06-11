"use client";

import React from "react";
import { Circle } from "lucide-react";

const Personal = () => {
  const getCurrentDate = () => {
    const now = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "p.m." : "a.m.";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");

    return `${month} ${day}, ${year}, ${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Personal Overview
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Last Login {getCurrentDate()}
          </p>
        </div>

        <div className="relative h-32 w-32">
          {/* Circular progress background */}
          <div className="absolute inset-0">
            <svg className="h-full w-full" viewBox="0 0 100 100">
              <circle
                className="stroke-blue-100 stroke-[8]"
                cx="50"
                cy="50"
                r="40"
                fill="none"
              />
              <circle
                className="stroke-yellow-400 stroke-[8]"
                cx="50"
                cy="50"
                r="40"
                fill="none"
                strokeDasharray="251.2"
                strokeDashoffset="62.8"
                transform="rotate(-90 50 50)"
              />
              <circle
                className="stroke-red-400 stroke-[8]"
                cx="50"
                cy="50"
                r="40"
                fill="none"
                strokeDasharray="251.2"
                strokeDashoffset="188.4"
                transform="rotate(-90 50 50)"
              />
              <circle
                className="stroke-blue-600 stroke-[8]"
                cx="50"
                cy="50"
                r="40"
                fill="none"
                strokeDasharray="251.2"
                strokeDashoffset="125.6"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Circle className="h-8 w-8 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm text-gray-600">
          This site provides information about and access to services offered by
          the Institution and all its respective affiliates or partners.
        </p>
        <p className="mt-4 text-xs text-gray-500">
          ©2022 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Personal;
