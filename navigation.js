function move(location = "home"){
    //Reassign active
    document.getElementsByClassName("active").classList.remove("active");

    console.log(document.body.scrollTop);
    if(location == "home"){
        document.body.scrollTop = 0;
        document.getElementById("homeImage").classList.add("active");
    }
    else if(location == "film"){
        document.body.scrollTop = parseInt(window.innerHeight);
        document.getElementById("film").classList.add("active");
    }
    else if(location == "cast"){
        document.body.scrollTop = parseInt(window.innerHeight + window.innerHeight * 0.9);
        document.getElementById("cast").classList.add("active");
    }
    else if(location == "reviews"){
        document.body.scrollTop = parseInt(window.innerHeight + window.innerHeight * 0.9 * 2);
        document.getElementById("reviews").classList.add("active");
    }
    else if(location == "coming soon"){
        document.body.scrollTop = parseInt(window.innerHeight * 2 + window.innerHeight * 0.9 * 2);
        document.getElementById("comingSoon").classList.add("active");
    }

}