import axios from 'axios';
export const listarUsuarios = (token) => {    

    try {
        console.log("Entra", token);
        return axios({
            method: 'GET',
            url: 'http://localhost:4500/proyecto/auth/listar',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        throw error.status;
    }
}