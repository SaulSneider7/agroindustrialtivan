export interface Product {
  id: string;
  nombre: string;
  imagen: string;
  descripcion: string;
  fichaTecnica?: string;
}

export interface Subcategory {
  nombre: string;
  productos: Product[];
}

export interface Category {
  categoria: string;
  subcategorias: Subcategory[];
} 

export const productsData: Category[] = [
  {
    "categoria": "Protección de cultivos",
    "subcategorias": [
      {
        "nombre": "General",
        "productos": [
          { 
            id: "eco-oil",
            nombre: "Eco oil", 
            imagen: "/eco_oil.jpg", 
            descripcion: "Es un insecticida-acaricida vegetal a base de aceite de soya que controla insectos de cuerpo blando por contacto. Sus propiedades físico-químicas mejoran la adherencia, dispersión y penetración del plaguicida, asegurando una acción más eficaz sobre la plaga.", 
            fichaTecnica: "/fichas_tecnicas/proteccion_cultivos/eco_oil.pdf" 
          },
          { 
            id: "eco-cobre",
            nombre: "Eco cobre", 
            imagen: "/eco_cobre.jpg", 
            descripcion: "Es un fungicida cúprico de acción preventiva y curativa con efecto sistémico y multisitio que inhibe la germinación y desarrollo de los hongos. Su formulación asegura rápida absorción, mejor adherencia y dispersión en los tejidos vegetales.", 
            fichaTecnica: "/fichas_tecnicas/proteccion_cultivos/eco_cobre.pdf" 
          },
          { 
            id: "eco-inductor",
            nombre: "Eco inductor", 
            imagen: "/eco_inductor.jpg", 
            descripcion: "Es un fertilizante foliar a base de fosfito de potasio que aporta fósforo y potasio, fortaleciendo raíces, floración y desarrollo de frutos. Además, estimula defensas naturales contra hongos y bacterias, mejorando la calidad, color y grados Brix de la cosecha.", 
            fichaTecnica: "/fichas_tecnicas/proteccion_cultivos/eco_inductor.pdf" 
          },
          { 
            id: "eco-deter",
            nombre: "Eco deter", 
            imagen: "/eco_deter.jpg", 
            descripcion: "Es un producto foliar con cobre que elimina fumagina, algas y polvo, mejorando el entorno fitosanitario del cultivo. Actúa como limpiador del follaje, flores y frutos, mientras previene enfermedades fúngicas y reduce la presencia de patógenos."
          },
          { 
            id: "eco-lavado",
            nombre: "Eco lavado", 
            imagen: "/eco_lavado.jpg", 
            descripcion: "Es un detergente agrícola biodegradable con nitrógeno y potasio que elimina residuos como melaza, polvo y fumagina, mejorando la fotosíntesis. Además, facilita la absorción de otros productos foliares y mantiene el follaje limpio y saludable durante todo el cultivo.", 
            fichaTecnica: "/fichas_tecnicas/proteccion_cultivos/eco_lavado.pdf" 
          },
          { 
            id: "gf-120",
            nombre: "GF-120", 
            imagen: "/gf-120.jpg", 
            descripcion: "GF-120 es un cebo insecticida que combina spinosad con atrayentes para controlar moscas de la fruta al atraerlas y eliminarlas al ingerirlo. Está formulado para aplicarse en gotas grandes sobre el follaje, y es compatible con producción orgánica bajo ciertas condiciones.", 
            fichaTecnica: "/fichas_tecnicas/proteccion_cultivos/gf_120.pdf" 
          },
          { 
            id: "eco-cicatrix",
            nombre: "Eco cicatrix (pasta cicatrizante)", 
            imagen: "/eco_cicatrix.jpg", 
            descripcion: "Es un producto que actúa protegiendo las heridas causadas por las podas de los árboles frutales (mantenimiento o sanitarias), así como heridas en el material de propagación como estacas, injertos, etc.", 
            fichaTecnica: "/fichas_tecnicas/proteccion_cultivos/eco_cicatrix.pdf"
          }
        ]
      }
    ]
  },
  {
    "categoria": "Nutrición de cultivos",
    "subcategorias": [
      {
        "nombre": "Fertilizantes",
        "productos": [
          { 
            id: "ecopower-micro-mix",
            nombre: "Ecopower micro mix", 
            imagen: "/ecopower_micro_mix.jpg", 
            descripcion: "Es un fertilizante líquido, completamente soluble, que contiene micronutrientes equilibrados y quelatados con aminoácidos. Su composición balanceada de micronutrientes lo convierte en una opción ideal para complementar la nutrición y prevenir deficiencias en los cultivos.", 
            fichaTecnica: "/fichas_tecnicas/nutricion_cultivos/fertilizantes/ecopower_micro_mix.pdf" 
          },
          { 
            id: "ecopower-fosforo",
            nombre: "Ecopower fosforo", 
            imagen: "/ecopower_fosforo.jpg", 
            descripcion: "Es un fertilizante soluble con alto contenido de fósforo, complementado con nitrógeno, potasio, microelementos quelatizados y precursores hormonales. Favorece el desarrollo radicular, la floración, la fructificación y la producción de azúcares, siendo apto para todo tipo de cultivos y sistemas de riego.", 
            fichaTecnica: "/fichas_tecnicas/nutricion_cultivos/fertilizantes/ecopower_fosforo.pdf" 
          },
          { 
            id: "ecopower-potasio",
            nombre: "Ecopower potasio", 
            imagen: "/ecopower_potasio.jpg", 
            descripcion: "Es una fuente de potasio que previene y corrige deficiencias nutricionales, mejorando el rendimiento, la calidad y la vida útil de los frutos. También incrementa azúcares, sabor y tamaño, y fortalece la tolerancia de la planta frente a estrés climático y enfermedades.", 
            fichaTecnica: "/fichas_tecnicas/nutricion_cultivos/fertilizantes/ecopower_potasio.pdf" 
          },
          { 
            id: "ecopower-ca-b",
            nombre: "Ecopower Ca B", 
            imagen: "/ecopower_CA-B.jpg", 
            descripcion: "Es un fertilizante con calcio y boro asimilables que mejora su absorción y movilidad en etapas de alta demanda. Fortalece paredes celulares, optimiza la fecundación y el cuajado, logrando una floración más efectiva y mayores rendimientos.", 
            fichaTecnica: "/fichas_tecnicas/nutricion_cultivos/fertilizantes/ecopower_CA-B.pdf" 
          },
          { 
            id: "ecopower-amarre",
            nombre: "Ecopower Amarre", 
            imagen: "/ecopower_amarre.jpg", 
            descripcion: "Es un fertilizante foliar bioestimulante con calcio, boro, zinc y aminoácidos que corrige deficiencias y potencia el cuajado de flores y frutos. Estimula la producción de hormonas vegetales, favoreciendo el crecimiento radicular, la floración y la obtención de frutos de mayor calidad y vida postcosecha."
          },
          { 
            id: "ecopower-ca",
            nombre: "Ecopower Ca", 
            imagen: "/ecopower_CA.jpg", 
            descripcion: "Es un fertilizante foliar de calcio complejado con ácidos carboxílicos que asegura alta absorción y rápida corrección de deficiencias. Refuerza paredes y membranas celulares, favorece la división celular y mejora la comunicación intracelular en la planta."
          },
          { 
            id: "ecopower-pk",
            nombre: "Ecopower P K", 
            imagen: "/ecopower_PK.jpg", 
            descripcion: "Es un fertilizante foliar concentrado en fósforo y potasio, enriquecido con aminoácidos y extractos de algas que mejoran su absorción y eficacia. Favorece la floración, el cuajado y la maduración, aumentando el calibre, la calidad, el color y el sabor de los frutos."
          },
          { 
            id: "ecopower-20-20-20",
            nombre: "Ecopower 20-20-20", 
            imagen: "/ecopower_202020.jpg", 
            descripcion: "Es un fertilizante foliar líquido con nitrógeno, fósforo, potasio y microelementos quelatizados que favorecen el desarrollo de los cultivos. Su formulación balanceada y soluble permite aplicarlo en cualquier etapa, mejorando la calidad de la cosecha.", 
            fichaTecnica: "/fichas_tecnicas/nutricion_cultivos/fertilizantes/ecopower_202020.pdf" 
          },
          { 
            id: "ecopower-humik",
            nombre: "Ecopower humik", 
            imagen: "/ecopower_humik.jpg", 
            descripcion: "Es un fertilizante foliar líquido con ácidos húmicos, fúlvicos y micronutrientes que mejoran la fertilidad del suelo y la absorción de nutrientes. Además, estimula la actividad microbiana y aumenta la resistencia de las plantas frente a estrés y plagas.", 
            fichaTecnica: "/fichas_tecnicas/nutricion_cultivos/fertilizantes/ecopower_humik.pdf" 
          },
          { 
            id: "ecopower-aminoterra",
            nombre: "Ecopower Amino terra", 
            imagen: "/ecopower_aminoterra.jpg", 
            descripcion: "Es un fertilizante bioestimulante líquido a base de proteínas marinas hidrolizadas, rico en aminoácidos y péptidos de fácil absorción foliar y radicular. Favorece la síntesis de proteínas, mejora el crecimiento y ayuda a la planta a recuperarse de condiciones de estrés abiótico."
          },
          { 
            id: "ecopower-amino-ocean",
            nombre: "Ecopower Amino ocean", 
            imagen: "/ecopower_amino_ocean.jpg", 
            descripcion: "Es un hidrolizado de proteína marina enriquecido con aminoácidos, fitohormonas y nutrientes que apoya a la planta en etapas de alta demanda energética. Estimula la actividad fisiológica y metabólica, ayudando al cultivo a superar el estrés y lograr un desarrollo vigoroso y equilibrado."
          }
        ]
      },
      {
        "nombre": "Bioestimulantes-hormonas-enraizantes",
        "productos": [
          { 
            id: "crecifacil-trihormonal",
            nombre: "Crecifacil trihormonal", 
            imagen: "/crecifacil_trihormonal.jpg", 
            descripcion: "Es un fitorregulador que combina giberelinas, auxinas y citoquininas con microelementos para optimizar el desarrollo vegetal. Ayuda a las plantas a mantener su rendimiento y calidad incluso bajo condiciones de estrés como sequía o temperaturas extremas.", 
            fichaTecnica: "/fichas_tecnicas/nutricion_cultivos/bioestimulantes-hormonas-enraizantes/crecifacil_trihormonal.pdf"
          },
          { 
            id: "rebrotix",
            nombre: "Rebrotix", 
            imagen: "rebrotix.jpg", 
            descripcion: "Es un concentrado foliar con citoquininas, nutrientes, aminoácidos y microelementos recomendado en prefloración. Favorece más flores, fructificación uniforme y un desarrollo óptimo que incrementa la productividad del cultivo." 
          },
          { 
            id: "crecifacil-trihormonal-plus",
            nombre: "Crecifacil trihormonal plus", 
            imagen: "/crecifacil_trihormonal_plus.jpg", 
            descripcion: "Es un bioestimulante a base de aminoácidos, algas marinas y fitohormonas naturales que se asimila rápidamente y mejora floración, cuajado y desarrollo de frutos. Además, ayuda a superar el estrés ambiental o por plagas y potencia la fotosíntesis para un mejor rendimiento fisiológico." 
          },
          { 
            id: "auxiamino",
            nombre: "Auxiamino", 
            imagen: "/auxiamino.jpg", 
            descripcion: "Es un bioactivador fisiológico con L-aminoácidos, auxinas, folcisteína, ácido fólico y nutrientes, diseñado para etapas de alta demanda energética. Estimula la actividad fisiológica y ayuda a la planta a superar situaciones de estrés, favoreciendo su crecimiento y productividad." 
          },
          { 
            id: "forrajero",
            nombre: "Forrajero", 
            imagen: "/forrajero.jpg", 
            descripcion: "Es un concentrado líquido de aminoácidos altamente asimilables que revitaliza el metabolismo y mejora el vigor de las plantas. Favorece el crecimiento vegetativo, la formación de brotes y flores, corrige deficiencias nutricionales y aumenta la tolerancia al estrés." 
          },
          { 
            id: "ecopower-aminopower",
            nombre: "Aminopower", 
            imagen: "/aminopower.jpg", 
            descripcion: "Es un activador orgánico con L-aminoácidos naturales que favorece la formación de proteínas, estimula hormonas de crecimiento y aporta energía a procesos clave como floración y cuajado. Ayuda a la planta a superar el estrés oxidativo, protegiendo sus células y manteniendo el equilibrio fisiológico y metabólico." 
          },
          { 
            id: "alga-force",
            nombre: "Alga force", 
            imagen: "/alga_force.jpg", 
            descripcion: "Es un concentrado de algas marinas con aminoácidos y compuestos bioactivos que impulsa el crecimiento en todas las etapas, especialmente en brotación, floración, cuajado y desarrollo de frutos. Ayuda a superar el estrés, estimula el enraizamiento, fortalece la resistencia natural a enfermedades y potencia la acción de fungicidas." 
          },
          { 
            id: "green-power",
            nombre: "Green power", 
            imagen: "/green_power.jpg", 
            descripcion: "Es un fertilizante foliar con microelementos nítricos y quelatizados que corrige rápidamente la clorosis, devolviendo un verde intenso al follaje. Al aumentar la síntesis de clorofila, mejora la fotosíntesis y favorece un desarrollo vigoroso y productivo del cultivo.",
            fichaTecnica: "/fichas_tecnicas/nutricion_cultivos/bioestimulantes-hormonas-enraizantes/green_power.pdf"
          },
          { 
            id: "maxi-roots",
            nombre: "Maxi roots", 
            imagen: "/maxi_roots.jpg", 
            descripcion: "Es un regulador de crecimiento que estimula la formación de raíces en frutales y hortalizas, aplicable por riego, drench, inmersión o vía foliar. Favorece un rápido establecimiento tras el trasplante y asegura un mejor enraizamiento en esquejes y plántulas." 
          },
          { 
            id: "pro-roots",
            nombre: "Pro roots", 
            imagen: "/pro_roots.jpg", 
            descripcion: "Es un enraizante formulado con auxinas naturales, aminoácidos y extracto de algas marinas que estimula la formación de pelos radiculares y mejora la absorción de nutrientes. Fortalece el sistema radicular, favorece raíces sanas y asegura un establecimiento vigoroso del cultivo." 
          },
          { 
            id: "sin-sal",
            nombre: "Sin sal", 
            imagen: "/sin_sal.jpg", 
            descripcion: "Es un producto líquido diseñado para suelos salino-sódicos y aguas de riego con alta salinidad, que mejora la estructura del suelo y la disponibilidad de nutrientes. Reduce el impacto de las sales en las raíces y optimiza el desarrollo del cultivo en condiciones adversas." 
          }
        ]
      }
    ]
  },
  {
    "categoria": "Trampas Entomológicas",
    "subcategorias": [
      {
        "nombre": "Trampas para Mosca de la fruta",
        "productos": [
          { 
            id: "trampa-multilure",
            nombre: "Trampa multilure", 
            imagen: "/trampa_multilure.jpg", 
            descripcion: "Son trampas especiales para el monitoreo y captura masiva de moscas, principalmente de la fruta, fáciles de armar y versátiles en el uso de atrayentes. Se complementan con cebos o feromonas y forman parte del sistema nacional de control integrado de moscas de la fruta.",
            fichaTecnica: "/fichas_tecnicas/trampas_entomologicas/trampa_para_mosca/trampa_multilure.pdf"
          },
          { 
            id: "trampa-jackson-plastico",
            nombre: "Trampa jackson plastico", 
            imagen: "/jackson_plastico.jpg", 
            descripcion: "Es una trampa tipo Jackson diseñada para la detección y monitoreo de moscas de la fruta, fabricada en plástico para mayor durabilidad y versatilidad. Incluye prisma plástico, tapa de canastilla y gancho, con la canastilla incorporada al cuerpo de la trampa.",
            fichaTecnica: "/fichas_tecnicas/trampas_entomologicas/trampa_para_mosca/trampa_jackson_plastico.pdf"
          },
          { 
            id: "conetrap",
            nombre: "Conetrap", 
            imagen: "/conetrap.jpg", 
            descripcion: "La trampa CONETRAP, se trata de un mosquero de captura sobre distintas plagas, especialmente moscas, en función del atrayente que coloquemos en su interior. En muchos casos podemos utilizar el atrayente para la mosca del olivo o la mosca de la fruta.",
            fichaTecnica: "/fichas_tecnicas/trampas_entomologicas/trampa_para_mosca/conetrap.pdf"
          },
          { 
            id: "trampa-ceratipack",
            nombre: "Trampa ceratipack", 
            imagen: "/trampa_ceratipack.jpg", 
            descripcion: "Es una trampa para el monitoreo y captura masiva de moscas de la fruta, fácil de armar y versátil en el uso de atrayentes. Incluye un difusor con compuestos específicos para mosca del mediterráneo, base cónica amarilla, tapa blanca transparente y emisor de vapores.",
            fichaTecnica: "/fichas_tecnicas/trampas_entomologicas/trampa_para_mosca/trampa_ceratipack.pdf"
          },
          { 
            id: "trampa-jackson-de-carton",
            nombre: "Trampa jackson de carton", 
            imagen: "/jackson_carton.jpg", 
            descripcion: "Es una trampa diseñada para la detección y monitoreo de moscas de la fruta, fácil de armar y con lámina pegante reemplazable. Se complementa con feromonas sexuales y consta de un prisma de cartón, canastilla, lámina pegante y gancho.",
            fichaTecnica: "/fichas_tecnicas/trampas_entomologicas/trampa_para_mosca/trampa_jackson_de_carton.pdf"
          },
          { 
            id: "trampa-panel-amarillo",
            nombre: "Trampa panel amarillo (HUSK)", 
            imagen: "/trampa_panel_amarillo.jpg", 
            descripcion: "Es una trampa para la captura de insectos voladores, fácil de armar y adaptable al uso de atrayentes como feromonas sexuales. Se emplea principalmente para mosca de la fruta y consta de un cartón impermeable amarillo y un gancho.",
            fichaTecnica: "/fichas_tecnicas/trampas_entomologicas/trampa_para_mosca/trampa_panel_amarillo.pdf"
          },
          { 
            id: "trampa-cc",
            nombre: "Trampa C&C", 
            imagen: "/trampa_cc.jpg", 
            descripcion: "La trampa C&C (Cook&Cunningham)  se utiliza para trampeo masivo de mosca de la fruta, se debe complementar con paneles poliméricos que contiene atrayentes específicos.",
            fichaTecnica: "/fichas_tecnicas/trampas_entomologicas/trampa_para_mosca/trampa_c_c.pdf"
          },
          { 
            id: "trampa-delta",
            nombre: "Trampa delta", 
            imagen: "/trampa_delta.jpg", 
            descripcion: "Es una trampa para la captura de lepidópteros, fácil de armar y con lámina pegante reemplazable, ideal para monitoreo y detección de plagas. Se complementa con feromonas sexuales y consta de un prisma de plástico corrugado y un gancho.",
            fichaTecnica: "/fichas_tecnicas/trampas_entomologicas/trampa_para_mosca/trampa_delta.pdf"
          }
        ]
      },
      {
        "nombre": "Otras trampas para monitoreo",
        "productos": [
          { 
            id: "picudo-algodonero",
            nombre: "Picudo del algodonero", 
            imagen: "/picudo_algodonero.jpg", 
            descripcion: "Trampas muy eficientes para atraer y detectar picudos en el cultivo  del  algodón. El insecto es atraído hacia la trampa tanto por la feromona como por el color verde de la misma.",
            fichaTecnica: "/fichas_tecnicas/trampas_entomologicas/otras_trampas/picudo_algodonero.pdf"
          },
          { 
            id: "funnel-barrera-arbol",
            nombre: "Funnel barrera arbol", 
            imagen: "/funnel_barrera_arbol.jpg", 
            descripcion: "Es un polillero polivalente indicado especialmente para el seguimiento de vuelo (monitoreo) y captura masiva de coleópteros pequeños como escolítidos. Pero también puede usarse para una gran variedad delepidópteros con la feromona apropiada.",
            fichaTecnica: "/fichas_tecnicas/trampas_entomologicas/otras_trampas/funnel_barrera_arbol.pdf"
          },
          { 
            id: "funnel-suelo",
            nombre: "Funnel suelo", 
            imagen: "/funnel_suelo.jpg", 
            descripcion: "Polillero Funnel suelo es un polillero polivalente indicado especialmente para el seguimiento de vuelo (monitoreo) y captura masiva de una gran variedad de lepidópteros con la feromona apropiada.",
            fichaTecnica: "/fichas_tecnicas/trampas_entomologicas/otras_trampas/funnel_suelo.pdf"
          },
          { 
            id: "trampa-bucket",
            nombre: "Trampa bucket", 
            imagen: "/trampa_bucket.jpg", 
            descripcion: "La trampa BUCKET para lepidópteros es una herramienta para la gestión sostenible de plagas en arboricultura, horticultura, viticultura y otros cultivos de campo. Gracias a su diseño estructural único, ofrece características a prueba de sol y lluvia.  La trampa se utiliza junto con un cebo específico para el tipo de plaga y es un medio eficaz para monitorear y reducir la densidad de población de insectos, reduce eficazmente la reproducción y limita los daños a sus cultivos, sin impactar el ecosistema.",
            fichaTecnica: "/fichas_tecnicas/trampas_entomologicas/otras_trampas/trampa_bucket.pdf"
          },
          { 
            id: "dome-trap",
            nombre: "Dome trap", 
            imagen: "/dome_trap.jpg", 
            descripcion: "Dome Trap o trampa Domo, es una trampa para aplicación de feromonas para la atracción y monitoreo de escarabajos de productos almacenados. Trampa de caída de diseño especial para escarabajos que se arrastran en masa." 
          },
          { 
            id: "trampa-escarabajos",
            nombre: "Trampa para escarabajos", 
            imagen: "/trampa_escarabajos.jpg", 
            descripcion: "Esta trampa es un dispositivo de monitoreo profesional diseñado por entomólogos para capturar insectos rastreros, especialmente escarabajos de productos almacenados y alfombras, utilizando feromonas y atrayentes alimenticios. Su diseño de bajo perfil permite colocarla en esquinas, bajo muebles o en armarios, facilitando la detección de infestaciones." 
          },
          { 
            id: "trampa-pegajosa-doble-cara",
            nombre: "Trampa pegajosa doble cara (diaphorina citri)", 
            imagen: "/trampa_pegajosa_doble_cara.jpg", 
            descripcion: "Es una trampa para el monitoreo y captura masiva de insectos voladores, fácil de armar y con sistema de recambio práctico. Incluye grillas para facilitar el conteo y está recubierta en ambas caras con pegamento agrícola de larga duración, resistente a condiciones ambientales. Consta de un tablero plástico y un gancho." 
          },
          { 
            id: "trampa-ala",
            nombre: "Trampa de ala", 
            imagen: "/trampa_ala.jpg", 
            descripcion: "Es una trampa para la captura de lepidópteros como mariposas y polillas, fácil de armar y práctica para el conteo de insectos y reemplazo de la superficie pegante. Se usa en monitoreo y detección de plagas, y consta de una tapa de cartón rojo, base engomada y gancho." 
          }
        ]
      }
    ]
  },
  {
    "categoria": "Atrayentes Alimenticios y Semioquímicos",
    "subcategorias": [
      {
        "nombre": "Atrayentes",
        "productos": [
          { 
            id: "fruit-fly-lure",
            nombre: "Fruit fly lure (3 componentes)", 
            imagen: "/fruit_fly_lure.jpg", 
            descripcion: "Kit de difusores de atrayentes alimenticios en sachet para trampas de monitoreo y captura masiva de moscas de la fruta. Es de fácil uso y debe complementarse con trampas líquidas o sólidas para asegurar la retención y eliminación de los insectos." 
          },
          { 
            id: "atrayente-ceratitis",
            nombre: "Atrayente ceratitis", 
            imagen: "/atrayente_ceratitis.jpg", 
            descripcion: "Difusor seco específico de alta selectividad compuesto por acetato de amonio, trimetilamina y putrescina, conocidos por su alta eficacia y selectividad para atraer la mosca de la fruta (Ceratitis capitata)." 
          },
          { 
            id: "ceratiprotect",
            nombre: "Ceratiprotect", 
            imagen: "/ceratiprotect.jpg", 
            descripcion: "El producto CERATIPROTECT es un difusor de vapores de acetato amónico, diaminoalcano y trimetilamina.  Las primeras dos sustancias son consideradas como atrayente alimenticios para mosca de la fruta, mientras que la trimetilamina es un potenciador de la capacidad atractiva de los otros dos compuestos." 
          },
          { 
            id: "levadura-de-torula-y-borax",
            nombre: "Levadura de torula y borax", 
            imagen: "/levadura_de_torula_y_borax.jpg", 
            descripcion: "Es un atrayente alimenticio en pastillas para trampas de monitoreo y captura masiva de moscas de la fruta, de fácil manejo, instalación y recambio. Se complementa con trampas específicas, garantizando una mayor eficacia en el control de esta plaga." 
          },
          { 
            id: "nu-lure",
            nombre: "Nu-lure (proteina hidrolizada)", 
            imagen: "/nu_lure.jpg", 
            descripcion: "Es un atrayente alimenticio líquido para trampas de monitoreo y captura masiva de moscas de la fruta, elaborado con materias primas naturales y pH ligeramente alcalino para mayor duración. Se caracteriza por su fácil preparación, manejo y recambio, y se complementa con trampas específicas para maximizar la eficacia del control." 
          },
          { 
            id: "ceratrap",
            nombre: "Ceratrap", 
            imagen: "/ceratrap.jpg", 
            descripcion: "Es un atrayente alimenticio líquido para trampas de monitoreo y captura masiva de moscas de la fruta, basado en un sistema 100% ecológico que libera de forma continua aminas y ácidos orgánicos para maximizar la captura y duración. Se distingue por su fácil preparación, manejo y recambio, y requiere complementarse con trampas específicas para un control efectivo." 
          },
          { 
            id: "proteina-phlm",
            nombre: "Proteina PHLM", 
            imagen: "/proteina_phlm.jpg", 
            descripcion: "PHLM es un efectivo atrayente de moscas, que puede ser utilizado en mezcla con insecticidas para el control biológico de moscas de la fruta en trampas tipo Mc Phail o Multilure." 
          },
          { 
            id: "gffb",
            nombre: "GFFB Great Fruit fly bait (proteina hidrolizada)", 
            imagen: "/gffb.jpg", 
            descripcion: "Proteina hidrolizada GFFB. Las moscas de la fruta requieren proteínas para su desarrollo sexual y gonotrófico. El cebo para moscas de la fruta Great es una fórmula única diseñada con base en este conocimiento que puede atraer tanto a machos como a hembras para controlar las moscas de la fruta." 
          },
          { 
            id: "betterlure",
            nombre: "Betterlure (Trimedlure)", 
            imagen: "/betterlure.jpg", 
            descripcion: "Es una feromona sexual específica para el monitoreo y captura de machos adultos de la mosca de la fruta. Viene en un empaque metálico con un cebo que contiene 2 g de trimedlure y se utiliza en trampas especializadas para su instalación y recambio." 
          },
          { 
            id: "thrips-lure",
            nombre: "Thrips lure", 
            imagen: "/thrips_lure.jpg", 
            descripcion: "Es un atrayente específico para atraer diversas especies de trips, liberado de forma gradual con un efecto de 4 a 6 semanas según las condiciones del campo. Su formulación es segura y confiable, lo que permite su uso en programas de manejo integrado de plagas." 
          }
        ]
      }
    ]
  },
  {
    "categoria": "Pegamentos Entomológicos",
    "subcategorias": [
      {
        "nombre": "Pegamentos",
        "productos": [
          { 
            id: "pegamento-better-glue",
            nombre: "Pegamento Better glue", 
            imagen: "/pegamento_better.jpg", 
            descripcion: "Es un pegamento agrícola elaborado con resinas, diseñado para aplicarse en trampas secas y atrapar insectos al quedar adheridos en su superficie. Se caracteriza por su fácil aplicación, alta capacidad adherente, larga duración y resistencia a cambios climáticos, debiendo complementarse con trampas específicas para un control eficaz." 
          },
          { 
            id: "pegamento-noviglue-crw",
            nombre: "Pegamento Noviglue crw", 
            imagen: "/pegamento_noviglue.jpg", 
            descripcion: "Es un pegamento agrícola orgánico elaborado a base de polibutenos, diseñado para aplicar en trampas secas y capturar insectos terrestres al quedar adheridos en su superficie. Se caracteriza por su fácil aplicación, alta capacidad adherente, larga duración y resistencia a los cambios climáticos, siendo ideal para complementar trampas de monitoreo y captura." 
          },
          { 
            id: "pegamento-entomologica",
            nombre: "Pegamento Entomologica", 
            imagen: "/pegamento_entomologica.jpg", 
            descripcion: "El Pegamento Entomológico se desarrolló con un alto poder adhesivo, siendo insoluble en agua. Está indicado para la producción de trampas adhesivas, para el monitoreo y captura de insectos en general, para la fabricación de láminas adhesivas para trampas luminosas, así como para la captura y monitoreo de insectos en general en cultivos al aire libre."
          },
          { 
            id: "pegamento-up-yellow-glue",
            nombre: "Pegamento Up yellow glue", 
            imagen: "/pegamento_up_yellow_glue.jpg", 
            descripcion: "Está indicada para la fabricación de trampas adhesivas destinadas al monitoreo y captura de insectos alados en fruticultura, floricultura, cultivos extensivos, invernaderos, viveros de plántulas y áreas industriales. También es eficaz en la producción de paneles adhesivos para el control de moscas domésticas, consideradas plagas en aviarios, granjas y unidades de producción ganadera. El color amarillo del producto atrae a los insectos."
          },
          { 
            id: "pegamento-temo-o-cid",
            nombre: "Pegamento Temo-o-cid", 
            imagen: "/pegamento_temo_o_cid.jpg", 
            descripcion: "Es un pegamento agrícola diseñado para aplicarse en trampas secas, donde los insectos quedan adheridos a la superficie tratada. Ofrece fácil aplicación, buena distribución, alta adherencia, larga duración y resistencia a cambios climáticos, debiendo usarse junto con trampas específicas para un monitoreo efectivo."
          }
        ]
      },
      {
        "nombre": "Rollos adhesivos",
        "productos": [
          { 
            id: "rollo-adhesivo-novitrap",
            nombre: "Rollo Adhesivo novitrap", 
            imagen: "/rollo_adhesivo_novitrap.jpg", 
            descripcion: "Las trampas cromáticas actúan mediante la atracción por colores específicos y están recubiertas en ambas caras con goma a base de resinas vegetales. Se utilizan en campos abiertos y cerrados para controlar insectos voladores, siendo uno de los métodos físicos más eficaces en grandes plantaciones."
          },
          { 
            id: "rollo-adhesivo-con-atrayente",
            nombre: "Rollo Adhesivo con atrayente", 
            imagen: "/rollo_adhesivo_con_atrayente.jpg", 
            descripcion: "Este adhesivo para insectos se desarrolló basándose en la tendencia de los insectos hacia longitudes de onda específicas de color y olores volátiles de plantas, utilizando materiales de base ecológicos especialmente seleccionados y tecnología de laminación. Tiene muchos beneficios, como fuertes efectos de captura y eliminación, rápida eficacia, rendimiento duradero, sin residuos y respeto al medio ambiente. Se utiliza para el monitoreo y control de plagas en la agricultura, reduciendo las poblaciones de plagas y mitigando los daños causados por las plagas." 
          },
          { 
            id: "rollo-adhesivo-pp",
            nombre: "Rollo Adhesivo pp", 
            imagen: "/rollo_pp.jpg", 
            descripcion: "Estos son rollos de trampa adhesiva amarilla y azul para el control de insectos. Utilizan la atracción natural de ciertos insectos por el color, para atraparlos en una superficie pegajosa. Son eficaces contra plagas como moscas blancas, pulgones, trips y mosquitos de los hongos. El pegamento utilizado suele ser sensible a la presión, sin disolventes y seguro para las plantas y las personas. Se usan comúnmente en invernaderos, cultivos hortícolas y huertos para monitorear y reducir las poblaciones de plagas."
          }
        ]
      },
      {
        "nombre": "Laminas adhesivas",
        "productos": [
          { 
            id: "lamina-adhesiva-para-insectos",
            nombre: "Lamina Adhesiva para insectos", 
            imagen: "/lamina_adhesiva_para_insectos.jpg", 
            descripcion: "Las láminas adhesivas para monitorear insectos funcionan por la atracción cromática ya que atraen a los insectos voladores y el pegamento de alta calidad evita que se escapen. Especialmente diseñado para control de insectos volares que atacan los cultivos. No contiene pesticidas, no es tóxico. Dispone de una cuadrícula para el recuento y monitoreo de insectos.  Disponible en azul y amarillo. Útil para dípteros, trips, mosca blanca y pulgone." 
          },
          { 
            id: "lamina-up-yellow-garden",
            nombre: "Lamina Up yellow garden", 
            imagen: "/lamina_up_yellow_garden.jpg", 
            descripcion: "Lamina adhesiva Up Yellow garden es una trampa especialmente desarrollada para el monitoreo y captura de insectos voladores, como moscas, pulgones, trips y moscas blancas. Su color amarillo atrae a los insectos, que quedan atrapados en su superficie adhesiva de alto rendimiento, garantizando un control eficaz sin el uso de productos químicos." 
          }
        ]
      }
    ]
  },
  {
    "categoria": "Coadyuvantes y correctores",
    "subcategorias": [
      {
        "nombre": "Correctores",
        "productos": [
          { 
            id: "ultra-wett",
            nombre: "Ultra wett", 
            imagen: "/ultra_wett.jpg", 
            descripcion: "Es un surfactante agrícola con acción penetrante, humectante y dispersante que mejora la eficacia de agroquímicos y fertilizantes foliares. Optimiza la cobertura y distribución en hojas y frutos, resiste el lavado por lluvias y aumenta la eficiencia de las aplicaciones." 
          },
          { 
            id: "ultra-thru",
            nombre: "Ultra thru", 
            imagen: "/ultra_thru.jpg", 
            descripcion: "Es un producto con acción adherente, humectante y dispersante que protege plaguicidas y nutrientes foliares del lavado por lluvias o rocíos. Garantiza mayor permanencia y eficacia de los productos aplicados en la superficie foliar." 
          },
          { 
            id: "ultra-acid",
            nombre: "Ultra acid", 
            imagen: "/ultra_acid.jpg", 
            descripcion: "Es un regulador de pH que evita la pérdida de eficacia de los agroquímicos en aguas alcalinas o con pH elevado. Además, reduce la tensión superficial, mejora la adhesión y dispersión, y actúa como ablandador del agua." 
          }
        ]
      }
    ]
  },
  {
    "categoria": "Accesorios",
    "subcategorias": [
      {
        "nombre": "Accesorios para trampas",
        "productos": [
          { 
            id: "laminilla-para-trampa-jackson",
            nombre: "Laminilla para trampa jackson", 
            imagen: "/laminilla_para_trampa_jackson.jpg", 
            descripcion: "Laminilla base pegante, se utiliza como inserto de la trampa Jackson posee un pegamento agrícola especial de alta densidad, transparente, inodoro y no contiene insecticidas ni pesticidas." 
          },
          { 
            id: "laminilla-para-trampa-delta",
            nombre: "Laminilla para trampa delta", 
            imagen: "/laminilla_para_trampa_delta.jpg", 
            descripcion: "Lámina de cartón impermeable embadurnado con adhesivo permanente para captura de insectos." 
          },
          { 
            id: "canastilla-portaferomona",
            nombre: "Canastilla portaferrormona", 
            imagen: "/canastilla_portaferomona.jpg", 
            descripcion: "La canastilla está fabricada en polipropileno de baja densidad flexible, tiene forma cónica, con aperturas, La canastilla plástica o portaferomona, está específicamente diseñada para contener una capsula de atrayente para la captura de moscas de la fruta." 
          },
          { 
            id: "carrusel-plastico",
            nombre: "Carrusel plastico", 
            imagen: "/carrusel_plastico.jpg", 
            descripcion: "Carrusel plástico para viales, este accesorio está específicamente diseñado para contener viales de atrayente para la captura de insectos." 
          },
          { 
            id: "gancho-para-trampa-jackson",
            nombre: "Gancho para trampa jackson", 
            imagen: "/gancho_jackson.jpg", 
            descripcion: "Este es un accesorio de la trampa Jackson, sirve para sujetar la trampa al árbol." 
          },
          { 
            id: "gancho-para-trampa-multilure",
            nombre: "Gancho para trampa multilure", 
            imagen: "/gancho_multilure.jpg", 
            descripcion: "Este es un accesorio de la trampa MULTILURE, sirve para sujetar la trampa al árbol." 
          }
        ]
      },
      {
        "nombre": "Laminillas adhesivas",
        "productos": [
          { 
            id: "laminilla-adhesiva-refill",
            nombre: "Laminilla adhesiva refill", 
            imagen: "/laminilla_adhesiva.jpg", 
            descripcion: "El recambio adhesivo para trampas de luz es un producto para el control de insectos voladores sin veneno. Ideal para el control de insectos voladores en la industria alimentaria, cámaras frigoríficas, supermercados, hospitales, restaurantes, hogares o cualquier otro lugar donde el uso continuo de insecticidas sea desaconsejable o poco práctico." 
          },
          { 
            id: "laminilla-adhesiva-black",
            nombre: "Laminilla adhesiva black", 
            imagen: "/laminilla_adhesiva_black.jpg", 
            descripcion: "El recambio adhesivo negro para trampas de luz LED es un producto para el control de insectos voladores sin veneno. Ideal para el control de insectos voladores en la industria alimentaria, cámaras frigoríficas, supermercados, hospitales, restaurantes, hogares o cualquier otro lugar donde el uso continuo de insecticidas sea desaconsejable o poco práctico." 
          },
          { 
            id: "laminilla-adhesiva-line",
            nombre: "Laminilla adhesiva line", 
            imagen: "/laminilla_adhesiva_line.jpg", 
            descripcion: "La Lámina Adhesiva Line para trampas de luz LED es un producto para controlar insectos voladores sin veneno. Ideal para el control de insectos voladores en industrias alimentarias, cámaras frigoríficas, supermercados, hospitales, restaurantes, viviendas o cualquier otro lugar donde el uso continuado de insecticidas sea desaconsejable o inviable." 
          }
        ]
      },
      {
        "nombre": "Control de plagas",
        "productos": [
          { 
            id: "cebadero-hormiga",
            nombre: "Cebadero hormiga", 
            imagen: "/cebadero_hormiga.jpg", 
            descripcion: "El cebadero se utiliza conjuntamente con un cebo (liquido o gel) para hormigas. Está diseñado específicamente para permitir que las hormigas trabajadoras consuman el cebo  y sobrevivan el tiempo suficiente para transportar el producto de nuevo al nido y entregar una dosis al resto de la colonia. El cebadero o porta-cebo ayuda a evitar que el cebo se seque y proporciona un suministro continuo."
          },
          { 
            id: "espiga-antipalomas",
            nombre: "Espiga antipalomas", 
            imagen: "/espiga_palomas.jpg", 
            descripcion: "Es un producto diseñado para evitar que palomas y otras aves se posen en paredes, tejados, balcones, etc. Las palomas experimentan una molestia considerable al entrar en contacto con el objeto, sin sufrir daños ni lesiones permanentes." 
          }
        ]
      }
    ]
  }
];
