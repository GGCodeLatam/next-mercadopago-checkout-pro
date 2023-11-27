export function formatNumber(valor: string | number): string {
  // Convierte el número a una cadena de texto
  let str = valor.toString();

  // Divide la cadena en dos partes: parte entera y parte decimal
  let partes = str.split(".");

  // Separa la parte entera en grupos de tres y agrega puntos entre ellos
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Si no hay parte decimal, agrega ",00"
  if (partes.length === 1) {
    partes.push("00");
  }

  // Si la parte decimal tiene menos de dos dígitos, agrega ceros a la derecha
  if (partes[1].length < 2) {
    partes[1] += "0";
  }

  // Reemplaza el separador decimal por una coma
  partes[1] = partes[1].replace(".", ",");

  // Une las partes entera y decimal con una coma entre ellas
  return partes.join(",");
}
