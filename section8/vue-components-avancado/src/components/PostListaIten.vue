<template>
  <div>
    <h1>{{titulo}}</h1>
    <slot>
      <div class="post">
        <div class="post-cabecalho">
          <h1>{{post.titulo}}</h1>
        </div>
        <div class="post-conteudo">
          <p>{{post.conteudo}}</p>
        </div>
        <div class="post-rodape">
          <small>{{post.autor}}</small>
          <a href="#" class="link">Ler Mais..</a>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    titulo: String,
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.post {
  width: 960px;
  margin: 15px auto;
}

.post-cabecalho {
  padding: 5 px 13px;
  background-color: #eee;
}

.post-conteudo {
  font-size: 16px;
  color: blue;
}

.post-rodape {
  font-size: 10px;
  font-weight: bold;
}

.link {
  float: right;
}
</style>