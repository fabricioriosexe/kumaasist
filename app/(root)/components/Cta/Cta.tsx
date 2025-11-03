import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ctaStats } from "./Cta.data";


export function Cta() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-800/5 to-purple-600/5" id="cta">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            {/* Agregué 'text-white' para visibilidad sobre el fondo morado */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            ¿Listo para Dominar <br className="sm:hidden" />tu Próxima Entrevista?
            </h2>
            {/* Corregido: typos en clases y contenido */}
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
         Únete a miles de desarrolladores que han transformado sus habilidades de entrevista y conseguido sus trabajos soñados. Comienza a practicar hoy.
            </p>
          </div>
          {/* Corregido: className attribute */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Agregué estilos y manejo de iconos correcto para el botón */}
            <Button size="lg" className="group" variant="secondary">
              {/* Corregido: Sparkles debe ser self-closing y clases corregidas */}
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Comenzar Prueba Gratuita
              <ArrowRight className="group-hover:translate-x-1 transistion-transform"/>
            </Button>
          </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-700"> {/* Corregido: 'border-border/50' a 'border-slate-700' para seguridad */}
            {ctaStats.map((stat, index) => ( // <--- MAPEO DE DATOS
              <div key={index} className="text-center">
                {/* Asumo que 'text-primary' es un color de acento. */}
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                {/* Corregido: 'Text-slate-200' a 'text-slate-200' */}
                <div className="text-slate-200">{stat.label}</div> 
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}