<template>
  <button 
    class="h-btn"
    @click="clickHandle"
    >
    这是一个测试按钮组件
  </button>
</template>
<script>
  export default {
    name: 'HBtn',

    methods: {
      clickHandle (e) {
        console.log('这是一个测试')
        alert('我被点击了')
      }
    }
  }
</script>