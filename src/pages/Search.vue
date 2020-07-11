<template>
  <div>
    <b-form @submit.prevent="search">
      <b-form-group
        id="input-group-Recipe"
        label-cols-sm="3"
        label="Recipe name:"
        label-for="Recipe"
      >
        <b-form-input id="query" v-model="query" type="text" placeholder="Enter query"></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-amount"
        label-cols-sm="3"
        label="Number of recipes"
        label-for="amount"
      >
        <b-form-select
          id="amount"
          v-model="amount"
          :options="[5,10,15]"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-cuisine"
        label-cols-sm="3"
        label="cuisine:"
        label-for="cuisine"
      >
        <b-form-select
          id="cuisine"
          v-model="cuisine"
          :options="cuisines"
        ></b-form-select>
      </b-form-group>

      <b-form-group
        id="input-group-cuisine"
        label-cols-sm="3"
        label="Diets"
        label-for="diets"
      >
        <b-form-select
          id="diet"
          v-model="diet"
          :options="diets"
        ></b-form-select>
      </b-form-group>
      <b-form-group
        id="input-group-intolerances"
        label-cols-sm="3"
        label="Intolerances"
        label-for="intolerances"
      >
        <b-form-select
          id="intolerance"
          v-model="intolerance"
          :options="intolerances"
          @change="updateIntolerance"
        ></b-form-select>
        <p> intolerances : {{choosed}}
          </p>
      </b-form-group>
      <b-button
        type="submit"
        variant="primary"
        style="width:100px;display:block;"
        class="mx-auto w-100"
        >Search</b-button
      >
    </b-form>
    <RecipePreviewList title="Randome Recipes" class="RandomRecipes center" />
  </div>
</template>

<script>
import cuisines from "../assets/cusines";
import diets from "../assets/diets";
import intolerances from "../assets/intolerances";
import { Search } from '@syncfusion/ej2-vue-dropdowns';
import RecipePreviewList from "../components/RecipePreviewList.solution";
  export default {
    name: "search",
    data() {
      return {
        query: '',
        intolerance:'',
        diet: "None",
        cuisine: "All",
        diets: [],
        cuisines: [{ value: null, text: "", disabled: true }],
        intolerances:[{ value: null, text: "", disabled: true }],
        choosed: [],
        amount: 5,
        recipes:[]
      };
    },
    components: {
      RecipePreviewList
    },
    methods: {
      updateIntolerance (){
        if(this.choosed.includes(this.intolerance))
        {
          let index = this.choosed.indexOf(this.intolerance);
          this.choosed.splice(index, 1);
          this.intolerance='';
        }
        else{
          this.choosed.push(this.intolerance);
          this.intolerance='';
        }
      },
       async search() {
      try {
        if(this.cuisine==='All')
        {
          this.cuisine=''
        }
        if(this.diet==='None')
        {
          this.diet=''
        }
        const response = await this.axios.get(
           "http://localhost:3000/recipes/search?query="+this.query+"&amount="+this.amount+"&cuisine="+this.cuisine+"&diet="+this.diet+"&intolerance="+this.choosed[0],
        );
        console.log(response.data.previewRecipes);
        const recipes = response.data.previewRecipes;
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
    },
    mounted() {
    this.diets.push(...diets);
    this.cuisines.push(...cuisines);
    this.intolerances.push(...intolerances);
    }
  }
</script>

<style></style>
