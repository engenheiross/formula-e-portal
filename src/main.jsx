import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GlobalStyle  from './css/GlobalStyle.jsx';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Error from './routes/Error.jsx';
import Login from './routes/Login.jsx';
import Dashboard from './routes/Dashboard.jsx';
import Noticia from './routes/Noticia.jsx'

const noticias = [
  {
    "titulo": "ERT vira Kiro após concluir negociação para ser cliente da Porsche na Fórmula E",
    "conteudo": ["A ERT se movimentou e, como já era esperado, alterou o nome da equipe após completar a negociação para virar cliente da Porsche na Fórmula E. A partir da próxima temporada, a equipe passará a se chamar Kiro. Mudanças na nomenclatura da equipe chinesa já foram feitas no site oficial da categoria e o novo site oficial do time será lançado na próxima quinta-feira (10).",
      "A equipe, que teve Sérgio Sette Câmara e Dan Ticktum em 2023/24, vai deixar o posto de fabricante e passará a usar trens de força da montadora alemã a partir da próxima temporada. O acordo prevê o fornecimento de motores de especificação antiga e é válido por duas temporadas — até o início da Era Gen4 —, segundo o portal inglês The Race.", "Inicialmente, não estava nos planos dos alemães fornecer motores para três equipes diferentes. Esse foi, inclusive, um dos fatores que fizeram as conversas com a ABT não avançarem na época do eP de São Paulo. Porém, a Porsche mudou de ideia desde então, viu o formato do contrato agradar e enxerga com otimismo a chance de coletar dados de mais dois carros no grid.", "O time chinês correu apenas um ano com o atual nome, Electric Racing Technology, e já foi inscrita como NIO 333, NEXTEV NIO e Team China Racing em anos anteriores.", "Sobre a definição da dupla de pilotos, Ticktum e Sette Câmara são favoritos para compor o grid da próxima temporada, embora a ERT tenha conversado recentemente com Sacha Fenestraz, que deixou a Nissan e busca uma forma de permanecer na Fórmula E. A confirmação da dupla de pilotos também deve acontecer na próxima semana."
     ]
  },
  {
    "titulo": "Fórmula E promove teste exclusivo para mulheres em Valência em novembro",
    "conteudo": ["A Fórmula E vai realizar um teste exclusivo para competidoras antes do início da temporada 2024/25. Nesta quarta-feira (2), a categoria elétrica anunciou um dia de atividades que acontece no próximo dia 7 de novembro no Circuito Ricardo Tormo, em Valência, na Espanha.",
      "Essa será a primeira vez que a categoria irá comandar um teste deste gênero. No pelotão, terão 22 competidoras que terão a chance de comandar o GEN3 Evo, que passa a ser usado a partir do próximo campeonato – o carro também será testado pelos 22 pilotos do grid regular da FE.",
      "Em 2018, a categoria já havia feito um teste assim em Diriyah, e, embora as equipes ainda não tenham anunciado formalmente quais pilotos participarão, várias equipes já têm vínculos com mulheres. Isso inclui a tricampeã da W Series e piloto da Indy NXT, Jamie Chadwick, que corre com a Andretti e testou um dos carros da equipe na Indy esta semana. A britânica de 26 anos também teve a oportunidade de dirigir o Gen3EVO da F-E na última temporada, em Portland.",
      "No início do ano, a campeã da F1 Academy, Marta García, participou do teste oficial de novatos em Berlim com a ERT, assim como Alice Powell na Envision.",
      "Nos 10 anos de existência da F-E, apenas três mulheres disputaram alguma corrida, sendo todas na era do Gen1.", "Katherine Legge fez duas participações com a Amlin Aguri em 2014, sem pontuar, assim como Michela Cerruti com a Trulli no mesmo ano.Já Simona de Silvestro fez uma temporada completa com a Andretti em 2016, tendo como melhor resultado dois nonos lugares.",
      "Embora todos os pilotos possam experimentar o novo carro Gen3EVO na Espanha, o desenvolvimento do Gen4, que será usada a partir da temporada 2026/27, já está em andamento e acredita-se que incluirá a direção hidráulica - um sistema que não existe nos carros de F2 e F3 e que tem sido amplamente reconhecido como uma barreira para as pilotos mulheres.",
      "Jeff Dodds, CEO da Fórmula E, disse: \"Sabemos que não há uma solução simples para uma maior diversidade no automobilismo. No entanto, se quisermos realmente dar às mulheres igualdade, oportunidade e visibilidade em nossa categoria, as condições para todas precisam ser as mesmas para ajudar em seu desenvolvimento e testá-las em relação às que já estão no grid de largada\". ",
      "\"Ao contrário de outras categorias em que as mulheres têm de usar maquinário antigo ou restrito, elas usarão o carro Gen3EVO de última geração, que acelera 30% mais rápido do que um carro de F1, exatamente como fazem os pilotos do campeonato. Também reconhecemos que um teste não resolverá o problema de longa data, mas temos que começar de algum lugar, sabendo que há um longo caminho a percorrer e garantindo que estamos tomando medidas proativas e consistentes que continuem a progredir\"."
    ]
  },
]


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/noticias",
        children: [
          {
            path: "/noticias/noticia",
            element: <Noticia title={noticias[0].titulo} content={noticias[0].conteudo} imgpath="/src/assets/thumbnail/noticia1.jpeg"/>
          },
          {
            path: "/noticias/noticia2",
            element: <Noticia title={noticias[1].titulo} content={noticias[1].conteudo} imgpath="/src/assets/thumbnail/noticia2.webp"/>
          }
        ]
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle/>
  </StrictMode>,
);
