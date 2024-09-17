import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Car } from '../types/Car'
import { useFetch } from '@vueuse/core'

export const useCarStore = defineStore('cars', () => {
  const cars = ref<Car[]>([])
  const perPage = ref('9')
  const searchVal = ref(null)
  const currentPage = ref<number>(1)

  const url = 'https://api.caiman-app.de/api/cars-test'

  const fetchData = () => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => (cars.value = data.data))
    } catch (error) {
      console.log(error)
    }
  }

  fetchData()

  return { cars, perPage, fetchData, searchVal, currentPage }
})
