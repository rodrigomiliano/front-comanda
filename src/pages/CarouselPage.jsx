import Carousel from '../components/Carousel'

function CarouselPage() {

    return (
        <>

        <Carousel slides={slides1} />

        <Carousel slides={slides2} />

        <Carousel slides={slides3} />

        </>        
    )
  }

  const slides1 = [
    { text: 'Slide 1' },
    { text: 'Slide 2' },
    { text: 'Slide 3' },
    { text: 'Slide 4' },
    { text: 'Slide 5' },
    { text: 'Slide 6' },
    { text: 'Slide 7' }
  ]

  const slides2 = [
    { text: 'Slide 1' },
    { text: 'Slide 2' },
    { text: 'Slide 3' },
    { text: 'Slide 4' },
    { text: 'Slide 5' },
    { text: 'Slide 6' },
    { text: 'Slide 8' },
    { text: 'Slide 6' },
    { text: 'Slide 9' }
  ]

  const slides3 = [
    { text: 'Slide 1' },
    { text: 'Slide 2' },
    { text: 'Slide 3' },
    { text: 'Slide 4' }
  ]

  
  
  export default CarouselPage

  