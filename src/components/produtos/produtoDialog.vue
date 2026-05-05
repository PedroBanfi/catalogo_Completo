<script setup>
defineProps (['nome' , 'id' , 'preco' , 'categoria']);
import ButtonChild from '../ButtonChild.vue';
import { formataPreco } from '@/utils/produtoUtils';
const novopreco = ref(0);
</script>



<template>
    <div class="overlay">
    <div class="produto-dialog">
        <h2>Nome</h2>
        <p>Preço: {{ formataPreco(preco) }}</p>
        <p>categoria: {{ categoria }}</p>
        <input type="number" v-model.number="novapreco">
        <ButtonChild> Corrigir preco </ButtonChild>
        <ButtonChild> Cancelar </ButtonChild>
    </div>
    </div>
</template>

<style scoped>

</style>