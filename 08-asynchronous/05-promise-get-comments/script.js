
(() => {

    let posts,comment ;

    document.getElementById("run").addEventListener("click", function () {

        window.lib.getPosts()
            //se abre la carpeta de lib y abre getposts en callback creo
            .then(function (articles) {
            posts = articles ;
            // console.log(articles);

            posts.forEach(function (post) {

            window.lib.getComments()
                .then(function (getComments) {

                    comment = getComments[post.id];
                    if (comment !== undefined) {
                        //si comment no es igual sera indefinido osea wrong
                        post.comment = comment ;
                    }
                    console.log(post);
                    //llamamos a la funcion post porque es la funciion grande y ejecutara tod o

                })
            })
        })
    })

})();
