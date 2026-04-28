<script setup>
  defineProps(['id', 'nome', 'preco', 'categoria'])
  import ButtonChild from './ButtonChild.vue';
  defineEmits(['corrigirpreco'])
</script>

<template>
  <li>
    {{ nome }} - R$ {{ preco }} ({{ categoria }})
    <ButtonChild @clique="$emit('corrigirpreco', id)">
      Corrigir Preço
    </ButtonChild>
  </li>
</template>

<style scoped>

</style>
