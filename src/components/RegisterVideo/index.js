import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues);

  return {
    values,
    handleChanges: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: "GTA V", url: "https://youtube.com/gtav" },
  });
  const [formVisivel, setFormVisivel] = React.useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setFormVisivel(false);
            formCadastro.clearForm();
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              x
            </button>
            <input
              placeholder="Título do vídeo"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChanges}
            />
            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChanges}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : null}
    </StyledRegisterVideo>
  );
}
