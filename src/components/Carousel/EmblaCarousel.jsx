import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import './Carousel.css'
import { skillView } from '../../assets/constant/constant'

const EmblaCarousel = (props) => {
  const {options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, stopOnInteraction: false, loop: true})
  ])

  useEffect(() => {
    if (!emblaApi) return

    const autoScroll = emblaApi.plugins().autoScroll
    if (autoScroll) {
      autoScroll.play()
    }

    emblaApi.on('pointerUp', () => {
      if (autoScroll) {
        autoScroll.play()
      }
    })
  }, [emblaApi])

  return (
    <div className="hidden lg:block embla pt-[30px]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {skillView.map((index) => (
            <div className="embla__slide lg:flex-[0_0_20%] xl:flex-[0_0_15%]" key={index}>
              <img className='w-auto h-[45px]' src={index} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel;