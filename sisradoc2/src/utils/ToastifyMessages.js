// Arquivo responsável por criar as mensagens de erro, successo e aviso que aparecem na tela

import { toast } from "react-toastify";

export const ToastifyMessages = {
    // Mensagem de sucesso
    success: (message) => {
        toast.success(message, {
            position: "bottom-left",
        })
    },

    // Mensagem de erro
    error: (message) => {
        toast.error(message, {
            position: "bottom-left"
        })
    },

    // Mensagem de aviso
    warning: (message) => {
        toast.warning(message, {
            position: "bottom-left"
        })
    }
}