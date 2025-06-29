import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUsuarioStore = create(
  persist(
    (set) => ({
      usuario: null,
      rol: null,
      iniciarSesion: (datosUsuario) => {
        set({
          usuario: datosUsuario,
          rol: datosUsuario.tipo,
        });
      },
      cerrarSesion: () => {
        set({
          usuario: null,
          rol: null,
        });
      },
    }),
    {
      name: 'usuario-storage', // esto guarda el estado en localStorage
    }
  )
);

export default useUsuarioStore;