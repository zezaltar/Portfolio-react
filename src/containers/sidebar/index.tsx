import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, Botao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Jose Zaltar</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        zezaltar
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Front-End
      </Descricao>
      <Botao onClick={props.trocaTema}>Trocar tema</Botao>
    </SidebarContainer>
  </aside>
)

export default Sidebar
