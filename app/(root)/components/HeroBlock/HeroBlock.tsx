"use client"; // Indica que es un Componente de Cliente (necesario para hooks y eventos)

import { TypeAnimation } from "react-type-animation";
import { Sparkles } from "lucide-react"; // 💡 Corregido: 'Sparkle' a 'Sparkles' (nombre estándar del icono)
import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * Componente HeroBlock (Sección Héroe)
 * * Muestra el título principal, la propuesta de valor con texto animado
 * y la llamada a la acción (CTA) principal.
 */
export function HeroBlock() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white">
      <div className="container mx-auto px-4 py-20">
        
        {/* Título Principal */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-center flex gap-2 flex-col items-center">
          Domina tu entrevista de
          
          {/* Contenedor de la Animación de Texto */}
          <span className="inline-block bg-indigo-500 text-white 
                           px-6 py-2 rounded-xl 
                           shadow-[0_0_20px_#6366f1]"> {/* 🛠️ Corregido: Sintaxis de 'shadow' arbitrario */}
            
           <TypeAnimation
                sequence={[
                    'Frontend 💻', 1000,
                    'Backend ⚙️', 1000,
                    'Full Stack 📚', 1000,
                    'Mobile 📱', 1000,
                    'DevOps 🚀', 1000,
                    'Data 📊', 1000,
                ]}
              wrapper="span"
              speed={70}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-center inline-block"
              repeat={Infinity}
            />
          </span>
        </h1>

        {/* Subtítulo / Propuesta de Valor */}
        <p className="text-indigo-100 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed text-center">
          {/* 🛠️ Corregido: Typos y traducido */}
          Prepárate para tu próximo trabajo con simulaciones de entrevistas realistas y feedback accionable.
        </p>

        {/* Botón de Llamada a la Acción (CTA) */}
        <div className="flex items-center justify-center pb-5"> {/* 🛠️ Corregido: 'item-center' a 'items-center' */}
          <Button 
            className="bg-purple-600 text-white rounded-lg px-20 py-6 text-lg font-semibold shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out group" 
            asChild
          >
            <Link href="/dashboard">
              {/* 🛠️ Corregido: Añadido 'mr-2' para espaciado */}
              <Sparkles className="mr-2 group-hover:rotate-12 transition-transform" /> 
              Empieza a Practicar Ya
            </Link>
          </Button>
        </div>

        {/* Puntos de Confianza (Trust Points) */}
        <div className="flex flex-wrap items-center gap-8 text-sm text-slate-200 justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            +5 tipos de entrevista
          </div>
          <div className="flex items-center gap-2">
            {/* Asumo que 'bg-primary' es un color de tu tema (ej. indigo) */}
            <div className="w-2 h-2 bg-indigo-500 rounded-full" /> 
            No se requiere tarjeta de crédito
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            Feedback instantáneo {/* 🛠️ Corregido: 'instand' a 'instant' y traducido */}
          </div>
        </div>
        
      </div>
    </section>
  );
}