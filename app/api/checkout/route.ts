import mercadopago from "mercadopago";
import { IProduct } from "../../mock/Producto";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { NextRequest } from "next/server";

// A fines del tutorial pongo un token de muestra, pero siempre esta información se tiene que manejar
// como variable de entorno en un archivo .env

mercadopago.configure({
    access_token: 'APP_USR-1111111111111111-11111-111111111111111-1111111111',
  });

const URL = "https://tuweb.vercel.app";

// En "items" se puede usar directamente el producto, a fines de prueba tambien se puede hardcodear y poner valores
// hasta 5 como minimo.


export async function POST(req: NextRequest) {
  try {
    const preference: CreatePreferencePayload = {
      items: [
        {
          title: "prueba",
          unit_price: 10,
          quantity: 1,
        },
      ],
      auto_return: "approved",
      back_urls: {
        success: `${URL}`,
        failure: `${URL}`,
      },
      notification_url: `${URL}/api/notify`,
    };

    const response = await mercadopago.preferences.create(preference);

    return new Response(JSON.stringify({ url: response.body.init_point }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
