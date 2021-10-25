import axios from 'axios';
export const listarVentas = (token) => {    

    try {
        return axios({
            method: 'GET',
            url: 'http://localhost:4500/proyecto/ventas/listar',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    } catch (error) {
        throw error.status;
    }
}