import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Projetos from './containers/Projetos'
import Sidebar from './containers/sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoOTemaDark, setestaUsandoOTemaDark] = useState(false)

  function trocarTema() {
    setestaUsandoOTemaDark(!estaUsandoOTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoOTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocarTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
