export const envVarsFix = () => {
  Object.keys(process.env)
    .filter((key) => key.startsWith(STORYBOOK_ENV_VAR_PREFIX))
    .forEach((key) => {
      const patchedKey = key.slice(STORYBOOK_ENV_VAR_PREFIX.length);

      process.env[patchedKey] = process.env[key];

      console.log(
        ">>> Patched",
        key,
        "to",
        `${patchedKey}=${process.env[key]}}`
      );
    });
};

const STORYBOOK_ENV_VAR_PREFIX = "STORYBOOK_";
