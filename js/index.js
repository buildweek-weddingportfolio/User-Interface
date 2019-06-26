// Navigation Hamburger Menu

const navSlide = () => {
    // grabbing the hamburger button and the full nav-list
    const toggler = document.querySelector('.nav-toggler')
    // console.log(toggler)//Testing for the toggler
    const nav = document.querySelector('.nav-list')
    const navLinks = document.querySelectorAll('.nav-links')
    //  console.log(navLinks)//Testing for all links

    toggler.addEventListener('click', () => {
        // Toggle Nav Button
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            // console.log(index) //Testing to make sure we have the index of all for links!
            if(link.style.animation){
                link.style.animation = '';
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                // console.log(index / 7)//Figuring out the delay timing
            }
        });

        // hamburger animation (making the close symbol)
        toggler.classList.toggle('toggle');

    });
}
// Invoking the above function
navSlide();


// Header Carousel

class ImgSlide {
    constructor(element) {
        this.element = element;
        this.slide = this.element.querySelectorAll('.img-container');
        this.rightBtn = document.getElementById('right-arrow');
        this.leftBtn = document.getElementById('left-arrow');
        this.rightBtn.addEventListener('click', () => this.slideRight());
        this.leftBtn.addEventListener('click', () => this.slideLeft());
        this.index = 0;
        this.slide[this.index].style.display = "block";
        // console.log(this.slide[2]);
        
    }
    slideRight() {
        console.log('Outer: ' + this.index);
        if (this.index <= 1) {
            
            if (this.index < 0) {
                this.slide[this.index] == 0;
            }

            this.slide[this.index].style.display = "none";
            this.index++;
            this.slide[this.index].style.display = "block";
            
            console.log("inside if : " + this.index);
        }
        
    }
    slideLeft() {
        console.log('Outer: ' + this.index);
            if(this.index >= 0) {
                
                if (this.index < 0) {
                this.slide[this.index] == 0;
            }

                this.slide[this.index].style.display = "block";
                this.index--;
                this.slide[this.index].style.display = "none";

                console.log("inside if : " + this.index);
            }
    }
}

let imgContainer = document.querySelector(".imgs");
let imgSlider = new ImgSlide(imgContainer);


// Accordion
class Article {
    constructor(article) {
        // assigning this.article to the passed article
        this.article = article;
        // console.log(this.article)

        // creating a reference to the '.expand' class
        this.expandButton = this.article.querySelector('.expand');
        // console.log(this.expandButton)

        // Setting a click handler on the expandButton reference and calling the expandArticle method
        this.expandButton.addEventListener('click' , () => this.expandArticle())
    }
    expandArticle() {
        //Using our reference to the article to toggle a class to expand or hide the article                                                                 
        this.article.classList.toggle('article-open');
        // console.log(`article is open!`)

        this.expandButton.classList.toggle('rotate');
    }
}


let articles = document.querySelectorAll('.article')

articles.forEach(article => new Article(article));

// console.log(articles);
