//cookie consent
window.addEventListener("load", function(){
    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#000000",
          "text": "#ffffff"
        },
        "button": {
          "background": "#ffc600",
          "text": "#000000"
        }
      },
      "theme": "edgeless",
      "position": "top"
    })});

//smooth scrolling effect
$( 'body' ).on( 'click','.interest', function() {
    $('.leaflet-marker-pane').children('img').hide();
   
    console.log($(this).attr("data-cat"));
    var  marker = []; 
    marker = document.getElementsByClassName($(this).attr("data-cat"));
    $(marker).show();   
   //if(marker._icon.id != $(this).attr("data-cat")){
     
  // }
   
  });

  $( 'body' ).on( 'click','#all', function() {
    $('.leaflet-marker-pane').children('img').show();
    });


// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

//overlay open and close
/* Open */
function openNav() {
    document.getElementById("myNav").style.display = "block";
   
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

//search function
const lmarks = 'https://raw.githubusercontent.com/eitchio/livLandM/master/livLandmarks.json';

const searchValues = [];

fetch(lmarks)
    .then(blob => blob.json())
    .then(data => searchValues.push(...data))

  

function findMatches(wordToMatch, searchValues) {
    return searchValues.filter(place => {

        const regex = new RegExp(wordToMatch,'gi');
        return place.description.match(regex) 
    });
}


function displayMatches() {
    const matchArray = findMatches(this.value, searchValues);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value,'gi');
        const placeName = place.description.replace(regex, `<span class="hl">${this.value}</span>`);
        const link = place.link;

        return`
            <li><a href=${link} onclick="closeNav()">
                <span class="name">${placeName}</span></a>

            </li>
        `;
    }).join('');
    suggestions.innerHTML = html; 
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
