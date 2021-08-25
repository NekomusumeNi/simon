<template>
    <div :style="{backgroundColor: block.color}" @click="$emit('quarter-circle-click', block.id)" :id='block.id'>
        
    </div>
</template>

<script>
export default{
    props: {
        block:{
            type: Object,
        }
    }
}
</script>

<style scoped>  
    .active{
        opacity: 0.3;
    }
</style>
