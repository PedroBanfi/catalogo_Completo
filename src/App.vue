<script setup>
  import { ref } from 'vue'
  import { listaProdutos } from './data/produtos';
  import ProdutoChild from './components/ProdutoChild.vue';
  import ButtonChild from './components/ButtonChild.vue';
  import { RouterView } from 'vue-router';
  const produtos = ref(listaProdutos)

  const alterando = ref(false)
  const preco = ref(0)
  const posicaoProduto = ref(-1)
  function salvarPreco() {
    produtos.value[posicaoProduto.value].preco = preco.value;
    alterando.value = false;
  }

  function corrigirPreco(idProduto) {
    posicaoProduto.value = produtos.value.findIndex(p => p.id === idProduto);
    preco.value = produtos.value[posicaoProduto.value].preco
    alterando.value = true;
  }
</script>

<template>
  <RouterView /> 
</template>

<style scoped>
</style>
