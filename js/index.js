class Article {
    constructor(article) {
        // assigning this.article to the passed article
        this.article = article;
        // console.log(this.article)

        // creating a reference to the '.expand' class
        this.expandButton = this.article.querySelector('.expand');
        console.log(this.expandButton)

        // Setting a click handler on the expandButton reference and calling the expandArticle method
        this.expandButton.addEventListener('click' , () => this.expandArticle() )
    }
    expandArticle() {
        //Using our reference to the article to toggle a class to expand or hide the article                                                                 
        this.article.classList.toggle('article-open');
        console.log(`article is open!`)
    }
}


let articles = document.querySelectorAll('.article')

articles.forEach(article => new Article(article));

// console.log(articles);