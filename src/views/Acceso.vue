<template>
    <div>
        <p>Usuario</p>
        <input v-model="correo" type="text" name="correo" id="correo">
        <p>Contraseña</p>
        <input v-model="contrasena" type="password" name="contrasena" id="contrasena">
        <button @click="acceder">Iniciar sesión</button>
    </div>
</template>

<script>
import { usuario } from "@/services/usuario.service.js";
import router from "@/router/index.js";

export default {
    name: "Acceso",
    data() {
        return {
            correo: "",
            contrasena: "",
            acceso: null,
        };
    },
    methods: {
         acceder() {
            console.log("Este es el correo", this.correo);
            console.log("Esta es la contraseña", this.contrasena);
            const servicio = new usuario(); // Instancia correctamente la clase usuario
            servicio.acceso(this.correo, this.contrasena)
                .then((response) => {
                    this.acceso = response.data; // response ya es el objeto de datos
                    if (this.acceso.rolId === 1) {
                        router.push('/hometurista');
                        console.log("Fue un turista",this.acceso);
                    } else if (this.acceso.rolId === 2) {
                        router.push('/homeempresa');
                        console.log("Fue una empresa",this.acceso);
                    }
                })
                .catch((error) => {
                    console.log("Error al acceder:", error);
                });
        },
    },
};
</script>

<style scoped>
</style>
