import React from "react";
import config from "../config.json";
import styled, { ThemeConsumer } from "styled-components";

import Menu from "../src/components/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { StyledFavorites } from "../src/components/Favoritos";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = React.useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
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
  background-color: ${({ theme }) => ThemeConsumer.backgroundLevel1};
  .user-info img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  background-image: url(${config.banner});
  height: 15rem;
`;

function Header() {
  return (
    <StyledHeader>
      <title>AluraTube</title>
      <StyledBanner banner={config.banner} />
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

function Timeline({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists);
  // Statement
  // Retorno por expressão
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
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
          <section key={favorito}>
            <h2>{favorito}</h2>
            <div>
              {canal.map((fav) => {
                return (
                  <a key={fav.urlUser} href={fav.urlUser}>
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
