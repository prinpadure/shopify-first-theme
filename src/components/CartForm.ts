import Vue from "vue";
import axios from "axios";
import { access } from "fs";

const cartFormClass = ".cart-form";

let cartForm = new Vue();

if (document.querySelector(cartFormClass)) {
  cartForm = new Vue({
    el: cartFormClass,
    delimiters: ["${", "}"],

    data: {
      cart: null
    },
    created() {
      this.getCart();
    },
    methods: {
      updateCart() {
        let cart: any = this.cart;
        if (cart) {
          let result = cart.items.reduce((acc: any, target: { variant_id: any; quantity: any }) => {
            console.log(acc);
            return {
              ...acc,
              [target.variant_id]: target.quantity
            };
          }, {});
          axios
            .post("/cart/update.js", { updates: result })
            .then(response => {})
            .catch(error => console.log(error));
        }
      },
      getCart() {
        axios
          .get("cart.js")
          .then(response => {
            this.cart = response.data;
          })
          .catch(error => console.log(error));
      },
      addToCart() {
        axios
          .post("/cart/add.js", this)
          .then(response => {})
          .catch(error => console.log(error));
      }
    }
  });
}

export default cartForm;
