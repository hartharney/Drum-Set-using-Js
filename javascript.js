var numberOfDrums = document.querySelectorAll('.drum').length;

for(let i=0; i<numberOfDrums; i++) 
{

    document.querySelectorAll('.drum')[i].addEventListener('click', function ()
        {

            var buttonType = this.innerHTML;

            switch(buttonType) {
                case "A":
                    var clap = new Audio("sounds/clap.wav");
                    clap.play();
                    break;

                case "S":
                    var closed_hihat = new Audio("sounds/closed-hihat.wav");
                    closed_hihat.play();
                    break;

                case "D":
                    var crash = new Audio("sounds/crash.wav");
                    crash.play();
                    break;

                case "J":
                    var kick = new Audio("sounds/kick.wav");
                    kick.play();
                    break;

                case "K":
                    var open_hihat = new Audio("sounds/open-hihat.wav");
                    open_hihat.play();
                    break;

                case "L":
                    var snare = new Audio("sounds/snare.wav");
                    snare.play();
                    break;

                default: alert("Invalid");
            };
        }
    );
}


document.addEventListener("keypress", function(e) {
    var keyUsed = e.key.toUpperCase();

    switch (keyUsed) {
        case "A":
            var clap = new Audio("sounds/clap.wav");
            clap.play();
            break;

        case "S":
            var closed_hihat = new Audio("sounds/closed-hihat.wav");
            closed_hihat.play();
            break;

        case "D":
            var crash = new Audio("sounds/crash.wav");
            crash.play();
            break;

        case "J":
            var kick = new Audio("sounds/kick.wav");
            kick.play();
            break;

        case "K":
            var open_hihat = new Audio("sounds/open-hihat.wav");
            open_hihat.play();
            break;

        case "L":
            var snare = new Audio("sounds/snare.wav");
            snare.play();
            break;

        default: alert("Invalid");
    };
});
