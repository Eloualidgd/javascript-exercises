

(() => {

    document.getElementById("run").addEventListener("click" , function () {

        window.lib.getPosts(function (error , articles) {
            posts = articles ;
            posts.forEach(function (post) {
                window.lib.getComments(null , function ( error , getComments) {

                    comment = getComments[post.id]
                    if (comment !== undefined) {
                        post.comment = comment ;
                        console.log(post);
                    }

                })

            })

        })
    })


})();
