<template>
  <div class="container">
    <div
        v-for="(color, index) in colors"
        :key="index"
        class="box"
        :style="{ backgroundColor: color.name }"
        @click="changeColor(index)"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        { name: 'red' },
        { name: 'green' },
        { name: 'blue' },
        { name: 'yellow' },
        { name: 'purple' }
      ]
    }
  },

  methods: {
    changeColor(index) {
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)

      this.colors[index].name = `rgb(${r}, ${g}, ${b})`
    }
  }
}
</script>

<style>
.container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 20px;
}

.box {
  width: 120px;
  height: 120px;
  border: 1px solid black;
  cursor: pointer;
}
</style>