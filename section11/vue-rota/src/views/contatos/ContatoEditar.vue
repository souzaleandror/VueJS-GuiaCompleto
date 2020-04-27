<template>
  <div>
    <h3>Editar contato com a id: {{ $route.params.id}}</h3>
    <button class="btn btn-info" @click="$router.back()">Voltar</button>
  </div>
</template>