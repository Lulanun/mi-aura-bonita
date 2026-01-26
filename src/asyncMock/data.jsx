const products = [
  {
    id: 1,
    name: 'Spray Limpieza Energética Profunda',
    shortDescription: 'Limpieza profunda del aura y armonización energética.',
    description: 'Spray áurico ideal para limpiar y armonizar la energía después de visitas, discusiones o rituales. Ayuda a liberar cargas energéticas densas y renovar el campo áurico.',
    beneficios: 'Eucalipto: purifica, despeja energías densas y aporta claridad mental. Romero: protege el campo energético, revitaliza y fortalece la intención. Ruda: tradicionalmente utilizada para limpieza profunda y protección espiritual.',
    stock: 0,
    price: 9500,
    category: 'Sprays',
    img: '/img/Mock.png'
  },
  {
    id: 2,
    name: 'Spray Amor y Autoestima',
    shortDescription: 'Activa el amor propio y la seguridad personal.',
    description: 'Acompaña rituales de amor propio y seguridad personal. Ideal para rociar el aura al despertar o antes de encuentros importantes, potenciando la conexión con uno mismo.',
    beneficios: 'Rosa: eleva la vibración del amor propio, suaviza emociones y abre el corazón. Geranio: armoniza emociones, aporta seguridad y equilibrio emocional. Pétalos de rosa: simbolizan dulzura, contención y feminidad.',
    stock: 4,
    price: 9500,
    category: 'Sprays',
    img: '/img/SA-AmorAutoestima1.jpg'
  },
  {
    id: 3,
    name: 'Spray Calma y Relajación',
    shortDescription: 'Relajación profunda para cuerpo y mente.',
    description: 'Bruma aromática para relajar cuerpo y mente. Perfecta para antes de dormir, meditar o atravesar momentos de ansiedad.',
    beneficios: 'Lavanda: calma el sistema nervioso y favorece el descanso. Manzanilla: alivia tensiones emocionales y promueve serenidad. Flores de lavanda: refuerzan la sensación de paz y equilibrio.',
    line: 'Calma y Relajacion',
    stock: 4,
    price: 9500,
    category: 'Sprays',
    img: '/img/SA-CalmaRelax.jpg'
  },
  {
    id: 4,
    name: 'Spray Abundancia y Prosperidad',
    shortDescription: 'Activa la energía de la prosperidad y la acción.',
    description: 'Spray energético pensado para activar la prosperidad y abrir caminos. Ideal antes de trabajar, emprender o realizar rituales de abundancia.',
    beneficios: 'Naranja: eleva el ánimo y atrae oportunidades. Canela: activa la energía de la acción y el éxito. Albahaca: asociada a la prosperidad y la buena fortuna. Laurel: símbolo de logros y expansión.',
    stock: 4,
    price: 9500,
    category: 'Sprays',
    img: '/img/SA-Abundancia2.jpg'
  },
  {
    id: 5,
    name: 'Spray Alegría y Vitalidad',
    shortDescription: 'Energía fresca para empezar el día con ánimo.',
    description: 'Bruma revitalizante para comenzar el día con energía positiva. Aporta alegría, frescura y eleva el ánimo.',
    beneficios: 'Bergamota: aporta optimismo y ligereza emocional. Limón: revitaliza y despeja la mente. Cáscara de mandarina: estimula la vitalidad y la energía positiva.',
    stock: 4,
    price: 9500,
    category: 'Sprays',
    img: '/img/SA-Alegria-Vitalidad.jpg'
  },
  {
    id: 6,
    name: 'Spray Sanación Emocional',
    shortDescription: 'Contención emocional y acompañamiento energético.',
    description: 'Acompaña procesos de sanación, perdón y contención emocional. Ideal para momentos de tristeza, duelos o rupturas.',
    beneficios: 'Ylang Ylang: equilibra emociones profundas y reconecta con el placer de vivir. Jazmín: eleva la vibración emocional y brinda consuelo. Cuarzo rosa: piedra del amor, la sanación y el perdón.',
    stock: 0,
    price: 9500,
    category: 'Sprays',
    img: '/img/Mock.png'
  },
  {
    id: 7,
    name: 'Vela Lavanda',
    shortDescription: 'Relajación profunda y armonía mental.',
    description: 'Vela aromática de soja diseñada para promover la relajación profunda y la armonía mental. Ideal para momentos de descanso y meditación.',
    beneficios: 'Lavanda: reduce el estrés y favorece el descanso. Flores secas: potencian la intención calmante. Pigmento violeta: asociado a la transmutación y la paz interior.',
    line: 'Calma y Relajacion',
    stock: 4,
    price: 11500,
    category: 'Velas',
    img: '/img/Vela-Calma.jpg'
  },
  {
    id: 8,
    name: 'Vela Rosas – Amor',
    shortDescription: 'Atrae amor y dulzura al espacio.',
    description: 'Vela energética pensada para atraer el amor y fortalecer vínculos afectivos. Aporta dulzura, calidez y conexión emocional.',
    beneficios: 'Rosas: vibración del amor y la armonía. Pétalos secos: refuerzan la energía afectiva. Pigmento rosa: asociado al amor propio y la ternura.',
    stock: 0,
    price: 11500,
    category: 'Velas',
    img: '/img/Vela-Vitalidad6.jpg'
  },
  {
    id: 9,
    name: 'Vela Jazmín / Ylang Ylang',
    shortDescription: 'Creatividad, sensualidad y energía elevada.',
    description: 'Vela aromática que eleva la energía y estimula la creatividad. Ideal para espacios de inspiración y conexión espiritual.',
    beneficios: 'Jazmín: eleva la vibración emocional y espiritual. Ylang Ylang: estimula la creatividad y el bienestar. Mica dorada o caléndula: energía solar y expansión.',
    stock: 0,
    price: 11500,
    category: 'Velas',
    img: '/img/Vela-Vitalidad7.jpg'
  },
  {
    id: 10,
    name: 'Vela Fresa y Mandarina',
    shortDescription: 'Vitalidad, motivación y energía positiva.',
    description: 'Vela vibrante que aporta vitalidad, motivación y energía positiva. Ideal para activar el ánimo y la acción.',
    beneficios: 'Mandarina: frescura y alegría. Fresa: estimula el disfrute y la motivación. Pigmento rojo: energía, acción y vitalidad.',
    stock: 4,
    price: 11500,
    category: 'Velas',
    img: '/img/Vela-Vitalidad3.jpg'
  },
  {
    id: 11,
    name: 'Tag Aromático - Vainilla',
    shortDescription: 'Aroma cálido que brinda confort emocional.',
    description: 'Tag aromático ideal para perfumar espacios pequeños, placares o cajones, aportando calidez y bienestar.',
    beneficios: 'Vainilla: aroma reconfortante que reduce el estrés y genera sensación de seguridad.',
    stock: 6,
    price: 4000,
    category: 'Aromaticos',
    img: '/img/Tag-Vainilla.jpg'
  },
  {
    id: 12,
    name: 'Tag Aromático - Gardenia',
    shortDescription: 'Elegancia floral y armonía emocional.',
    description: 'Tag aromático floral para perfumar ambientes y objetos personales con una fragancia suave y envolvente.',
    beneficios: 'Gardenia: aroma floral que aporta armonía, calma emocional y sofisticación.',
    stock: 6,
    price: 4000,
    category: 'Aromaticos',
    img: '/img/Tag-Gardenia.jpg'
  },
  {
    id: 13,
    name: 'Roll On - Feromonas',
    shortDescription: 'Atractivo personal y magnetismo natural.',
    description: 'Roll on energético diseñado para potenciar el atractivo personal y la conexión sensorial.',
    beneficios: 'Feromonas: estimulan el magnetismo personal y la atracción. Aplicación localizada para uso diario.',
    stock: 2,
    price: 9500,
    category: 'Varios',
    img: '/img/RollOn.jpg'
  }
]

let error = false
export const getProducts = ()=>{
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(error){
            reject('Hubo un error intente mas tarde')
        }else{
            resolve(products)
        }
    },1000)
})
}

export const getOneProduct = (id)=>{
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(error){
            reject('Hubo un error intente mas tarde')
        }else{
            let product = products.find((prod)=> prod.id === Number(id))
            resolve(product)
        }
    },1000)
})
}