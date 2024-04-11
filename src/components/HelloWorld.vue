<script setup lang="ts">
import { ref } from "vue"

defineProps<{
  msg: string
}>()

const myJSON = ref(JSON.parse('{"a":1,"b":"test"}'))
const switchMe = ref(false)

const switchCondition = () => {
	switchMe.value = !switchMe.value
}
const printJSON = () => {
  console.log(typeof(myJSON.value))
}
const updatedContent = (myupdate: any) => {
  console.debug("textual update", myupdate);
  if (myupdate.text !== "") {
    try {
      myupdate.json = JSON.parse(myupdate.text);
    } catch {
      console.debug("json is not valid: do nothing");
      return;
    }
  } else {
    myupdate.json = {};
  }
  myupdate.text = undefined;
  console.debug("parsed update", myupdate.json);
}

</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
  <div>
  
      <button @click="switchCondition">
        switchCondition
      </button>
      <button @click="printJSON">printJSON</button>
      
          <div v-if="switchMe" > read only</div> 
          <JsonEditorVue v-else v-model="myJSON" :onChange="updatedContent" />
          <span>{{ typeof(myJSON) }}</span> 
          
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
