const env = {
    dev: 'dev', test: 'test', stg: 'stg', product: 'product', local: 'local',
};
const API_URL = {
    local: '',
    dev: '',
    test: '',
    stg: '',
    product: '',
};
const currentEnv = env.product;

export const BASE_API_URL = API_URL[currentEnv];
export const USER_TOKEN = 'USER_TOKEN';
