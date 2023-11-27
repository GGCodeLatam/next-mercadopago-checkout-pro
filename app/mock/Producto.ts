export interface IProduct {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string[];
}

export const Product: IProduct = {
  id: 1,
  title: "Notebook",
  price: 2500,
  description: [
    "Pantalla Ultra HD de 15.6 pulgadas con tecnología antirreflejos y resolución de 3840 x 2160.",
    "Procesador Intel Core i9 de última generación con 16 GB de memoria RAM y almacenamiento SSD de 1 TB.",
    "Tarjeta gráfica NVIDIA GeForce RTX 3070 para un rendimiento gráfico excepcional.",
    "Batería de larga duración con hasta 12 horas de uso continuo y sistema de carga rápida.",
    "Teclado retroiluminado con ajuste de intensidad y touchpad de precisión para una experiencia de escritura cómoda.",
    "Sistema de refrigeración avanzado para mantener el rendimiento bajo carga intensiva.",
    "Conectividad completa con WiFi 6, Bluetooth 5.0, puertos USB-C, HDMI y lector de tarjetas SD.",
  ],
  img: "https://noblex.com.ar/media/catalog/product/cache/c8f6a96bef9e9f64cd4973587df2520f/n/1/n15wi3256fhd_05.jpg",
};
