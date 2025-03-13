import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'
const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium optio
      cum vitae ipsam autem natus vel! Commodi velit vel consequuntur harum
      autem! Quae nam voluptatem delectus voluptates odit, cum architecto.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?count_private=true%22&include_all_commits=true&show_icons=true&theme=dracula&username=zezaltar" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=zezaltar&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
