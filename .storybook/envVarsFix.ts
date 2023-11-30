export const envVarsFix = () => {
  Object.keys(process.env)
    .filter((key) => key.startsWith(STORYBOOK_ENV_VAR_PREFIX))
    .forEach((key) => {
      process.env[key.slice(STORYBOOK_ENV_VAR_PREFIX.length)] =
        process.env[key];
    });
};

const STORYBOOK_ENV_VAR_PREFIX = "STORYBOOK_";
