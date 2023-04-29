(function () {
    /***** Oferta gastronòmica *****/
    afegeixEsdevenimentCopiaText();
  
    /***** Reserves *****/
    afegeixEsdevenimentCanviNumeroComensals();
    afegeixEsdevenimentEnviamentFormulari();
  
    /***** Footer (secció contacte) *****/
    afegeixHoraActual();
  
  
    /***** Oferta gastronòmica *****/
    function afegeixEsdevenimentCopiaText() {
          const seccio = document.querySelector('#oferta-gastronomica');
        seccio.addEventListener('copy', (event) => {
          event.preventDefault();
          window.alert('Sol·liciti a info@restaurantorenga.cat l`oferta gastronòmica en format digital i li enviarem un document PDF amb tota la informació.');
        });
      
    }
  
  
    /***** Reserves *****/
    function afegeixEsdevenimentCanviNumeroComensals() {
    const input = document.getElementById('numeroComensals');
    const output = document.getElementById('preuAproximat');

    input.addEventListener('input', () => {
    const comensales = parseInt(input.value);
    const precio = comensales * 50;
    output.value = precio;
});

    document.getElementById("numeroComensals").addEventListener("change", afegeixEsdevenimentCanviNumeroComensals);
    
    }
  
    function afegeixEsdevenimentEnviamentFormulari() {
        {
            const formulari = document.querySelector('form');
            formulari.addEventListener('submit', function(event) {
              const nom = formulari.elements.nom.value;
              const comensalsMenors = formulari.elements['comensals-menors'].value;
              const ubicacio = formulari.elements.ubicacio.value;
              if (comensalsMenors === 'si' && ubicacio === 'sala-mexic') {
                alert("No es pot fer una reserva si hi ha menors de 5 anys i la ubicació triada és la Sala Mèxic ja que no està suficientment habilitada.");
                event.preventDefault();
              }
            });
          }
          window.addEventListener('DOMContentLoaded', afegeixEsdevenimentEnviamentFormulari);
    
      
    }
  
  
    /***** Footer (secció contacte) *****/
    function afegeixHoraActual() {
      const nouParagraf = document.createElement("p");
      nouParagraf.innerHTML = "Hora actual: <span id=\"horaActual\"></span>";
  
      const elementAddress = document.querySelector("address");
      const ultimParagraf = elementAddress.lastElementChild;
  
      elementAddress.removeChild(ultimParagraf);
      elementAddress.appendChild(nouParagraf);
      elementAddress.appendChild(ultimParagraf);
  
      setInterval(actualitzaHora, 1000);
    }
  
    function actualitzaHora() {
      const data = new Date();
      let hores = data.getHours();
      let minuts = data.getMinutes();
      let segons = data.getSeconds();
      hores = estableixFormatDosDigits(hores);
      minuts = estableixFormatDosDigits(minuts);
      segons = estableixFormatDosDigits(segons);
      document.getElementById("horaActual").innerHTML = hores + ":" + minuts + ":" + segons;
    }
  
    function estableixFormatDosDigits(valor) {
        if (valor < 10) {
            valor = "0" + valor;
          }
          return valor;
        }
           
        
    afegeixHoraActual(); 
  })();

  window.addEventListener("load", function() {
    // Llamada a la función afegeixHoraActual()
    afegeixHoraActual();
  });