import Vue from "vue";
import axios from "axios";

let productForm = new Vue();

if (document.querySelector(".shopify-product-form")) {
  productForm = new Vue({
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
        let x = axios
          .post("/cart/add.js", this)
          .then(response => {})
          .catch(error => console.log(error));
      }
    }
  });
}

export default productForm;
