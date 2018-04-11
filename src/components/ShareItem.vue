<script>

export default {

    Vue.component('share-item', {
        props: { 
            text: {
                type: String, //validate with boolean
                required: true,
                default: function() {
                    return { message: 'hello'}
                } //arrays need their defaults to be returned from a function
            }
        }, 
        template: '#shareItem-template',
        props: ['shareItem']
});

new Vue ({
    el: "#app",
    data: {
        newShareItem: '';
        ShareItems: [ {
        symbol: "",
        id: "",
        name: "",
        price: ""
        },
    ] 
    }
}

</script>


----------------HTML-----------------


<ul>
    <li 
        is="share-item"
        v-for="share in shares"
        v-bind:shareItem="share"
    ></li>
</ul>

<script type="text/x-template" id="shareItem-template">
<li>
    <small>{{shareItem.}} </small>
    <p class = "shareItem">"{{
        shareItems.text }}" </p>
</li>
</script> 

 <li>
                   //<!-- list of attributes for each share -->
                    <img :src="share.image">
                    <p><strong>{{share.name}}</strong></p>
                    <p>{{share.description}}</p>
                    <p><a @click="buyMethod">Buy Shares</a><p>
                    <p><a @click="SellMethod">Sell Shares</a><p>
</li>












---------------------------------------



<template>
       

 <!-- include methods in props array -->
</template>

// <div id="app">
//     <child :text="message"></child>
// </div>
