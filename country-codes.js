const countries = [
    "Afghanistan", "Alaska (USA)", "Albania", "Algeria", "American Samoa",
    "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia",
    "Aruba", "Ascension", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
    "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia / Herzegovina", "Botswana",
    "Brazil", "British Virginislands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Africanrepublic",
    "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Congo Dem. Rep.(Zaire)", "Cook Island",
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Diego Garcia", "Djibouti",
    "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland",
    "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany",
    "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadaloupe", "Guam",
    "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Hawaii (USA)", "Honduras", "Hong Kong",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
    "Korea (North)", "Korea South", "Kuwait", "Kyrghyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar",
    "Malawi","Malaysia","Maldives","Mali","Malta","Mariana Is.(Saipan)","Marshall Islands",
    "Martinique(Frenchantilles)", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", 
    "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia",
    "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua",
    "Niger", "Nigeria", "Niue Island", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama",
    "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Puerto Rico (I) (USA)", "Puerto Rico (Ii)(USA)", "Qatar", "Reunion", "Romania", "Russia", "Rwanda",
    "Samoa Western", "San Marino", "Sao Tome &Principe", "Saudi Arabia", "Senegal", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "Spain", "Sri Lanka", "St Helena", "St Kitts & Nevis", "St Lucia", "St Vincent &Grenadines",
    "St. Pierre &Miquelon", "Sudan", "Surinam", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
    "Tajikistan", "Tanzania", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Turks & Caicosislands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Virgin Island (USA)", "Wallis & Futuna", "Yemen", "Yugoslavia (Serbia)", "Zambia", "Zanzibar", "Zimbabwe",
  ];
  const codes = [
    93, 1, 355, 213, 1, 376, 244, 1, 1, 54, 374,
    297, 247, 61, 43, 994, 1, 973, 880, 1, 375, 32, 501, 229,
    1, 975, 591, 387, 267, 55, 1, 673, 359, 226, 257, 855, 237,
    1, 238, 1, 236, 235, 56, 86, 57, 269, 242, 243, 682, 506, 385, 53,
    357, 420, 45, 246, 253, 1, 1, 670, 593, 20, 503, 240,291, 372, 251,
    500, 298, 679, 358, 33, 594, 689, 241, 220, 995, 49, 233, 350, 30, 299,1,
    590, 1, 502, 224, 245, 592, 509, 1, 504, 852, 36, 354, 91, 62, 98,
    964, 353, 972, 39, 225, 1, 81, 962, 7, 254, 686, 850, 82, 965, 996,856,
    371, 961, 266, 231, 218, 423, 370, 352, 853, 389, 261, 265, 60, 960, 223, 356,
    1, 692, 596, 222, 230, 269, 52, 691, 373, 377, 976, 1, 212, 258, 95, 264, 674, 977, 31, 599, 687,
    64, 505, 227, 234, 683, 47, 968, 92, 680, 970, 507, 675, 595, 51, 63,
    48, 351, 1, 1, 974, 262, 40, 7, 250, 685, 378, 239, 966, 221, 248, 232, 65,
    421, 386, 677, 252, 27, 34, 94, 290, 1, 1, 1, 508, 249, 597, 268, 46, 41, 963, 886,
    992, 255, 66, 228, 690, 676, 1, 216, 90, 993, 1, 688, 256, 380, 971, 44, 598, 998, 678,
    39, 58, 84, 1, 681, 967, 381, 260, 255, 263,
  ];
  
  //our input element
  var input = document.getElementById("myCountry");
  matchCountries(countries, codes, input);
  
  function matchCountries(arr, codes, inp) {
    var currentFocus;
  
    //on every input a function is called which matches countries names from input values
    //and makes them appear below the input element
    inp.addEventListener("input", function (event) {
      var itemContainer,
        item,
        i,
        val = this.value;
  
      closeAllLists();
      if (!val) {
        return false;
      }
      currentFocus = -1;
  
      //create a div element which will contain the matching countries
      itemContainer = document.createElement("div");
      itemContainer.setAttribute("class", "item-container");
      itemContainer.setAttribute("id", "itemContainer");
      this.parentNode.appendChild(itemContainer);
  
      //for each country name from array
      for (i = 0; i < arr.length; i++) {
        //if input matches with any country name make a div element for that country name
        if (
          arr[i].substr(0, val.length).toUpperCase() ==
          val.toUpperCase()
        ) {
          item = document.createElement("div");
          //make matching characters bold
          item.innerHTML =
            "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          item.innerHTML += arr[i].substr(val.length);
  
          //an input element in each matching item that will hold the value of that item's value
          item.innerHTML +=
            "<input type='hidden' value='" + arr[i] + "'/>";
            
            
            //on click on item from dropdown autofill the input field
            item.addEventListener("click", function (e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              
              closeAllLists();
  
              let n = arr.indexOf(inp.value);
              document.getElementById("code").innerHTML = `+ ${codes[n]} `;
              document.querySelector('input[name="country-code"]').value = `+ ${codes[n]} `;
          });
          itemContainer.appendChild(item);
        }
      }
    });
    
    inp.addEventListener("keydown", function(e) {
      var x = document.getElementById('itemContainer');
      if(x) x = x.getElementsByTagName("div");
  
      //arrow down key pressed
      if(e.keyCode == 40){
        currentFocus++;
        addActive(x);
      }
      //arrow up key pressed
      if(e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if(e.keyCode == 13) { //Enter key pressed
        e.preventDefault();
        if(currentFocus > - 1) {
          if(x) x[currentFocus].click();
        }
      }
    });
  
    function addActive(x) {
      if(!x) return false
  
      reomveActive(x); // remove active from all items
  
      if( currentFocus >= x.length) currentFocus = 0;
      if( currentFocus < 0) currentFocus = (x.length - 1);
  
      x[currentFocus].classList.add("item-active")
    }
    function reomveActive(x) {
      for( let i = 0; i < x.length; i++) {
        x[i].classList.remove("item-active");
      }
    }
    
    function closeAllLists(elem) {
      //close all items list in the document, except the one passes as an argument
      var x = document.getElementsByClassName("item-container");
  
      for (var i = 0; i < x.length; i++) {
        if (elem != x[i] && elem != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    
    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
  }