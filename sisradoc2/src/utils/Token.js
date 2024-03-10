import { jwtDecode } from "jwt-decode";

const TokenFunctions = {
    setToken: (token) => {
        document.cookie = `jwt=${token}`;
    },

    getToken: () => {
        const cookie = document.cookie;
        const token = cookie.match(/jwt=([^;\n]+)/);

        return token ? token[1] : null;
    },

    patternToken: (credential) =>{
        const tokenToPattern = jwtDecode(credential);
        
        const tokenPattern = {
            
        }

        return tokenPattern;
    },

    getName: (token) => {
        const tokenDecoded = jwtDecode(token);
        console.log("GET NAME: " + tokenDecoded);
        const name = tokenDecoded.name;

        return name;
    },

    getEmail: (token) => {
        const tokenDecoded = jwtDecode(token);
        const email = tokenDecoded.email;

        return email;
    },

    getSystem: (token) => {
        const tokenDecoded = jwtDecode(token);
        const system = tokenDecoded.system;

        return system;
    }
}

export default TokenFunctions;
