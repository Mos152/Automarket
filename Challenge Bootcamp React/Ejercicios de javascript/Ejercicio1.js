let CantidadMayusculas = (f) => {
  let contador = 0;
  for (let i = 0; i < f.length; i++) {
    if (f[i] === f[i].toUpperCase()) {
      contador++;
    }
  }
  return contador;
};

console.log(CantidadMayusculas("HolaA"));
