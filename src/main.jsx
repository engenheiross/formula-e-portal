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
      "A equipe, que teve Sérgio Sette Câmara e Dan Ticktum em 2023/24, vai deixar o posto de fabricante e passará a usar trens de força da montadora alemã a partir da próxima temporada. O acordo prevê o fornecimento de motores de especificação antiga e é válido por duas temporadas — até o início da Era Gen4 —, segundo o portal inglês The Race."
     ]
  },
  {
    "titulo": "Fórmula E promove teste exclusivo para mulheres em Valência em novembro",
    "conteudo": ["A Fórmula E vai realizar um teste exclusivo para competidoras antes do início da temporada 2024/25. Nesta quarta-feira (2), a categoria elétrica anunciou um dia de atividades que acontece no próximo dia 7 de novembro no Circuito Ricardo Tormo, em Valência, na Espanha.",
      "Essa será a primeira vez que a categoria irá comandar um teste deste gênero. No pelotão, terão 22 competidoras que terão a chance de comandar o GEN3 Evo, que passa a ser usado a partir do próximo campeonato – o carro também será testado pelos 22 pilotos do grid regular da FE."
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
            element: <Noticia title={noticias[0].titulo} content={noticias[0].conteudo}/>
          },
          {
            path: "/noticias/noticia2",
            element: <Noticia title={noticias[1].titulo} content={noticias[1].conteudo}/>
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
