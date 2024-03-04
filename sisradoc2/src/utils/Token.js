import { jwtDecode } from "jwt-decode";
const jwt = require("jsonwebtoken"); // Importar JWT

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

    patternToken: (credential) =>{
        const tokenToPattern = jwtDecode(credential);
        let token;
        try {
            token = jwt.sign(
            {
                nomeUsuario: tokenToPattern.name,
                email: tokenToPattern.email,
                system: "sisradoc"
            },
                "secretkeynotrevealed", // Chave secreta para a criação do token
            { expiresIn: "24h" }
            ); // Tempo de expiração do token
        } catch (err){
            return err;
        }

        return token;
    }
}

export default TokenFunctions;
