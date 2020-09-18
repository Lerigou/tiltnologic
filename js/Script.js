let navs = document.querySelectorAll("a");
        for (let i = 0 ; i < navs.length ; i++){

            navs[i].addEventListener("click", function(){
                let corr = document.getElementsByClassName("ativo");
                corr[0].className = corr[0].className.replace(" ativo", "");
                this.className += " ativo";
            })
        }