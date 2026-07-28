/* ==========================
   BIRTHDAY WEBSITE JAVASCRIPT
   PART 1/2
========================== */



function startCelebration() {


    let name = document.getElementById("birthdayNameInput").value;


    if(name.trim() === "") {

        alert("Please enter birthday person's name 🎂");

        return;

    }

    // Start Birthday Music

let music = document.getElementById("birthdayMusic");

music.volume = 0.5;

music.play().catch(error => {
    console.log("Music autoplay blocked:", error);
});



    // Name update

    document.getElementById("personName").innerHTML = name;

    document.getElementById("finalName").innerHTML = name;



    // Page 1 hide

    document.querySelector(".welcome-page").style.display = "none";



    // Page 2 show

    document.querySelector(".animation-page").style.display = "flex";



    // Loading ke baad Page 3

    setTimeout(() => {


        document.querySelector(".animation-page").style.display = "none";


        document.querySelector(".birthday-page").style.display = "flex";


    },4000);



}




// Gift open

function openGift(){


    document.getElementById("giftBox").style.display = "block";


}



// Replay

function restartBirthday(){


    location.reload();


}




// Starting pages setup

window.onload = function(){


    document.querySelector(".animation-page").style.display = "none";


    document.querySelector(".birthday-page").style.display = "none";


    document.querySelector(".surprise-page").style.display = "none";


    document.querySelector(".final-page").style.display = "none";


};



/* ==========================
   BIRTHDAY WEBSITE JAVASCRIPT
   PART 2/2
========================== */



// Auto move to surprise page after birthday page


setTimeout(() => {


    let birthdayPage = document.querySelector(".birthday-page");

    let surprisePage = document.querySelector(".surprise-page");


    if(birthdayPage && surprisePage){


        birthdayPage.addEventListener("click", function(){


            birthdayPage.style.display = "none";


            surprisePage.style.display = "flex";


        });


    }


},4500);






// Create Confetti Effect


function createConfetti(){


    for(let i = 0; i < 80; i++){


        let confetti = document.createElement("div");


        confetti.innerHTML = "🎉";


        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.fontSize = 
        Math.random() * 20 + 15 + "px";


        confetti.style.animation =
        "fall 4s linear";



        document.body.appendChild(confetti);



        setTimeout(()=>{


            confetti.remove();


        },4000);


    }


}





// Gift open ke time confetti


function openGift(){


    let gift = document.getElementById("giftBox");


    gift.style.display = "block";


    createConfetti();


}






// Final page show


function showFinalPage(){


    document.querySelector(".surprise-page").style.display="none";


    document.querySelector(".final-page").style.display="flex";


    createConfetti();


}






// Confetti falling animation add karna


let style = document.createElement("style");


style.innerHTML = `


@keyframes fall {


    from {

        transform: translateY(0) rotate(0deg);

    }


    to {

        transform: translateY(110vh) rotate(360deg);

    }


}


`;



document.head.appendChild(style);




// JS COMPLETE