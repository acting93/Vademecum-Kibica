$(window).resize(function(){
   if($(this).width() <= 150){
      /*$(prevBtn).css({fontSize:"10px"}); 
      $(nextBtn).css({fontSize:"10px"});*/
      $(prevBtn2).css({fontSize:"10px"});
      $(nextBtn2).css({fontSize:"10px"});
   }
   else if($(this).width() <= 200){
      /*$(prevBtn).css({fontSize:"15px"});  
      $(nextBtn).css({fontSize:"15px"});*/
      $(prevBtn2).css({fontSize:"15px"});
      $(nextBtn2).css({fontSize:"15px"});
   }
   else if($(this).width() <= 250){
      /*$(prevBtn).css({fontSize:"20px"});  
      $(nextBtn).css({fontSize:"20px"});*/
      $(prevBtn2).css({fontSize:"20px"});
      $(nextBtn2).css({fontSize:"20px"});
  
   }
  else{
      /*$(prevBtn).removeAttr('style');  
      $(nextBtn).removeAttr('style');*/
      $(prevBtn2).removeAttr('style');
      $(nextBtn2).removeAttr('style');
 
   }    
});


var menu = document.getElementById("navigation")
var menuPosition = menu.offsetTop

function menuSticky(){
    if(window.pageYOffset >= menuPosition){
        menu.classList.add("stickyMenu")
    }
    else{menu.classList.remove("stickyMenu")}
}
window.onscroll = function(){menuSticky()}

let matches = document.getElementsByClassName("containersMatch");
let clicks = document.getElementsByClassName("boxClick2");
let currentClicks = 0;
let currentInfo = 0;
  
       let startSlideInfo = function(){
           matches[0].style.display = "block"
           clicks[0].style.background = "#0030ff"
        }
        startSlideInfo()

        let resetSlides =()=>{
             for(let i=0;i<matches.length;i++){
                matches[i].style.display = "none" 
                }
        }    
        
        let resetColorClick =()=>{
           for(let i=0;i<clicks.length;i++){
               clicks[i].style.background = "#c4cfff"
           }
        }
        
              $(prevBtn2).click(function(){
                if(currentInfo == matches.length -1 || currentClicks == clicks.length-1){
                    currentInfo = -1
                    currentClicks = -1
                }
                  
                resetSlides()
                resetColorClick()   
                $(matches[currentInfo+1]).fadeIn(1000);
                currentInfo++
                clicks[currentClicks+1].style.background = "#0030ff"  
                currentClicks++ 
            });
            $(nextBtn2).click(function(){
                if(currentInfo == 0 || currentClicks == 0){
                    currentInfo = matches.length
                    currentClicks = clicks.length
                }
                resetSlides()
                resetColorClick()
                $(matches[currentInfo-1]).fadeIn(1000)
                currentInfo--
                clicks[currentClicks-1].style.background = "#0030ff"  
                currentClicks--
            });

$(document).ready(function(){
    $('.news').mouseover(function(){
        $(this).children('.backgroundNews2').show();
        $(this).children('.backgroundNews').hide();
    });
    $('.news').mouseout(function(){
        $(this).children('.backgroundNews2').hide()
        $(this).children('.backgroundNews').show();
    });
});

let leaderSpot = document.getElementsByClassName("infoPlayerL")
let viceSpot = document.getElementsByClassName("infoPlayerV")
let thirdSpot = document.getElementsByClassName("infoPlayer3")

const leaders = {
        ekstraklasa:{/*ekstraklasa*/
            leader:{
                imie:"Jesus Ilmaz",
                klub:"Jagiellonia Białystok",
                bramki:"7",
                },
            vice:{
                imie:"Paweł Brożek",
                klub:"Wisła Kraków",
                bramki:"5", 
            },
            third:{
                imie:"Jarosław Niezgoda",
                klub:"Legia Warszawa",
                bramki:"5", 
            }
           
    },
        liga1:{/*1liga*/
            leader:{
                imie:"Omran Haydary",
                klub:"Olimpia Grudziądz",
                bramki:"10",
                },
            vice:{
                imie:"Mateusz Marzec",
                klub:"GKS Bełchatów",
                bramki:"8", 
            },
            third:{
                imie:"Karol Danielak",
                klub:"Podbeskidzie Bielsko-Biała",
                bramki:"7", 
            },
    },
        liga2:{/*2liga*/
             leader:{
                imie:"Marcin Robak",
                klub:"Widzew Łódź",
                bramki:"10",
               },
             vice:{
                imie:"Paweł Wojciechowski",
                klub:"Górnik Łęczna",
                bramki:"9", 
            },
            third:{
                imie:"Damian Szuprytowski",
                klub:"Olimpia Elbląg",
                bramki:"8", 
            },
    },
        liga3:{/*3liga*/
            leader:{
                imie:"Krzysztof Ropski",
                klub:"Siarka Tarnobrzeg",
                bramki:"10",
                },
            vice:{
                imie:"Rafał Król",
                klub:"Stal Kraśnik",
                bramki:"9", 
            },
            third:{
                imie:"Bartłomiej Maćczak",
                klub:"Sokół Aleksandrów Łódzki",
                bramki:"8", 
            }
    }
};

let playersInformations =()=>{
    leaderSpot[0].innerHTML = `Zawodnik: ${leaders.ekstraklasa.leader.imie} <br/>Klub: ${leaders.ekstraklasa.leader.klub}<br/>Bramki: ${leaders.ekstraklasa.leader.bramki}`
    
    viceSpot[0].innerHTML = `Zawodnik: ${leaders.ekstraklasa.vice.imie} <br/>Klub: ${leaders.ekstraklasa.vice.klub}<br/>Bramki: ${leaders.ekstraklasa.vice.bramki}`
    
    thirdSpot[0].innerHTML = `Zawodnik: ${leaders.ekstraklasa.third.imie} <br/>Klub: ${leaders.ekstraklasa.third.klub}<br/>Bramki: ${leaders.ekstraklasa.third.bramki}`
    
    leaderSpot[1].innerHTML = `Zawodnik: ${leaders.liga1.leader.imie} <br/>Klub: ${leaders.liga1.leader.klub}<br/>Bramki: ${leaders.liga1.leader.bramki}`
    
    viceSpot[1].innerHTML = `Zawodnik: ${leaders.liga1.vice.imie} <br/>Klub: ${leaders.liga1.vice.klub}<br/>Bramki: ${leaders.liga1.vice.bramki}`
    
    thirdSpot[1].innerHTML = `Zawodnik: ${leaders.liga1.third.imie} <br/>Klub: ${leaders.liga1.third.klub}<br/>Bramki: ${leaders.liga1.third.bramki}`
    
    leaderSpot[2].innerHTML = `Zawodnik: ${leaders.liga2.leader.imie} <br/>Klub: ${leaders.liga2.leader.klub}<br/>Bramki: ${leaders.liga2.leader.bramki}`
    
    viceSpot[2].innerHTML = `Zawodnik: ${leaders.liga2.vice.imie} <br/>Klub: ${leaders.liga2.vice.klub}<br/>Bramki: ${leaders.liga2.vice.bramki}`
     
    thirdSpot[2].innerHTML = `Zawodnik: ${leaders.liga2.third.imie} <br/>Klub: ${leaders.liga2.third.klub}<br/>Bramki: ${leaders.liga2.third.bramki}`
    
    leaderSpot[3].innerHTML = `Zawodnik: ${leaders.liga3.leader.imie} <br/>Klub: ${leaders.liga3.leader.klub}<br/>Bramki: ${leaders.liga3.leader.bramki}`
    
    viceSpot[3].innerHTML = `Zawodnik: ${leaders.liga3.vice.imie} <br/>Klub: ${leaders.liga3.vice.klub}<br/>Bramki: ${leaders.liga3.vice.bramki}`
    
    thirdSpot[3].innerHTML = `Zawodnik: ${leaders.liga3.third.imie} <br/>Klub: ${leaders.liga3.third.klub}<br/>Bramki: ${leaders.liga3.third.bramki}`
}
playersInformations()

let currentDayMatch = 0
let meczeDiv = document.getElementsByClassName("meczeleague");


let clicked = true
$(document).ready(function(){
    $(navbarBtn).click(function(){
         if(clicked == true){
             clicked = false
             $(navbarBtn).css({background:"yellow"})
         }
         else{
             $(navbarBtn).css({background:"red"})
             clicked = true
         }
    });
});

let resetMatch =()=>{
   for(let i=0;i<meczeDiv.length;i++){
       meczeDiv[i].style.display = "none"
   }
};
let firstMatchDiv =()=>{
    meczeDiv[0].style.display = "block"
    currentDayMatch = 0
    $(noGame).hide();
    $(downBtn).show();
    $(upBtn).hide();
};
$(downBtn).click(function(){
    resetMatch()
    meczeDiv[currentDayMatch+1].style.display = "block"
    currentDayMatch++
    $(downBtn).show();
    $(upBtn).show();
    if(currentDayMatch === meczeDiv.length-1){
      $(downBtn).hide();
      return     
    }
});
$(upBtn).click(function(){
    resetMatch()
    $(downBtn).show();
    meczeDiv[currentDayMatch-1].style.display = "block"
    currentDayMatch--
    if(currentDayMatch === 0){
      $(upBtn).hide();
      return    
    }
});

let daysName = document.getElementsByClassName("days");
let daysInContent = document.getElementsByClassName("daysInContent");

let calender =()=>{

        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day =  date.getDate();   
        let days = date.getDay();
        
    
        let monthsName = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"]
        let daysInRow = ["Pn","Wt","Śr","Czw","Pt","So","Nd"]
        
       
        
             
        let daysInMonth = new Date(year,month+1,0).getDate()    
        let firstDay = new Date(year,month,1).getDay() 
           
        let wholeDays = daysInMonth
       
        
        let container = document.createElement("div");
            container.classList.add("calenderContainer")
            $(divforcalender).append(container)
    
        let monthHeader = document.createElement("div");
            monthHeader.classList.add("calenderHeader");
            container.appendChild(monthHeader);
        
        /*let arrowsL = document.createElement("button");
                arrowsL.innerHTML = "&#10094;"
                arrowsL.classList.add("leftArrow")
                monthHeader.appendChild(arrowsL);
    
        let arrowsR = document.createElement("button");
                arrowsR.innerHTML = "&#10095;"
                arrowsR.classList.add("rightArrow")
                monthHeader.appendChild(arrowsR);*/
    
        let nameMonths = document.createElement("div");        
            nameMonths.innerHTML = monthsName[month]+" "+year
            nameMonths.classList.add("nameMonth")
            monthHeader.appendChild(nameMonths)

        let divDays = document.createElement("div")
            divDays.classList.add("containerDays")
            container.appendChild(divDays)
    
        let daysCreate =()=>{
                for(let i=0;i<daysInRow.length;i++){
                    let daysInHeader = document.createElement("div")
                    daysInHeader.classList.add("days")
                    divDays.appendChild(daysInHeader)
                    }
                  }
            daysCreate()
    
            let matchDays =()=>{    
                for(let i=0;i<daysName.length;i++){
                    daysName[i].innerHTML =  daysInRow[i]
                  }
                  }
            matchDays()
    
           let oneday = 1
           let currentDate = new Date()
           let daysCounter =()=>{
               let content = document.createElement("div")
                    content.classList.add("daysContent");
                    container.appendChild(content);
                    
                  if(firstDay === 0){
                     firstDay = 7  
                     }   
                  for(let i=0;i<firstDay-1;i++){
                      let restDiv = document.createElement("div")
                      restDiv.classList.add("daysInContent");
                      content.appendChild(restDiv)
                      }
                  for(let i=0;i<wholeDays;i++){
                      let newDiv = document.createElement("div")
                      newDiv.classList.add("daysInContent");
                      content.appendChild(newDiv)
                      newDiv.innerHTML = i+1
                      
                      $(newDiv).mouseover(function(){
                          $(this).css({background:"#4a4a4a",cursor:"pointer"})
                      })      
                      $(newDiv).mouseleave(function(){
                          $(this).css({background:"none"})
                      })
                      
                     if(year == currentDate.getFullYear() && month == currentDate.getMonth() && day == i+1){
                       newDiv.style.background = "#525252"
                        $(newDiv).mouseleave(function(){
                          $(this).css({background:"#525252"})
                      })       
                       }
                      else{
                        newDiv.style.background = "none"  
                      }
                 
                      $(newDiv).click(function(){
                          resetMatch()
                          let e = document.getElementById("ekstraklasa");
                          let f = document.getElementById("firstLeague");
                          let s = document.getElementById("secondLeague");
                          let t = document.getElementById("thirdLeague");
                          let n = document.getElementById("noGame");
                          let m = document.getElementsByClassName("meczeleague");
                          let mn = document.getElementById("mecze");
                          let outputE = ''
                          let outputF = ''
                          let outputS = ''
                          let outputT = ''
                          
                          if(i == 7){
                             firstMatchDiv()
                             fetch('./games.json')
                            .then(response =>{return response.json()})
                            .then(data =>{
                                    data.ekstraklasa8.forEach(function(el){
                                    outputE += `<br/>${el.teams}` 
                                       e.innerHTML = `EKSTRAKLASA:<br/> ${outputE}`
                                    });
                                    data.liga18.forEach(function(el){
                                    outputF += `<br/>${el.teams}` 
                                       f.innerHTML =`1 LIGA:<br/> ${outputF}`
                                    });
                                    outputS += "brak meczów drugoligowych w tym dniu" 
                                       s.innerHTML = outputS
                                       
                                    data.liga38.forEach(function(el){
                                    outputT += `<br/>${el.teams}` 
                                       t.innerHTML = `3 LIGA:<br/> ${outputT}`
                                    });
                                })
                            .catch(err=>console.log("error"))
                          }
                           /*let xhr =  new XMLHttpRequest()
                           
                           xhr.onload = function(){
                               if(this.status == 200){
                                   let data = JSON.parse(this.responseText)
                                   data.ekstraklasa8.forEach(function(el){
                                    outputE += `<br/>${el.teams}` 
                                       e.innerHTML = `EKSTRAKLASA:<br/> ${outputE}`
                                    });
                                    data.liga18.forEach(function(el){
                                    outputF += `<br/>${el.teams}` 
                                       f.innerHTML =`1 LIGA:<br/> ${outputF}`
                                    });
                                    outputS += "brak meczów drugoligowych w tym dniu" 
                                       s.innerHTML = outputS
                                       
                                    data.liga38.forEach(function(el){
                                    outputT += `<br/>${el.teams}` 
                                       t.innerHTML = `3 LIGA:<br/> ${outputT}`
                                    });
                                   
                               }
                               }
                               xhr.open("GET","games.json",true)
                               xhr.send()
                          } */
                         else if(i == 8){
                             firstMatchDiv()
                             fetch('./games.json')
                             .then(response => {return response.json()})
                             .then(data => {
                                 data.ekstraklasa9.forEach(function(el){
                                    outputE += `<br/>${el.teams} ${el.hrs}` 
                                       e.innerHTML = `EKSTRAKLASA:<br/> ${outputE}`
                                    });
                                    data.liga19.forEach(function(el){
                                    outputF += `<br/>${el.teams} ${el.hrs}` 
                                       f.innerHTML =`1 LIGA:<br/> ${outputF}`
                                       
                                    });
                                    data.liga29.forEach(function(el){
                                    outputS += `<br/>${el.teams} ${el.hrs}` 
                                       s.innerHTML = `2 LIGA:<br/> ${outputS}`
                                       
                                    });
                                    data.liga39.forEach(function(el){
                                    outputT += `<br/>${el.teams} ${el.hrs}` 
                                       t.innerHTML = `3 LIGA:<br/> ${outputT}`
                                    });
                             }) 
                             .catch(err => console.log("error"))  
                          }
                          else if(i == 9){
                              firstMatchDiv()
                              fetch('./games.json')
                              .then(response => {return response.json()})
                              .then(data =>{
                                 data.ekstraklasa10.forEach(function(el){
                                    outputE += `<br/>${el.teams} ${el.hrs}` 
                                       e.innerHTML = `EKSTRAKLASA:<br/> ${outputE}`
                                    });
                                  data.liga110.forEach(function(el){
                                    outputF += `<br/>${el.teams} ${el.hrs}` 
                                       f.innerHTML =`1 LIGA:<br/> ${outputF}`
                                       
                                    });
                                  data.liga210.forEach(function(el){
                                    outputS += `<br/>${el.teams} ${el.hrs}` 
                                       s.innerHTML = `2 LIGA:<br/> ${outputS}`
                                       
                                    });
                                  data.liga310.forEach(function(el){
                                    outputT += `<br/>${el.teams} ${el.hrs}` 
                                       t.innerHTML = `3 LIGA:<br/> ${outputT}`
                                    });
                              })
                              .catch(err => console.log("error"))
                          }
                          else if(i == 14){
                              firstMatchDiv()
                              fetch('./games.json')
                              .then(response =>{return response.json()})
                              .then(data =>{
                                    outputE += `Brak meczów w tym dniu` 
                                       e.innerHTML = `EKSTRAKLASA:<br/> ${outputE}`
                                    outputF += `Brak meczów w tym dniu` 
                                       f.innerHTML =`1 LIGA:<br/> ${outputF}`
                                       
                                    data.liga215.forEach(function(el){
                                    outputS += `<br/>${el.teams} ${el.hrs}` 
                                       s.innerHTML = `2 LIGA:<br/> ${outputS}`
                                       
                                    });
                                    data.liga315.forEach(function(el){
                                    outputT += `<br/>${el.teams} ${el.hrs}` 
                                       t.innerHTML = `3 LIGA:<br/> ${outputT}`
                                    });
                              })
                              .catch(err=> console.log("error"))
                          }
                           else if(i == 15){
                               firstMatchDiv()
                              fetch('./games.json')
                              .then(response =>{return response.json()})
                              .then(data =>{
                                    outputE += `Brak meczów w tym dniu` 
                                       e.innerHTML = `EKSTRAKLASA:<br/> ${outputE}`
                                       
                                    data.liga116.forEach(function(el){
                                    outputF += `<br/>${el.teams} ${el.hrs}` 
                                       f.innerHTML =`1 LIGA:<br/> ${outputF}`
                                       
                                    });
                                    data.liga216.forEach(function(el){
                                    outputS += `<br/>${el.teams} ${el.hrs}` 
                                       s.innerHTML = `2 LIGA:<br/> ${outputS}`
                                       
                                    });
                                    data.liga316.forEach(function(el){
                                    outputT += `<br/>${el.teams} ${el.hrs}` 
                                       t.innerHTML = `3 LIGA:<br/> ${outputT}`
                                    });
                              })
                              .catch(err=> console.log("error"))
                          }
                           else if(i == 16){
                              firstMatchDiv()   
                              fetch('./games.json')
                              .then(response =>{return response.json()})
                              .then(data =>{
                                    outputE += `Brak meczów w tym dniu` 
                                       e.innerHTML = `EKSTRAKLASA:<br/> ${outputE}`
                                       
                                    data.liga117.forEach(function(el){
                                    outputF += `<br/>${el.teams} ${el.hrs}` 
                                       f.innerHTML =`1 LIGA:<br/> ${outputF}`
                                       
                                    });
                                    data.liga217.forEach(function(el){
                                    outputS += `<br/>${el.teams} ${el.hrs}` 
                                       s.innerHTML = `2 LIGA:<br/> ${outputS}`
                                       
                                    });
                                    data.liga317.forEach(function(el){
                                    outputT += `<br/>${el.teams} ${el.hrs}` 
                                       t.innerHTML = `3 LIGA:<br/> ${outputT}`
                                    });
                              })
                              .catch(err=> console.log("error"))
                          }
                          else if(i == 21){
                              firstMatchDiv()   
                              fetch('./games.json')
                              .then(response =>{return response.json()})
                              .then(data =>{
                                  data.ekstraklasa22.forEach(function(el){
                                    outputE += `<br/>${el.teams} ${el.hrs}` 
                                       e.innerHTML = `EKSTRAKLASA:<br/> ${outputE}`
                                    });
                                    data.liga122.forEach(function(el){
                                    outputF += `<br/>${el.teams} ${el.hrs}` 
                                       f.innerHTML =`1 LIGA:<br/> ${outputF}`
                                    });
                                    outputS += `Brak meczów w tym dniu` 
                                    s.innerHTML = `2 LIGA:<br/> ${outputS}`
                                    outputT += `Brak meczów w tym dniu` 
                                    t.innerHTML = `3 LIGA:<br/> ${outputT}`
                              })
                              .catch(err=> console.log("error"))
                          }
                            else if(i == 22){
                              firstMatchDiv()   
                              fetch('./games.json')
                              .then(response =>{return response.json()})
                              .then(data =>{
                                  data.ekstraklasa23.forEach(function(el){
                                    outputE += `<br/>${el.teams} ${el.hrs}` 
                                       e.innerHTML = `EKSTRAKLASA:<br/> ${outputE}`
                                    });
                                    data.liga123.forEach(function(el){
                                    outputF += `<br/>${el.teams} ${el.hrs}` 
                                       f.innerHTML =`1 LIGA:<br/> ${outputF}`
                                       
                                    });
                                    data.liga223.forEach(function(el){
                                    outputS += `<br/>${el.teams} ${el.hrs}` 
                                       s.innerHTML = `2 LIGA:<br/> ${outputS}`
                                       
                                    });
                                    data.liga323.forEach(function(el){
                                    outputT += `<br/>${el.teams} ${el.hrs}` 
                                       t.innerHTML = `3 LIGA:<br/> ${outputT}`
                                    });
                              })
                              .catch(err=> console.log("error"))
                          }
                            else if(i == 23){
                              firstMatchDiv()   
                              fetch('./games.json')
                              .then(response =>{return response.json()})
                              .then(data =>{
                                  data.ekstraklasa24.forEach(function(el){
                                    outputE += `<br/>${el.teams} ${el.hrs}` 
                                       e.innerHTML = `EKSTRAKLASA:<br/> ${outputE}`
                                    });
                                    outputF += `Brak meczów w tym dniu` 
                                       f.innerHTML =`1 LIGA:<br/> ${outputF}`
                                       
                                    outputS += `Brak meczów w tym dniu` 
                                       s.innerHTML = `2 LIGA:<br/> ${outputS}`
                                       
                                    data.liga324.forEach(function(el){
                                    outputT += `<br/>${el.teams} ${el.hrs}` 
                                       t.innerHTML = `3 LIGA:<br/> ${outputT}`
                                    });
                              })
                              .catch(err=> console.log("error"))
                          }
                          else if(i == 28){
                              firstMatchDiv()   
                              fetch('./games.json')
                              .then(response =>{return response.json()})
                              .then(data =>{
                                  data.ekstraklasa29.forEach(function(el){
                                    outputE += `<br/>${el.teams} ${el.hrs}` 
                                       e.innerHTML = `EKSTRAKLASA:<br/> ${outputE}`
                                    });
                                    data.liga129.forEach(function(el){
                                    outputF += `<br/>${el.teams} ${el.hrs}` 
                                       f.innerHTML =`1 LIGA:<br/> ${outputF}`
                              });
                              })
                              .catch(err=> console.log("error"))
                          }
                          else if(i == 29){
                              firstMatchDiv()   
                              fetch('./games.json')
                              .then(response =>{return response.json()})
                              .then(data =>{
                                  data.ekstraklasa30.forEach(function(el){
                                    outputE += `<br/>${el.teams} ${el.hrs}` 
                                       e.innerHTML = `EKSTRAKLASA:<br/> ${outputE}`
                                    });
                                    data.liga130.forEach(function(el){
                                    outputF += `<br/>${el.teams} ${el.hrs}` 
                                       f.innerHTML =`1 LIGA:<br/> ${outputF}`
                                       
                                    });
                                    data.liga230.forEach(function(el){
                                    outputS += `<br/>${el.teams} ${el.hrs}` 
                                       s.innerHTML = `2 LIGA:<br/> ${outputS}`
                                       
                                    });
                                    outputT += `Brak meczów w tym dniu` 
                                       t.innerHTML = `3 LIGA:<br/> ${outputT}`
                              })
                              .catch(err=> console.log("error"))
                          }
                          else{
                              $(noGame).show()
                              n.innerHTML = "Brak meczów w tym dniu";
                              $(upBtn).hide();
                              $(downBtn).hide();
                          }
                             
                           let dateForMatch = document.getElementById("dataMatch")
                           dateForMatch.innerHTML = `${i+1} ${monthsName[month]} ${year}`
                           $('.schedule').fadeIn()
                           $('.live').hide()
                      });
                    
                      $(exit).click(function(){
                          $('.schedule').hide()
                          $('.live').show();
                      });
            }
        }
           daysCounter()
    
    /*let none = document.getElementsByClassName("daysContent")
    let daysEmpty = document.getElementsByClassName("daysInContent")
    
            let prevNext =()=>{    
                let resetMonth =()=>{
                    for(let i=0;i<monthsName.length;i++){
                    $(monthsName[i]).css({display:"none"})
                    }
            }
                
            let resetContent =()=>{
                    for(let i=0;i<none.length;i++){
                        $(none[i]).css({display:"none"})
                    }
            }
      
                $('.leftArrow').click(function(){
                    resetMonth()
                    resetContent()
                   if(month === 0){
                       month = 12
                       year = year-1
                   }
                   nameMonths.innerHTML = monthsName[month-1]+" "+year    
                   month--
                   daysInMonth = new Date(year,month+1,0).getDate()    
                   firstDay = new Date(year,month,1).getDay()
                   wholeDays = daysInMonth    
                   daysCounter()
                });

                $('.rightArrow').click(function(){
                  if(month === 11){
                      month = -1
                      year = year+1
                  } 
                  resetMonth()
                  resetContent()    
                  nameMonths.innerHTML = monthsName[month+1]+" "+year
                  month++
                  daysInMonth = new Date(year,month+1,0).getDate()    
                  firstDay = new Date(year,month,1).getDay()
                  wholeDays = daysInMonth    
                  daysCounter()
                });
            }
        prevNext()*/
}
calender()


let urlPlayer =()=>{
    $('.photoPlayer').prop("title","źródło 90minut.pl")
}
urlPlayer()

let articleClickNews =()=>{
    let outputText = document.getElementById("newsFirst");
    let outputImg = ''

    $('.exitArticle').click(function(){
        $(articleClicked).hide();
        $(article0).show();
    });
 
    $(cracoviapogon).click(function(){
        outputImg = `<img src="newsphoto/cracoviapogon.jpg">`
        $(article0).hide();
        $(articleClicked).fadeToggle(2000);
        $('.articlePhotoNews').html(outputImg)
        
        let xhr = new XMLHttpRequest() 
        xhr.onload = function(){
        if(this.status == 200){
          let data = JSON.parse(this.responseText)
              outputText.innerHTML = `${data.cracovia}`
        }
    }
    xhr.open("GET","newses.json",true)
    xhr.send()
    });
    
    $(legiawisla).click(function(){
        outputImg = `<img src="newsphoto/legiawisla.jpg">`
        $(article0).hide();
        $(articleClicked).fadeToggle(2000);
        $('.articlePhotoNews').html(outputImg)
        
        let xhr = new XMLHttpRequest() 
        xhr.onload = function(){
        if(this.status == 200){
          let data = JSON.parse(this.responseText)
              outputText.innerHTML = `${data.legia}`
        }
    }
    xhr.open("GET","newses.json",true)
    xhr.send()
    });
    
    $(olimpiastal).click(function(){
        outputImg = `<img src="newsphoto/olimpiastal.jpg">`
        $(article0).hide();
        $(articleClicked).fadeToggle(2000);
        $('.articlePhotoNews').html(outputImg)
        
        let xhr = new XMLHttpRequest() 
        xhr.onload = function(){
        if(this.status == 200){
          let data = JSON.parse(this.responseText)
              outputText.innerHTML = `${data.olimpia}`
        }
    }
    xhr.open("GET","newses.json",true)
    xhr.send()
    });
}
articleClickNews()

let todayNewsClick =()=>{
   $('.exitArticle').click(function(){
        $(informations).show();
        $('.todayNews').hide();
    });    
   let outputTodayNews = document.getElementById("newsToday")
   let outputImgToday = ''
   
   $(news1).click(function(){
        outputImgToday = `<img src="newsdnia/korona.jpg">`
        $(informations).hide();
        $('.todayNews').fadeToggle(2000);
        $('.articlePhotoNews').html(outputImgToday)
        
        let xhr = new XMLHttpRequest() 
        xhr.onload = function(){
        if(this.status == 200){
          let data = JSON.parse(this.responseText)
              outputTodayNews.innerHTML = `${data.korona}`
        }
    }
    xhr.open("GET","newses.json",true)
    xhr.send()
    });
    $(news2).click(function(){
        outputImgToday = `<img src="newsdnia/lechzaglebie.jpg">`
        $(informations).hide();
        $('.todayNews').fadeToggle(2000);
        $('.articlePhotoNews').html(outputImgToday)
        
        let xhr = new XMLHttpRequest() 
        xhr.onload = function(){
        if(this.status == 200){
          let data = JSON.parse(this.responseText)
              outputTodayNews.innerHTML = `${data.zaglebie}`
        }
    }
    xhr.open("GET","newses.json",true)
    xhr.send()
    });
    $(news3).click(function(){
        outputImgToday = `<img src="newsdnia/radomiak.jpg">`
        $(informations).hide();
        $('.todayNews').fadeToggle(2000);
        $('.articlePhotoNews').html(outputImgToday)
        
        let xhr = new XMLHttpRequest() 
        xhr.onload = function(){
        if(this.status == 200){
            let data = JSON.parse(this.responseText) 
              outputTodayNews.innerHTML = `${data.radomiak}`
        }
    }
    xhr.open("GET","newses.json",true)
    xhr.send()
    });
    $(news4).click(function(){
        outputImgToday = `<img src="newsdnia/stalmielec.jpg">`
        $(informations).hide();
        $('.todayNews').fadeToggle(2000);
        $('.articlePhotoNews').html(outputImgToday)
        
        let xhr = new XMLHttpRequest() 
        xhr.onload = function(){
        if(this.status == 200){
          let data = JSON.parse(this.responseText)
              outputTodayNews.innerHTML = `${data.chrobry}`
        }
    }
    xhr.open("GET","newses.json",true)
    xhr.send()
    });
    $(news5).click(function(){
        outputImgToday = `<img src="newsdnia/2liga.jpg">`
        $(informations).hide();
        $('.todayNews').fadeToggle(2000);
        $('.articlePhotoNews').html(outputImgToday)
        
        let xhr = new XMLHttpRequest() 
        xhr.onload = function(){
        if(this.status == 200){
          let data = JSON.parse(this.responseText)
              outputTodayNews.innerHTML = `${data.podsumowanie}`
        }
    }
    xhr.open("GET","newses.json",true)
    xhr.send()
    });
    $(news6).click(function(){
        let outputImgToday = `<img src="newsdnia/poloniaruch.jpg">`
        $(informations).hide();
        $('.todayNews').fadeToggle(2000);
        $('.articlePhotoNews').html(outputImgToday)
        
        let xhr = new XMLHttpRequest() 
        xhr.onload = function(){
        if(this.status == 200){
          let data = JSON.parse(this.responseText)
              outputTodayNews.innerHTML = `${data.polonia}`
        }
    }
    xhr.open("GET","newses.json",true)
    xhr.send()
    });
}
todayNewsClick()
