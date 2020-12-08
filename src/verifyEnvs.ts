/**
 * Verify whether the environment variables required to open the server are null or not.
 * If any of them is null, throw an exception.
 */
const verifyEnvs = (keys: string[]) => {
    for (const key of keys) {
        if (!process.env[key]) {
            throw new Error(`process.env.${key} is not defined.`);
        }
    }
};

export { verifyEnvs };
