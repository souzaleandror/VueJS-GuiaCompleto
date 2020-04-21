<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Formulários no Vue</h1>
        <p class="lead">Treinando a manipulação de formulários</p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <!-- formulario -->
        <div class="col-sm-6">
          <h3>Preencha abaixo</h3>

          <form @submit.prevent="enviar" @reset="resetar">
            <div class="form-group">
              <label>Nome:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Seu nome"
                v-model.trim.lazy="desenvolver.nome"
              />
            </div>

            <div class="form-group">
              <label>Endereço de email:</label>
              <input
                type="email"
                class="form-control"
                placeholder="Seu email"
                :value="desenvolver.email"
                @input="desenvolver.email = $event.target.value"
              />
              <input
                type="email"
                class="form-control"
                placeholder="Seu email"
                v-model.lazy.trim="desenvolver.email"
              />
            </div>

            <div class="form-group">
              <label>Idade:</label>
              <input
                type="number"
                class="form-control"
                placeholder="Sua idade"
                v-model.number.lazy="desenvolver.idade"
              />
            </div>

            <div class="form-group">
              <p>Gênero:</p>

              <div class="form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  value="Masculino"
                  v-model="desenvolver.genero"
                  checked
                />
                <label class="form-check-label">Masculino</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="radio"
                  class="form-check-input"
                  value="Feminino"
                  v-model="desenvolver.genero"
                />
                <label class="form-check-label">Feminino</label>
              </div>
            </div>

            <div class="form-group">
              <label>Ocupação:</label>
              <select class="form-control" v-model="desenvolver.ocupacao">
                <option value disabled>Selecione uma opcao:</option>
                <!-- <option
                  v-for="(ocupacao, index) in ocupacoes"
                  :key="index"
                  :value="ocupacao"
                  :selected="ocupacao === 'Desenvolvedor3'"
                >{{ ocupacao }}</option>-->
                <option
                  v-for="(ocupacao, index) in ocupacoes"
                  :key="index"
                  :value="ocupacao"
                >{{ ocupacao }}</option>
              </select>
            </div>

            <div class="form-group">
              <p>Tecnologias:</p>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="JavaScript"
                  v-model="desenvolver.tecnologias"
                />
                <label class="form-check-label">JavaScript</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Vue JS"
                  v-model="desenvolver.tecnologias"
                />
                <label class="form-check-label">Vue JS</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Vuex"
                  v-model="desenvolver.tecnologias"
                />
                <label class="form-check-label">Vuex</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Vue Router"
                  v-model="desenvolver.tecnologias"
                />
                <label class="form-check-label">Vue Router</label>
              </div>
            </div>

            <div class="form-group">
              <label>Resumo de perfil:</label>
              <textarea
                class="form-control"
                placeholder="Conte-nos um pouco sobre você..."
                v-model.lazy.trim="desenvolver.biografia"
              ></textarea>
            </div>

            <div class="form-group">
              <Range
                label="Salario Pretendido"
                min="1000"
                max="15000"
                step="500"
                v-model.number="desenvolver.salario"
                :inputClasses="{ 'form-control-range': true }"
              />
            </div>

            <div class="form-group">
              <div class="form-check form-check-inline">
                <input
                  type="checkbox"
                  class="form-check-input"
                  v-model="desenvolver.notification"
                  true-value="Sim"
                  false-value="Nao"
                />
                <label class="form-check-label">Receber notificações por email</label>
              </div>
            </div>

            <button class="btn btn-secondary" type="button" @click="resetar">Resetar</button>
            <button class="btn btn-success" type="submit">Enviar</button>
          </form>
        </div>

        <!-- saida -->
        <div class="col-sm-6">
          <h3>Saída</h3>

          <div class="card">
            <div class="card-header">Dados</div>

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Nome:</strong>
                {{ desenvolver.nome }}
              </li>
              <li class="list-group-item">
                <strong>Email:</strong>
                {{ desenvolver.email }}
              </li>
              <li class="list-group-item">
                <strong>Idade:</strong>
                {{ desenvolver.idade }}
              </li>
              <li class="list-group-item">
                <strong>Gênero:</strong>
                {{ desenvolver.genero }}
              </li>
              <li class="list-group-item">
                <strong>Ocupação:</strong>
                {{ desenvolver.ocupacao }}
              </li>
              <li class="list-group-item">
                <strong>Tecnologias:</strong>
                {{ desenvolver.tecnologias }}
                <ul>
                  <li
                    v-for="(tecnologia, indice) in desenvolver.tecnologias"
                    :key="indice"
                  >{{ tecnologia }}</li>
                </ul>
              </li>
              <li class="list-group-item">
                <strong>Salario:</strong>
                {{ desenvolver.salario }}
              </li>
              <li class="list-group-item">
                <strong>Biografia:</strong>
                <pre>{{ desenvolver.biografia }}</pre>
                <div style="white-space: pre;">{{ desenvolver.biografia }}</div>
              </li>
              <li class="list-group-item">
                <strong>Receber notificações?</strong>
                <br />
                {{ desenvolver.notification }}
                <br />
                {{ desenvolver.notification ? 'Sim' : 'Nao'}}
              </li>
            </ul>

            <div class="card-header">Model</div>

            <div class="card-body">
              <pre><code>{{ desenvolver }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Range from "./components/Range.vue";

export default {
  components: {
    Range
  },
  data() {
    return {
      valoresPadroes: {
        nome: "",
        idade: 0,
        email: "",
        biografia: "Sou desenvolvedor ...",
        genero: "Masculino",
        tecnologias: [],
        notification: "Sim",
        //ocupacao: "Desenvolvedor2"
        ocupacao: "",
        salario: 1000
      },
      desenvolver: {
        nome: "",
        idade: 0,
        email: "",
        biografia: "Sou desenvolvedor ...",
        genero: "Masculino",
        tecnologias: [],
        notification: "Sim",
        //ocupacao: "Desenvolvedor2"
        ocupacao: "",
        salario: 1000
      },
      ocupacoes: [
        "Desenvolvedor1",
        "Desenvolvedor2",
        "Desenvolvedor3",
        "Desenvolvedor4",
        "Desenvolvedor5"
      ]
    };
  },
  methods: {
    enviar(event) {
      console.log(event);
      const formularioEnviado = Object.assign({}, this.desenvolver);
      console.log(formularioEnviado);
    },
    resetar(event) {
      console.log(event);
      this.desenvolver = Object.assign({}, this.valoresPadroes);
    }
  },
  created() {
    this.resetar();
  }
};
</script>

<style scoped>
.btn {
  margin-right: 5px;
}
</style>