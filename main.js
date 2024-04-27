async function carregarDados() {
  let url1 = "https://aulalp2024.free.beeceptor.com/setor";
  let url2 = "https://aulalp2024.free.beeceptor.com/cargo";
  let url3 = "https://aulalp2024.free.beeceptor.com/convenio";

  //   let resposta = await Promise.all([fetch(url1), fetch(url2), fetch(url3)]);

  //   let setores = await resposta[0].json();
  //   let cargos = await resposta[1].json();
  //   let convenios = await resposta[2].json();
}
carregarDados();
let funcionario = {
  nome: "",
  telefone: "",
  email: "",
  cpf: "",
  rg: "",
  idCargo: "",
  idSetor: "",
  idConvenio: "",
};
//Classe JSON
let stringFuncionario = JSON.stringify(funcionario);
console.log(stringFuncionario);
console.log(JSON.parse(stringFuncionario));

//salvarFuncionario(funcionario)

function salvarFuncionario(funcionario) {
  let url = "https://66266bc2052332d55322d1f0.mockapi.io/funcionario";
  fetch(url, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(funcionario),
  }).then((resposta) => {
    if (resposta.status == 201) {
      window.alert("Salvo com sucesso.");
    }
  });
}

document.getElementById("form-pessoa").addEventListener("submit", (event) => {
  event.preventDefault();

  funcionario.nome = document.getElementById("nome").value;
  funcionario.telefone = document.getElementById("telefone").value;
  funcionario.email = document.getElementById("email").value;
  funcionario.cpf = document.getElementById("cpf").value;
  funcionario.rg = document.getElementById("rg").value;
  funcionario.idCargo = document.getElementById("idCargo").value;
  funcionario.idSetor = document.getElementById("idSetor").value;
  funcionario.idConvenio = document.getElementById("idConvenio").value;

  salvarFuncionario(funcionario);
});

function setorChoice() {
  let setores = [
    { id: 1, nome: "Tecnologia da Informação", sigla: "TI" },
    { id: 2, nome: "Recursos Humanos", sigla: "RH" },
    { id: 3, nome: "Financeiro", sigla: "FI" },
    { id: 4, nome: "Marketing e Vendas", sigla: "MK" },
    { id: 5, nome: "Produção e Operações", sigla: "PO" },
  ];

  let idSetor = document.getElementById("idSetor").value; // value 1
  let setorSelecionado = setores.find((x) => x.id == idSetor);
  console.log(setorSelecionado);

  document.getElementById("setorSelecionado").innerHTML =
    setorSelecionado.sigla;
}

function cargoChoice() {
  let cargos = [
    { id: 1, nome: "Analista de Sistemas", salário: "8500" },
    { id: 2, nome: "Assistente Administrativo", salário: "2500" },
    { id: 3, nome: "Secretário", salário: "4300" },
    { id: 4, nome: "Gerente de Vendas", salário: "6500" },
    { id: 5, nome: "Analista de Marketing", salário: "4500" },
  ];

  let idCargo = document.getElementById("idCargo").value; // value 1
  const cargoSelecionado = cargos.find((x) => x.id == idCargo);
  console.log(cargoSelecionado.sa);

  document.getElementById("cargo").innerHTML = cargoSelecionado.salário;
}

function convenioChoice() {
  let convenios = [
    {
      id: 1,
      nome: "UNIMED",
      valor: {
        titular: 1500,
        dependente: 750,
      },
    },
    {
      id: 2,
      nome: "Intermédica",
      valor: {
        titular: 1400,
        dependente: 850,
      },
    },
  ];

  let idConvenio = document.getElementById("idConvenio").value; // value 1
  const convenioSelecionado = convenios.find((x) => x.id == idConvenio);
  console.log(convenioSelecionado);

  document.getElementById("titularSelecionado").innerHTML =
    convenioSelecionado.valor.titular;
  document.getElementById("dependenteSelecionado").innerHTML =
    convenioSelecionado.valor.dependente;
}

//trabalhar consultando um array - Find | Filter
// let setorSelecionado = setores.find((x) => x.id == 2);
// console.log(setorSelecionado);
// let cargoSelecionado = cargos.filter((x) => x.id == 1)[0];
// console.log(cargoSelecionado);
