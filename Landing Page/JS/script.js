
 var scheduleLink = document.createElement('a');
    scheduleLink.setAttribute('href', 'https://www.icc-cricket.com/tournaments/t20cricketworldcup/matches');
    scheduleLink.setAttribute('target', '_blank');
    scheduleLink.textContent = 'SCHEDULE';
    scheduleLink.style.color = 'white';
    
    document.getElementById('link-container').appendChild(scheduleLink);

    
    var ticketsLink = document.createElement('a');
    ticketsLink.setAttribute('href', 'https://tickets.t20worldcup.com/selection/event/date?productId=10228971678917');
    ticketsLink.setAttribute('target', '_blank');
    ticketsLink.textContent = 'TICKETS';
    ticketsLink.style.color = 'white';

    document.getElementById('link-containers').appendChild(ticketsLink);


    var newsLink = document.createElement('a');
    newsLink.setAttribute('href', 'https://www.icc-cricket.com/tournaments/t20cricketworldcup/news');
    newsLink.setAttribute('target', '_blank');
    newsLink.textContent = 'MORE NEWS';
    newsLink.style.color = 'white';

    document.getElementById('link-containerss').appendChild(newsLink);


     var conLink = document.createElement('a');
    conLink.setAttribute('href', 'https://www.icc-cricket.com/about/contact-us/icc-contact-details');
    conLink.setAttribute('target', '_blank');
    conLink.textContent = 'contact_us';
    conLink.style.color = 'white';

    document.getElementById('link-containersss').appendChild(conLink);
        const imageGallery = document.getElementById("imageGallery");

        imageGallery.addEventListener("mouseover", (event) => {
          if (event.target.tagName === "IMG") {
            event.target.style.width = "400px";
          }
        });

        imageGallery.addEventListener("mouseout", (event) => {
          if (event.target.tagName === "IMG") {
            event.target.style.width = "300px";
          }
        });