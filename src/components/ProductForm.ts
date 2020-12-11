import Vue from "vue";
import axios from "axios";

let productForm = new Vue({
  el: ".shopify-product-form",

  data: () => {
    return {
      form: {
        id: (document.getElementById("variantId") as HTMLInputElement).value,
        quantity: 1
      }
    };
  },

  methods: {
    addToCart() {
      axios.post("/cart/add.js", this);
    }
  }
});

export default productForm;
