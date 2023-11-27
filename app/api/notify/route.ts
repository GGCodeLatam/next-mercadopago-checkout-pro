import mercadopago from "mercadopago";
import { NextRequest } from "next/server";

// A fines del tutorial pongo un token de muestra, pero siempre esta información se tiene que manejar
// como variable de entorno en un archivo .env

mercadopago.configure({
  access_token: 'APP_USR-1111111111111111-11111-111111111111111-1111111111',
});

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const topic = searchParams.get('topic') || searchParams.get('type');

  console.log({ topic });
  try {
    if (topic === "payment") {
      const paymentId = searchParams.get('id') || searchParams.get('data.id');
      let payment = await mercadopago.payment.findById(Number(paymentId));
      let paymentStatus = payment.body.status;

      console.log({ payment, paymentStatus });

      return new Response(JSON.stringify({ payment, paymentStatus }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      return new Response(JSON.stringify({ message: "Invalid topic" }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error", error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
