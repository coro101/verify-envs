import { verifyEnvs } from '../src';

it('should throw an exception with invalid env', async () => {
    expect(() => verifyEnvs(['FLY_ME_TO_THE_MOON']))
        .toThrowError();
});
