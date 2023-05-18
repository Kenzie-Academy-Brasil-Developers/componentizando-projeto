import "./styles/global.css";
import "./styles/colors.css";
import "./styles/fonts.css";
import "./styles/buttons.css";
import "./styles/jobsCard.css";
import "./styles/jobsSelectedCards.css";
import "./styles/index.css";
import iconTrash from "./assets/trash.png";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="headerMain">
            <h1 className="title-1 color-grey-4">
              Lugar de mulher é onde ela quiser!
            </h1>
            <p className="text-1 color-grey-3">
              Está procurando oportunidades de estágio, emprego ou bolsas de
              estudo?
            </p>
            <p className="text-1 color-grey-3">
              Ou até mesmo oportunidades para atender eventos de tecnologia no
              Brasil e ao redor do mundo?
            </p>
            <h2 className="title-5 color-grey-3 mb-2">
              Confere aqui embaixo o que temos pra você!
            </h2>
            <a href="#vagas" className="button-big-default">
              Ir para seção das vagas
            </a>
          </div>
        </div>
      </header>
      <main className="container">
        <h3 className="title-4 color-grey-1 mg1">Vagas</h3>
        <section className="flex-start">
          <ul className="jobs-list flex-column" id="vagas">
            <li className="jobs-card">
              <h2 className="title-4 color-grey-1">
                Pessoa desenvolvedora front-end - React JS
              </h2>
              <div className="flex-row">
                <span className="text-3 color-grey-2 ">Kenzie Academy</span>
                <span className="text-3 color-grey-2 ">Curitiba</span>
              </div>

              <p className="text-2 color-grey-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
              </p>
              <div className="flex-end">
                <span className="text-3 color-grey-2">Home Office</span>
                <button className="button-little-default bg-color-brand-1 color-grey-6">
                  Candidatar
                </button>
              </div>
            </li>

            <li className="jobs-card">
              <h2 className="title-4 color-grey-1">
                Pessoa desenvolvedora front-end - React JS
              </h2>
              <div className="flex-row">
                <span className="text-3 color-grey-2 ">Kenzie Academy</span>
                <span className="text-3 color-grey-2 ">Curitiba</span>
              </div>

              <p className="text-2 color-grey-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
              </p>
              <div className="flex-end">
                <span className="text-3 color-grey-2">Home Office</span>
                <button className="button-little-default bg-color-brand-1 color-grey-6">
                  Candidatar
                </button>
              </div>
            </li>

            <li className="jobs-card ">
              <h2 className="title-4 color-grey-1">
                Pessoa desenvolvedora front-end - React JS
              </h2>
              <div className="flex-row">
                <span className="text-3 color-grey-2 ">Kenzie Academy</span>
                <span className="text-3 color-grey-2 ">Curitiba</span>
              </div>

              <p className="text-2 color-grey-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
              </p>
              <div className="flex-end">
                <span className="text-3 color-grey-2">Home Office</span>
                <button className="button-little-default bg-color-brand-1 color-grey-6">
                  Candidatar
                </button>
              </div>
            </li>
          </ul>

          <aside className="jobs-selected flex-column">
            <h3 className="title-4 ">Vagas selecionadas</h3>
            <ul className="jobs-selected-render">
              <li className="jobs-selected-card">
                <div className="flex-start">
                  <h2 className="title-5 color-grey-1">
                    Pessoa desenvolvedora front-end - React JS
                  </h2>
                  <div className="button-icon">
                    <img src={iconTrash} alt="ícone de lixeira" />
                  </div>
                </div>
                <div className="flex-row">
                  <span className="text-3 color-grey-2 ">Kenzie Academy</span>
                  <span className="text-3 color-grey-2 ">Curitiba</span>
                </div>
              </li>

              <li className="jobs-selected-card">
                <div className="flex-start">
                  <h2 className="title-5 color-grey-1">
                    Pessoa desenvolvedora front-end - React JS
                  </h2>
                  <div className="button-icon">
                    <img src={iconTrash} alt="ícone de lixeira" />
                  </div>
                </div>
                <div className="flex-row">
                  <span className="text-3 color-grey-2 ">Kenzie Academy</span>
                  <span className="text-3 color-grey-2 ">Curitiba</span>
                </div>
              </li>
            </ul>
          </aside>
        </section>
      </main>
    </>
  );
}

export default App;
