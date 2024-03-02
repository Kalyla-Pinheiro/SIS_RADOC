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
    },

    setUserName: (nomeUsuario) => {
        document.cookie = `nomeUsuario=${nomeUsuario}`;
    },

    /*
    getNomeUsuario: () => {
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        for (let cookie of cookies) {
            const [nome, value] = cookie.split('=');
            if (nome === 'jwt') {
                const token = value;
                const secretKey = "secretkeynotrevealed";
                try {
                    const decoded = jwt.verify(token, secretKey);
                    return decoded;
                  } catch (error) {
                    console.error('Erro ao decodificar token:', error);
                    return null;
                  }
            }
        }
        return cookies;
    }
    */
}

export default TokenFunctions;
