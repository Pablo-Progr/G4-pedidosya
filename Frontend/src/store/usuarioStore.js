import { create } from 'zustand';//create: función principal de Zustand para crear el store.
import { persist } from 'zustand/middleware';//persist: un middleware que permite guardar el estado en el localStorage, así se mantiene incluso si recargas la página.

const useUsuarioStore = create(
  persist(   //Aplica persistencia al estado. Todo lo que definimos dentro se guarda en localStorage automáticamente.
    (set) => ({
      usuario: null,
      rol: null,
      iniciarSesion: (datosUsuario) => {
        set({
          usuario: datosUsuario, // guarda todo el objeto recibido.
          rol: datosUsuario.tipo, //guarda solo la propiedad tipo del usuario.
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