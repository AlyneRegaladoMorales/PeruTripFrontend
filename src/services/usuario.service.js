import axios from "axios";

export class usuario{

    acceso(correo, contrasena) {

        const url = `https://localhost:44326/api/v1/usuario/acceso?correo=${encodeURIComponent(correo)}&contrasena=${encodeURIComponent(contrasena)}`;

        console.log("Este es el correo que enviate", correo);
        console.log("Esta es la contraseña uqe enviare", contrasena);

        return axios.post(url,{correo:correo, contrasena:contrasena})
            .then(response => {
                console.log("Devuelve esto!", response);
                return response;
            })
            .catch(error => {
                console.error("No devuelve nada", error.response);
                throw error;
            });
    }
}