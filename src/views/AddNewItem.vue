

<template>
    <div class="block">
        <el-row>
            <el-input v-model="item_name" placeholder="物品名称" size="large" clearable />
        </el-row>
        <el-row>
            <el-input v-model="item_count" placeholder="物品数量" size="large" clearable />
        </el-row>
        <el-row>
            <el-input v-model="safe_day" placeholder="保质期(天)" size="large" clearable />
        </el-row>
        <el-row>
            <el-date-picker style="width:500px" v-model="produce_date" type="date" size="large" placeholder="生产日期" />
        </el-row>
        <div style="margin: 20px 0" />
        <el-row>
            <el-button type="success" plain v-on:click="submit">提交</el-button>
        </el-row>
    </div>
    <!-- <el-alert v-bind:title="produce_date" type="success" effect="dark" /> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { formatDate } from '@vueuse/core';

const item_name = ref('')
const item_count = ref('')
const safe_day = ref('')
var produce_date = ref('')

var temp = '1'

function submit() {
    let req_url = "http://192.168.2.240:8085/testing?"
    req_url += "name=" + item_name.value
    req_url += "&count=" + item_count.value
    req_url += "&produce_date=" + formatDate(new Date(produce_date.value), 'YYYY-MM-DD')
    req_url += "&safe_day=" + safe_day.value
    
    axios.get(req_url)
    .then(response => (temp = response.data))
    .catch(function (error) {
        console.log(error)
    })
    .finally(function () {
        console.log(temp)
    });
}


const shortcuts = [
    {
        text: 'Today',
        value: new Date(),
    },
    {
        text: 'Yesterday',
        value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
        },
    },
    {
        text: 'A week ago',
        value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
        },
    },
]

const disabledDate = (time: Date) => {
    return time.getTime() > Date.now()
}
</script>

<style>
.el-row {
    margin-bottom: 20px;
}

.date-pick {
    width: 300px;
}

@media (min-width: 1024px) {
    .add-new-item {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }

    .block {
        width: 300px;
    }
}
</style>
