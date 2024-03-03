const TokenFunctions = {
    setToken: (data) => {
        const token = data.token;

        document.cookie = `jwt=${token}`;
    },

    getToken: () => {
        const cookie = document.cookie;
        const token = cookie.match(/jwt=([^;\n]+)/);

        return token ? token[1] : null;
    },
}

export default TokenFunctions;
