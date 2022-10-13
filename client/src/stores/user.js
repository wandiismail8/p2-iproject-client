import { defineStore } from 'pinia'
import axios from 'axios';
import Swal from 'sweetalert2'

const baseUrl = "https://finanza1.herokuapp.com"
export const useUserStore = defineStore('user', {
    state: () => {
        return {
          isLogin : false





         }

        },
    getters: {
     
    },
    actions: {

      async register(obj){
        console.log(obj);
      
        try {
          const {data} = await axios({
            url : `${baseUrl}/user/register`,
            method : "POST",
            data : obj
          })
          console.log(data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Register Success",
            showConfirmButton: false,
            timer: 1500,
          });

          this.router.push('/login')
          
        } catch (err) {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
          
          
        }


      },







      async login(obj){
        // console.log(obj);
        try {
          const {data} = await axios({
            url : `${baseUrl}/user/login`,
            method : "POST",
            data : obj
          })

          localStorage.setItem("access_token", data.access_token)

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Register Success",
            showConfirmButton: false,
            timer: 1500,
          });
          this.isLogin = true

          this.router.push('/')


          
        } catch (err) {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data.message,
          });
          
        }


      },

      logout(){
        localStorage.clear()
        this.isLogin = false,
        this.router.push('/login')

        

      }

      
    }
  })