const menu = document.querySelector(".menu");
const navegacion = document.querySelector("nav");
const preview = document.querySelector(".proyectos");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const edad = document.querySelector(".Edad");
const fecha = new Date();
console.log(fecha.getMonth());

document.addEventListener("DOMContentLoaded", () => {

    /*menu de celular*/
    let contador = 1;
    menu.addEventListener('click',(e)=>{

        if(contador == 1){
            navegacion.style.left = "0" ;
            contador = 0;
        }else{
            navegacion.style.left = "-100%" ;
            contador = 1;
        }
    
    })

    /* mi edad*/

    let MiEdad = fecha.getFullYear()-2001;
    if (fecha.getMonth() < 7) {
        MiEdad -= 1 ;
    }
    edad.innerHTML= "Edad: " + MiEdad +" años";

    /* preview de proyectos*/

    preview.addEventListener('click',(e)=>{
        let pre = parseInt(e.target.getAttribute("preview"));
        let img;

        console.log("hiciste click en la preview "+ e.target.getAttribute("preview"));
        console.log(img);

        switch (pre) {
            case 1:
                if(img != 1){
                    console.log("entre");
                    img = 1;
                    modal1.style.display = "block";
                }
                else{
                    moda1l.style.display = "none";
                }
                break;
            case 2:
                if(img != 2){
                    img = 2;
                    modal2.style.display = "block";
                }
                else{
                    modal2.style.display = "none";
                }
                break;
            case 3:
                if(img != 3){
                    img = 3;
                    modal3.style.display = "block";
                }
                else{
                    modal3.style.display = "none";
                }
                break;
            case 4:
                modal1.style.display = "none";
                modal2.style.display = "none";
                modal3.style.display = "none";
                break;
            default:
                break;
        }
        

    })  
})

