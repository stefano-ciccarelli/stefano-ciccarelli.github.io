const content = {
    en: {
      tagline: "Your Personalized Diet Plans & Meal Generator",
      welcome: {
        title: "Welcome to SmartChef",
        text: "We create personalized diet plans based on your needs and goals. Start with our free meal generator or upgrade to our premium subscription for daily reminders and detailed recipes.",
        button: "Get Started",
      },
      services: {
        freeMealGenerator: {
          title: "Free Meal Generator",
          text: "Generate customized meal plans based on your dietary preferences and goals.",
          button: "Try it now",
        },
        premiumSubscription: {
          title: "Premium Subscription",
          text: "Upgrade to our premium plan to receive daily reminders, detailed recipes, and support via SMS or alternative communication channels.",
          button: "Subscribe",
        },
      },
      testimonials: {
        title: "Testimonials",
        quotes: [
          {
            text: "Thanks to SmartChef, I've finally found a diet that works for me!",
            author: "Maria G.",
          },
          {
            text: "SmartChef's meal generator is amazing, it helped me discover new healthy recipes.",
            author: "Giovanni B.",
          },
          {
            text: "SmartChef helped me achieve my fitness goals in no time!",
            author: "Roberto L.",
          },
        ],
      },
    },
    it: {
        tagline: "I tuoi piani alimentari personalizzati e generatore di pasti",
        welcome: {
          title: "Benvenuto su SmartChef",
          text: "Creiamo piani alimentari personalizzati in base alle tue esigenze e obiettivi. Inizia con il nostro generatore di pasti gratuito o passa alla nostra sottoscrizione premium per ricevere promemoria quotidiani e ricette dettagliate.",
          button: "Inizia",
        },
        services: {
          freeMealGenerator: {
            title: "Generatore di pasti gratuito",
            text: "Genera piani alimentari personalizzati basati sulle tue preferenze alimentari e obiettivi.",
            button: "Provalo ora",
          },
          premiumSubscription: {
            title: "Sottoscrizione Premium",
            text: "Passa al nostro piano premium per ricevere promemoria quotidiani, ricette dettagliate e supporto tramite SMS o altri canali di comunicazione.",
            button: "Iscriviti",
          },
        },
        testimonials: {
          title: "Testimonianze",
          quotes: [
            {
              text: "Grazie a SmartChef, ho finalmente trovato una dieta che funziona per me!",
              author: "Maria G.",
            },
            {
              text: "Il generatore di pasti di SmartChef è incredibile, mi ha aiutato a scoprire nuove ricette sane.",
              author: "Giovanni B.",
            },
            {
              text: "SmartChef mi ha aiutato a raggiungere i miei obiettivi di fitness in poco tempo!",
              author: "Roberto L.",
            },
          ],
        },
      },
    };
    
    function openLink() {
        window.open('https://stefano-ciccarelli-chef-intelligente-dieta-ai-7i3ufr.streamlit.app/', '_blank');
      }

    function changeLanguage(lang) {
      const welcome = content[lang].welcome;
      const services = content[lang].services;
      const testimonials = content[lang].testimonials;
    
      document.getElementById("tagline").innerText = content[lang].tagline;
    
      document.getElementById("welcome-section").innerHTML = `
    <div class="row">
        <div class="col-md-6">
            <img src="smart-chef.jpg" alt="Smart Chef" class="img-fluid">
        </div>
        <div class="col-md-6">
            <h2>${welcome.title}</h2>
            <p>${welcome.text}</p>
            <button class="btn btn-primary" onclick="openLink()">${welcome.button}</button>
        </div>
    </div>
      `;
    
      document.getElementById("services-section").innerHTML = `
      <div class="container">
      <h2 class="text-center">Our Services</h2>
      <div class="row mt-4">
          <div class="col-md-6">
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${services.freeMealGenerator.title}</h5>
                      <p class="card-text">${services.freeMealGenerator.text}</p>
                      <button class="btn btn-outline-primary" onclick="openLink()">${services.freeMealGenerator.button}</button>
                  </div>
              </div>
          </div>
          <div class="col-md-6">
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${services.premiumSubscription.title}</h5>
                      <p class="card-text">${services.premiumSubscription.text}</p>
                      <button class="btn btn-primary" onclick="openLink()">${services.premiumSubscription.button}</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
  `;

  document.getElementById("testimonials-section").innerHTML = `
    <div class="container">
        <h2 class="text-center">${testimonials.title}</h2>
        <div class="row mt-4">
            ${testimonials.quotes
              .map(
                (quote) => `
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <blockquote class="blockquote">
                                    <p>${quote.text}</p>
                                    <footer class="blockquote-footer">${quote.author}</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                `
              )
              .join("")}
        </div>
    </div>
  `;
}

// Call changeLanguage with default language on page load
changeLanguage('en');
