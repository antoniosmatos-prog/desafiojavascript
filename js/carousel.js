

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(imagem, titulo, link){
        this.imagem = imagem;
        this.titulo = titulo;
        this.link = link;
    }

    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        let caroucel = Carousel._sequence;

        let imagem = document.getElementById("carousel");

        imagem.innerHTML = `<img src="img/${carouselArr[caroucel].imagem}" alt="${carouselArr[caroucel].titulo}" />`

        let titulo = document.getElementById("carousel-title");
        titulo.innerHTML = `<a href="${carouselArr[caroucel].link}"><h2>${carouselArr[caroucel].titulo}</h2></a>`

        Carousel._sequence++;

        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0;
        }
    }

    static photo1(){
        Carousel._sequence = 0;
        Carousel.Next();
    }

    static photo2(){
        Carousel._sequence = 1;
        Carousel.Next();
    }

    static photo3(){
        Carousel._sequence = 2;
        Carousel.Next();
    }

        
};

function photo1(){
    Carousel.photo1();
}

function photo2(){
    Carousel.photo2();
}

function photo3(){
    Carousel.photo3();
}
