<template>
    <div class="share-list">
        <ul>
    <li v-for="share in shares">
    {{shareListings}}
    </li>
</ul>
<input
    v-model="newShareListing"
    @ 
    placeholder = "List Shares"
/>
</template>

<script>
import ShareItem from "@/components/ShareItem.vue";


export default {

data: {
newShareListing: '',
    shareListings: []
    symbol: "",
    id: "",
    name: "",
    price: ""
  },
},
methods: {
    addShareListing() {
        this.shareListings.push (this.newShareListing = '')
        }
    }
]);



//   created: {
//     loadShares() {
//       axios.get("http://localhost:5000/shares");

//       // retrieve a list of shares from the API
//       // loop through each share and save the fields to an object.
//       // pass the object into the shares array using the push() method
//       object.id = res.data[0];


</script>

<style lang="scss" scoped>

</style>



