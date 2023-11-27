"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { formatNumber } from '../utils/formatNumber'
import { Product } from '../mock/Producto'
import MercadoPagoButton from './MercadoPagoButton'

interface NotificationType {
    isOpen: boolean
    type: "approved" | "failure" | null
    content: string
}

const Plan = () => {

    const [notification, setNotificacion] = useState<NotificationType>({
        isOpen: false,
        type: null,
        content: "",
    });


    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const status = urlParams.get("status")

        if (status === "approved") {
            setNotificacion({
                content: "Pago aprovado",
                isOpen: true,
                type: "approved"
            });
        } else if (status === "failure") {
            setNotificacion({
                content: "Pago fallido",
                isOpen: true,
                type: "failure"
            })
        }

        setTimeout(() =>{
            setNotificacion({
                isOpen: false,
                type: null,
                content: ""
            });
        }, 5000)
    }, [])


    return (
        <main>
            <div>
                <Image src={Product.img} alt={Product.title} width={360} height={450} />
            </div>
            <div>
                <h2>Plan</h2>
                <h3>{formatNumber(Product.price)}</h3>
            </div>
            <div>
                <span>Lo que tenes que sabes de este plan</span>
                <ul>
                    {Product.description.map((item) => (
                        <li key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <MercadoPagoButton product={Product} />
            </div>
            {notification.isOpen && (
        <div className="">
          <div
            className=""
            style={{
              backgroundColor:
                notification.type === "approved" ? "#00cc99" : "#ee4646",
            }}
          >
            <p>{notification.type}</p>
          </div>

          <p>{notification.content}</p>
        </div>
      )}
        </main>
    )
}

export default Plan