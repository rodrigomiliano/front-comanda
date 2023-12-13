
import Container from '@material-ui/core/Container'

import AlertComanda from '../components/AlertComanda'

function AlertPage() {

  return (        
      <Container maxWidth="sm">

        <AlertComanda sev="success" tit="Éxito" desc="Todo salio bien" />

        <AlertComanda sev="error" tit="Error" desc="Rompiste todo" />
        
      </Container>        
  )
}

export default AlertPage