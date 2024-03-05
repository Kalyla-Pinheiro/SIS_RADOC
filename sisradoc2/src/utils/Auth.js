import apiurls from "../apis/apiUrls";

const AuthFunctions = {
    googleOAuthSuccess: async (credentials) => {

    },
    googleOAuthFailure:async (credentials) => {

    },

    apiAuthLogin: async (userEmail, userPassword) => {
        try {
            const bodyArgs = {
                email: userEmail,
                senha: userPassword
            };

            console.log(bodyArgs);

            const response = await fetch(apiurls.login, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyArgs)
            });

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }

            return response.json();
        } catch (error) {
            console.error('Erro na requisição:', error);
            throw error;
        }
    }
}

export default AuthFunctions;