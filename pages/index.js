import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favoritos";

function HomePage() {
  const estilosDaHomePage = {
    // backgroundColor: "red"
  };

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
        <Favoritos favoritos={config.favoritos} />
      </div>
    </>
  );
}

export default HomePage;

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
  .user-info img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
  .banner {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <section>
        <img src={config.banner} className="banner" />
      </section>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(props) {
  const playlistNames = Object.keys(props.playlists);
  // Statement
  // Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

function Favoritos(props) {
  const canaisFavoritos = Object.keys(props.favoritos);
  return (
    <StyledFavorites>
      {canaisFavoritos.map((favorito) => {
        const canal = props.favoritos[favorito];
        return (
          <section>
            <h2>{favorito}</h2>
            <div>
              {canal.map((fav) => {
                return (
                  <a href={fav.urlUser}>
                    <img src={fav.imgUser} />
                    <span>{fav.nameUser}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledFavorites>
  );
}
