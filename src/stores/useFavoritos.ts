import { characters, type Character } from "@/paginae/simpsons/data"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useFavoritosStore = defineStore('favoritos', () => {

const favoritos = ref<Character[]>([
   characters.find(character => character.id === 0)!, // Abe Simpson
   characters.find(character => character.id === 4)!, // Homer Simpson
   characters.find(character => character.id === 6)!, // Lisa Simpson
   characters.find(character => character.id === 1)!, // Bart Simpson
   characters.find(character => character.id === 2)! // Maggie Simpson
 ])


 return {
    favoritos,
    totalFavoritos: computed(() => favoritos.value.length),

  }
})