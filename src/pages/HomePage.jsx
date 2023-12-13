import { useEffect, useState } from "react"
import { Container } from "@material-ui/core"
import { Link } from "react-router-dom"

import SearchBar from '../components/SearchBar'
import CardPlate from '../components/CardPlate'

function HomePage() {

  const [plates, setPlates] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/comanda/v1/categorias/')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setPlates(data)
        console.log(data)
      })
      .catch(err => {
        console.error('Instalar json-server')
      })
  }, [])

  return (
    <>

      <Container>
        <SearchBar />

        {plates && plates.map(({ plate, img }, idx) => (
          <Link to="/plate" key={idx} >
            <CardPlate plate={plate} img={img} />
          </Link>)
        )}
      </Container>

    </>
  )
}


export default HomePage