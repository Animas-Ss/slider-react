
import './App.css'
import { Carousel } from './components/Carousel'


const slides = [
  "https://img.freepik.com/vector-gratis/ilustracion-kitsune-dibujada-mano_23-2149376317.jpg",
  "https://img.freepik.com/vector-gratis/ilustracion-mascara-kitsune-dibujada-mano_23-2149376319.jpg",
  "https://img.freepik.com/vector-premium/caracter-latas-spray-cool-graffiti_96628-202.jpg",
  "https://img.freepik.com/vector-premium/diseno-ilustracion-vector-personaje-estilo-anime-chica-joven-chica-anime-manga_147933-89.jpg",
  "https://img.freepik.com/vector-premium/diseno-ilustracion-vector-personaje-estilo-anime-chica-joven-chica-anime-manga_147933-100.jpg"
]


function App() {
  return (
    <div className="bg-gray-700 w-screen h-screen flex items-center justify-center">
      <div className='max-w-[400px] bg-black'>
        <Carousel autoSlide={true} autoSlideInterval={10000}>
          {[...slides.map((item, index) => (<img key={index} src={item} alt='imagenes carusel' className=' rounded-xl'/>))]}
        </Carousel>
      </div>
    </div>
  )
}

export default App
