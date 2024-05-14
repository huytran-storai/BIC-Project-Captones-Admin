module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: env("SMTP_HOST"),
        port: env("SMTP_PORT"),
        secure: true,
        auth: {
          type: "OAuth2",
          user: env("SMTP_USERNAME"),
          clientId: env("SMTP_CLIENT_ID"),
          clientSecret: env("SMTP_CLIENT_SECRET"),
          refreshToken: env("SMTP_REFRESH_TOKEN"),
          accessToken: env("SMTP_ACCESS_TOKEN"),
          expires: 3599,
        },
        rejectUnauthorized: true,
        requireTLS: true,
        logger: true,
        debug: true,
        pool: true,
        maxConnections: 10000,
      },

      settings: {
        defaultFrom: env("DEFAULT_EMAIL"),
        defaultReplyTo: env("DEFAULT_EMAIL"),
      },
    },
  },
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
      jwt: {
        expiresIn: "7d",
      },
      register: {
        allowedFields: ["phone", "address"],
      },
    },
  },
});
