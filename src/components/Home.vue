<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const user = ref();
onMounted(async () => {
    await getToken();
    const data = await axios.get('/api/user');
    user.value = data.data;
});

const getToken = async () => {
  await axios.get('/sanctum/csrf-cookie');
};

</script>
<template>
  <div class="max-w-7xl mx-auto">
    <div>
      <h1> {{ user?.name }} </h1>
      <p> {{ user?.email }} </p>
    </div>
    <div>
      <h1>Go and login</h1>
    </div>
  </div>
</template>