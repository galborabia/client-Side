<template>
<div> 
  <div class="m-control-wrapper">
    <div id="multiselect-sample" class="control-section" style="height: 500px">
        <ejs-multiselect id='sample-list3' :dataSource='cuisines' :mode='delimiterMode' :placeholder='waterMark'></ejs-multiselect>
    </div>
  </div>
</div>
</template>
<style scoped>
    .m-control-wrapper {
        margin: 0 auto;
        width: 64%;
    }
</style>
<script>
import Vue from "vue";
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
import cuisines from "../assets/intolerances";
Vue.use(MultiSelectPlugin);

export default Vue.extend ({
    data: function() {
        return {
            waterMark: 'Choose cuisine',
            defaultMode: 'Default',
            boxMode: 'Box',
            delimiterMode: 'Delimiter',
            cuisines: [{ value: null, text: "", disabled: true }]
        };
    },
   mounted() {
    this.cuisines.push(...cuisines);
    },
});
</script>