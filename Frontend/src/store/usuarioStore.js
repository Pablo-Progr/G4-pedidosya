import { create } from 'zustand'; //Importo Libreria De Zustand

// Función Crea Un Estado Global Para Gestionar La Sesión De Un Usuario
const useUsuarioStore = create((set) => ({
  usuario: null,
  rol: null,

//Guarda Datos Del Uusuario
  iniciarSesion: (datosUsuario) => {
    set({
      usuario: datosUsuario,
      rol: datosUsuario.tipo, 
    });
  },

 //Resetea Los Datos Del Inicio De Sesion 
  cerrarSesion: () => {
    set({
      usuario: null,
      rol: null,
    });
  },
}));

export default useUsuarioStore;