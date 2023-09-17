<script setup lang="ts">
import {computed, h, Ref, ref} from "vue";
import {fr} from "vuetify/locale";

interface dataType {
  [key: number]: {number: number, times:number}
}

const nSorteos = ref(0)

const storedData = localStorage.getItem('last_occurencies');
let dataObj: Ref<dataType>;
if (!storedData) dataObj = ref(generateDataObj());
else dataObj = ref(JSON.parse(storedData))

const combinationList: Ref<Array<number>[]> = ref([]);

console.log(dataObj.value[0]);

const headers = [
  [
    { title: 'Numero', align: 'start', key: 'number' },
    { title: 'Vegades', align: 'start', key: 'times' },
    { title: 'Freqüència', align: 'start', key: getFreq(0) }
  ]
]

function getFreq(occurrences): number {
  if (!nSorteos.value) return 0
  const total = nSorteos.value * 5.0;
  console.log((occurrences / total))
  return ((occurrences / total))
}


console.log(dataObj);

function generateDataObj(): dataType {
  let data = [];
  for (let i = 0; i < 50; ++i) data[i] = {number: i, times: 0}
  localStorage.setItem('last_occurencies',JSON.stringify(data))
  return data
}

function generateCombination(): number[] {
  const combination = []
  for (let i = 1; i <= 6; ++i) {
    let occurrence;
    do {
      occurrence = Math.floor(Math.random() * 50);
    }
    while (combination.includes(occurrence))
    dataObj.value[occurrence].times++;
    combination.push(occurrence)
  }
  nSorteos.value++;
  combinationList.value.push(combination.sort((a, b)=>{
    return a-b
  }))
  return combination
}

function gamble () {
  for (let i = 0; i < 100; ++i) generateCombination()
}
function gamble2 () {
  for (let i = 0; i < 1000; ++i) generateCombination()
}


</script>

<template>
  <div>
    <v-btn @click="generateCombination">Generar sorteo</v-btn>
    <v-btn @click="gamble">Sortear 100</v-btn>
    <v-btn @click="gamble2">Sortear 1000</v-btn>
    <div>Sorteos: {{nSorteos}}</div>
    <div>
      <v-data-table
          fixed-header
          theme="dark"
          :headers="headers"
          :items="dataObj"
          density="compact"
          height="25rem"
          color="orange"
          items-per-page="50"
      >

      </v-data-table>
      <div>{{ combinationList[combinationList.length-1]}}</div>
<!--      <v-table  cols="4" height="40rem" fixed-header density="compact" theme="dark">-->
<!--        <thead>-->
<!--        <tr>-->
<!--          <th class="text-left">-->
<!--            Numero-->
<!--          </th>-->
<!--          <th class="text-left">-->
<!--            Veces-->
<!--          </th>-->
<!--          <th class="text-left">-->
<!--            % Frecuencia-->
<!--          </th>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        <tr-->
<!--            v-for="(item, index) in dataObj"-->
<!--            :key="index"-->
<!--        >-->
<!--          <td>{{ index }}</td>-->
<!--          <td>{{ item }}</td>-->
<!--          <td>{{ ((getFreq(item))*100).toFixed(2) }}</td>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--      </v-table>-->
    </div>

  </div>
</template>

<style scoped>

</style>