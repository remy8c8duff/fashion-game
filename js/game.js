// JavaScript File

// global variables to store clothing choices
b = 0;
d = 0;
s = 0;

$(document).ready(function(){

    // bag selection code
    $('#bag img').click(function(){
        b = whattowear('bag');
 
    })
    
    $('#bag li, #bag a').click(function(){
        $('#bag').carousel('cycle');
        b = 0;
    })
    
    // dress selection code
    $('#dress img').click(function(){
        d = whattowear('dress');
    })
    
    $('#dress li, #dress a').click(function(){
        $('#dress').carousel('cycle');
        d = 0;
    })
    
    // shoes selection code
    $('#shoes img').click(function(){
        s = whattowear('shoes');
    })
    
    $('#shoes li, #shoes a').click(function(){
        $('#shoes').carousel('cycle');
        s = 0;
    })
    
    //Finalized Choices
    $('button').click(function(){
       finalanswer()
    })
}
)

function whattowear(clothing) {
            $('#'+clothing).carousel('pause');
            var currentIndex = $('#'+clothing+' .active').index() + 1;
            return(currentIndex)
}

function finalanswer() {
        //
        // add or edit the sequences below to create fashionable outfits
        //
        var mt = document.getElementsByClassName("modal-title")[0];
        var mb = document.getElementsByClassName("modal-body")[0];
        var mc = document.getElementsByClassName("modal-content")[0];
        
        if ((d == 0) || (b == 0) || (s == 0))
            {
                //mc.className += " bg-primary text-light"
                mc.className += " bg-success text-white";
                if ((d != 0) && (b == 0) && (s != 0)) 
                {
                    mt.innerHTML = "You have not chosen a bag";
                    mb.innerHTML = "Good Luck, going anywhere without money or phone!";
                }   
                else if ((d != 0) && ( b == 0) && (s == 0)) 
                {
                    mt.innerHTML = "You have no bag or shoes";
                    mb.innerHTML = "Are you pretending to be the creepy, insane girl in a horror movie?";   
                }   
                else if  ((d != 0) && (b != 0) && (s == 0))
                {
                    mt.innerHTML = "You have no shoes";
                    mb.innerHTML = "You would be fine if your feet were leather";
                }
                
                else if  ((d == 0) && (b != 0) && (s != 0))
                {
                    mt.innerHTML = "You have no dress";
                    mb.innerHTML = "Nudist Alert!";
                }
                else if  ((d == 0) && (b == 0) && (s != 0)) 
                {
                    mt.innerHTML = "You have no dress or bag";
                    mb.innerHTML = "Nudist Alert, get running and you can be a streaker!";
                }
                else if  ((d == 0) && (b != 0) && (s == 0))
                {
                    mt.innerHTML = "You have no dress or shoes";
                    mb.innerHTML = "Unless your bag is big enough to fit in, I think you might want to try again.";
                }
                else
                {
                    mt.innerHTML = "You haven't selected a full outfit yet";
                    mb.innerHTML = "You must put together an outfit before leaving the house!";
                }
            }
        else
            {
            if ((d == 3) && (b == 5) && (s == 2) || (d == 2) && (b == 4) && (s == 6) )
            
               {    
                    mc.className += " bg-warning"
                    mt.innerHTML = "Your Choices Are at the Height of Fashion";
                    mb.innerHTML = "You are the envy of all your friends!!! You probably spend your entire paycheck on your cloths!!";
               }
            else
                {
                    //document.getElementsByClassName("modal-content")[0].style.backgroundColor = "red";
                    mc.className += " bg-danger text-white"; 
                    //mc.classList.add("text-white");
                    mt.innerHTML = "The Fashion Police will be knocking at your door!!!";
                    mb.innerHTML = "We have logged your GPS location and will find you!!! We are obligated to protect the eyes of the general public from your poor clothing choices!!!";
                }
            }
}