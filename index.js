const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("la ortografia en fundamento del docente");
});

app.get("/usuarios", (req, res) => {
  let usuarios = [
    { id: "01", nombre: "juan", apellido: "perez", telefono: 781695, correo:"juanperez@gmail.com", direccion:"cll 8 la granja" },
    { id: "02", nombre: "pedro", apellido: "osorio", telefono: 781546, correo:"pedroosorio@gmail.com", direccion:"cll 9 pradera" },
    { id: "03", nombre: "lucas", apellido: "santos", telefono: 781725, correo:"lucas-s@gmail.com", direccion:"cll 5 bonanza" },
    { id: "04", nombre: "andres", apellido: "soto", telefono: 781785, correo:"andres05@gmail.com", direccion:"cll 6b urbina" },

  ];
  res.send(usuarios);
});

app.get("/temas", (req, res) => {
  let temas = [
    { id: "11", nombre: "palabras con acento", id_usuario:"02"},
    { id: "12", nombre: "palabras con mayuscula", id_usuario:"01" },
    { id: "13", nombre: "palabras con y,ll" , id_usuario:"04" },
    { id: "14", nombre: "andrespalabras con h" , id_usuario:"03"},

  ];
  res.send(temas);
});

app.get("/actividades", (req, res) => {
  let actividades = [
    { id: "001", nombre: "mapa conceptual",tipo:"formativa", descripcion:"realizar la actividad de acuerdo a la lectura", fecha:"05/08/2019", id_tema:"12"},
    { id: "002", nombre: "taller",tipo:"formativa", descripcion:"desarrollar la lectura y responder las preguntas", fecha:"11/08/2019", id_tema:"14"},
     { id: "003", nombre: "infografia",tipo:"evaluativa", descripcion:"desarrollar la lectura y responder las preguntas", fecha:"11/08/2019", id_tema:"14"},
      { id: "004", nombre: "mapa mental",tipo:"evaluativa", descripcion:"desarrollar la lectura y responder las preguntas", fecha:"11/08/2019", id_tema:"14"},



  ];
  res.send(actividades);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
