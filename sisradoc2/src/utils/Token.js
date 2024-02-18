const TokenFunctions = {
    setToken: (token) => {
        document.cookie = `jwt=${token}`;
    },
    
    getToken: () => {
        const token = document.cookie;
        if (token) {
            return token;
        }
        return null;
    }
}