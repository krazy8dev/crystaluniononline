export const config = {
  api: {
    baseUrl:
      // process.env.NEXT_PUBLIC_API_URL ||
      // "https://developersgridapi.onrender.com/api",
      "https://developersgridapi.onrender.com/api",

    endpoints: {
      auth: {
        register: "/auth/register",
        login: "/auth/login",
        verifyEmail: "/auth/verify-email",
        forgotPassword: "/auth/forgot-password",
        resetPassword: "/auth/reset-password",
      },
      admin: {
        dashboard: "/admin/dashboard",
        users: "/admin/users",
        getUserById: (id: string) => `/admin/users/${id}`,
        updateUser: (id: string) => `/admin/users/${id}`,
        deleteUser: (id: string) => `/admin/users/${id}`,
        topUpUser: (id: string) => `/admin/users/${id}/top-up`,
        createTransfer: "/admin/transfer",
        transactions: {
          stats: "/admin/transactions/stats",
          pending: "/admin/transactions/pending",
          getById: (id: string) => `/admin/transactions/${id}`,
          updateStatus: (id: string) => `/admin/transactions/${id}/status`,
          updateDate: (id: string) => `/admin/transactions/${id}/update-date`,
          verifyAccount: "/admin/transactions/verify-account",
        },
      },
    },
  },
  auth: {
    // 3 months in seconds: 3 months * ~30 days * 24 hours * 60 minutes * 60 seconds
    sessionDuration: 3 * 30 * 24 * 60 * 60,
    cookie: {
      token: {
        name: "token",
        options: {
          path: "/",
          sameSite: "lax" as const,
        },
      },
      expireAt: {
        name: "expireAt",
        options: {
          path: "/",
          sameSite: "lax" as const,
        },
      },
    },
  },
} as const;

// Type-safe way to access config values
export type Config = typeof config;
export type ApiEndpoints = typeof config.api.endpoints;
export type AuthConfig = typeof config.auth;
