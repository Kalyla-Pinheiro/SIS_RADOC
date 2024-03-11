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
    },

    verificar_usuario: async (email) => {

        try {
            const response = await fetch(`${apiurls.verificar_usuario}?email=${email}`);

            if (!response.ok) {
                const error = await response.json();
                return error;
            }

            const data = await response.json();
            return data; 
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    },
}

export default AuthFunctions;