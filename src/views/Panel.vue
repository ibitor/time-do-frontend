<template>
  <div class="panel">
    <el-table
    :data="listD"
    :default-sort="{ prop: 'ProduceDate', order: 'descending' }">
    <el-table-column prop="Name" label="物品"/>
    <el-table-column prop="Count" label="数量" sortable/>
    <el-table-column prop="ProduceDate" label="生产日期" sortable/>
    <el-table-column prop="SafeDay" label="保质期" sortable/>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { onMounted } from 'vue';
import { ref } from 'vue'

var msg = '11'
const listD  = ref([])
onMounted(() => {
    axios.get("http://192.168.2.240:8085/list")
    .then(response => {
        listD.value = response.data
        // listD.value.forEach(element => {
        //     element.
        // });
        msg = 'refresh'
    })
})

function ss(str:string) {
    return str.split('T')[0]
}
</script>

<style>
@media (min-width: 1024px) {
  .panel {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
