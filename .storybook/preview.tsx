import React from "react";
import { envVarsFix } from "./envVarsFix";

envVarsFix();

import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <>
          <div>ENV[{process.env.NEXT_PUBLIC_TWICPICS_DOMAIN}]</div>
          <Story />
        </>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
