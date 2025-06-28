// store/userStore.js
import { create } from 'zustand';

const useUsuarioStore = create((set) => ({
  usuario: null,
  rol: null,

  iniciarSesion: (datosUsuario) => {
    set({
      usuario: datosUsuario.nombre,
      rol: datosUsuario.tipo, // Asumimos que backend devuelve "tipo" con "admin" o "cliente"
    });
  },

  cerrarSesion: () => {
    set({
      usuario: null,
      rol: null,
    });
  },
}));

export default useUsuarioStore;