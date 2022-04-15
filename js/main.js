// CREATING BOARD
let board = document.querySelector('.chess__box');
let cheesboard = [];

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    let boardObj = {
      x: j,
      y: i
    }
    cheesboard.push(boardObj)
  }
}



cheesboard.forEach((item, i) => {
  let chees = document.createElement('div');
  chees.id = i;
  chees.classList.add('chees', `Y=${item.y}`, `X=${item.x}`);
  let nat;
  nat = item.x + item.y;
  if (nat % 2 != 0) {
    chees.classList.add('color_black')
  } else {
    chees.classList.add('color_white')
  }
  board.appendChild(chees);
  console.log(chees.id);
})

let chessX = document.querySelector('.chess__x');
let chessY = document.querySelector('.chess__y');






// CHARACTER MOVES 

let chessDiv = document.querySelectorAll('.chees');
let buttons = document.querySelectorAll('.btn');


//  Turan

let tower = document.querySelector('.tower'); 
tower.addEventListener('click',() => {
  chessDiv.forEach((item) => {
    cheesboard.forEach((elem, i) => {
      item.addEventListener('mouseover', () => {
        if (item.id == i) {
          chessDiv.forEach((el, id) => {
            if (el.className.includes(`Y=${elem.y}`)) {
              el.classList.add('green')
            }
            if (el.className.includes(`X=${elem.x}`)) {
              el.classList.add('green')
            }
          })

        }
      })
      item.addEventListener("mouseout", () => {
        if (item.id == i) {
          chessDiv.forEach((el, id) => {
            el.classList.remove('green')
          })

        }
      })
    })
  })
})




// King

let king = document.querySelector('.king')
king.addEventListener('click', () => {
  test = 'king'
  if (test == 'king') {
    chessDiv.forEach((item) => {
      cheesboard.forEach((elem, i) => {
        item.addEventListener('mouseover', () => {
          if (item.id == i) {
            chessDiv.forEach((el, id) => {
              if (el.className.includes(`Y=${elem.y + 1}`) && el.className.includes(`X=${elem.x + 1}`)) {
                el.classList.add('green')
              }
              if (el.className.includes(`Y=${elem.y }`) && el.className.includes(`X=${elem.x + 1}`)) {
                el.classList.add('green')
              }
              if (el.className.includes(`Y=${elem.y - 1}`) && el.className.includes(`X=${elem.x + 1}`)) {
                el.classList.add('green')
              }
              if (el.className.includes(`Y=${elem.y + 1}`) && el.className.includes(`X=${elem.x }`)) {
                el.classList.add('green')
              }
              if (el.className.includes(`Y=${elem.y-1}`) && el.className.includes(`X=${elem.x }`)) {
                el.classList.add('green')
              }
              if (el.className.includes(`Y=${elem.y }`) && el.className.includes(`X=${elem.x - 1}`)) {
                el.classList.add('green')
              }
              if (el.className.includes(`Y=${elem.y - 1}`) && el.className.includes(`X=${elem.x - 1}`)) {
                el.classList.add('green')
              }
              if (el.className.includes(`Y=${elem.y + 1}`) && el.className.includes(`X=${elem.x - 1}`)) {
                el.classList.add('green')
              }
            })

          }
        })
        item.addEventListener("mouseout", () => {
          if (item.id == i) {
            chessDiv.forEach((el, id) => {
              el.classList.remove('green')
            })

          }
        })
      })

    })

  } else {
    console.log("topilmadi");
  }
})



let knight = document.querySelector(".knight")
knight.addEventListener('click',()=>{
  chessDiv.forEach((item) => {
    cheesboard.forEach((elem, i) => {
            item.addEventListener('mouseover', () => {
                if (item.id == i) {
                  chessDiv.forEach((el, id) => {
                        if (el.className.includes(`Y=${elem.y + 1}`) && el.className.includes(`X=${elem.x + 2}`)) {
                            el.classList.add('green')
                        }
                        if (el.className.includes(`Y=${elem.y + 2}`) && el.className.includes(`X=${elem.x + 1}`)) {
                            el.classList.add('green')
                        }
                        if (el.className.includes(`Y=${elem.y + 2}`) && el.className.includes(`X=${elem.x - 1}`)) {
                            el.classList.add('green')
                        }
                        if (el.className.includes(`Y=${elem.y + 1}`) && el.className.includes(`X=${elem.x - 2}`)) {
                            el.classList.add('green')
                        }
                        if (el.className.includes(`Y=${elem.y - 1}`) && el.className.includes(`X=${elem.x + 2}`)) {
                            el.classList.add('green')
                        }
                        if (el.className.includes(`Y=${elem.y - 2}`) && el.className.includes(`X=${elem.x + 1}`)) {
                            el.classList.add('green')
                        }
                        if (el.className.includes(`Y=${elem.y - 2}`) && el.className.includes(`X=${elem.x - 1}`)) {
                            el.classList.add('green')
                        }
                        if (el.className.includes(`Y=${elem.y - 1}`) && el.className.includes(`X=${elem.x - 2}`)) {
                            el.classList.add('green')
                        }
                        if (el.className.includes(`Y=${elem.y}`)) {
                            el.classList.remove('green')
                        }
                        if (el.className.includes(`X=${elem.x}`)) {
                            el.classList.remove('green')
                        }
                       
    
                    })
    
                }
            })
            item.addEventListener("mouseout", () => {
                if (item.id == i) {
                  chessDiv.forEach((el, id) => {
                       el.classList.remove("green")
                    })
    
                }
            })
        })
    })
})




let bishop = document.querySelector('.bishop')
bishop.addEventListener('click',()=>{
    chessDiv.forEach((item) => {
      cheesboard.forEach((elem, i) => {
            item.addEventListener('mouseover', () => {
                if (item.id == i) {
                  chessDiv.forEach((el, id) => {
                        for (let i = 0; i < 8; i++) {
                            if (el.className.includes(`Y=${elem.y + i}`) && el.className.includes(`X=${elem.x + i}`)) {
                                el.classList.add('green')
                            }
                            if (el.className.includes(`Y=${elem.y - i}`) && el.className.includes(`X=${elem.x + i}`)) {
                                el.classList.add('green')
                            }
                            if (el.className.includes(`Y=${elem.y - i}`) && el.className.includes(`X=${elem.x - i}`)) {
                                el.classList.add('green')
                            }
                            if (el.className.includes(`Y=${elem.y + i}`) && el.className.includes(`X=${elem.x - i}`)) {
                                el.classList.add('green')
                            }
                        }
                    })
    
                }
            })
            item.addEventListener("mouseout", () => {
                if (item.id == i) {
                  chessDiv.forEach((el, id) => {
                        el.classList.remove('green')
                    })
    
                }
            })
        })
    })
})




 let queen  = document.querySelector(".queen")
 queen.addEventListener('click' , ()=>{
  chessDiv.forEach((item) => {
    cheesboard.forEach((elem, i) => {
             item.addEventListener('mouseover', () => {
                 if (item.id == i) {
                  chessDiv.forEach((el, id) => {
                         if (el.className.includes(`Y=${elem.y}`)) {
                             el.classList.add('green')
                         }
                         if (el.className.includes(`X=${elem.x}`)) {
                             el.classList.add('green')
                         }
                         for (let i = 0; i < 8; i++) {
                             if (el.className.includes(`Y=${elem.y + i}`) && el.className.includes(`X=${elem.x + i}`)) {
                                 el.classList.add('green')
                             }
                             if (el.className.includes(`Y=${elem.y - i}`) && el.className.includes(`X=${elem.x + i}`)) {
                                 el.classList.add('green')
                             }
                             if (el.className.includes(`Y=${elem.y - i}`) && el.className.includes(`X=${elem.x - i}`)) {
                                 el.classList.add('green')
                             }
                             if (el.className.includes(`Y=${elem.y + i}`) && el.className.includes(`X=${elem.x - i}`)) {
                                 el.classList.add('green')
                             }
                             if (el.className.includes(`Y=${elem.y + i}`) && el.className.includes(`X=${elem.x}`)) {
                              el.classList.add('green')
                          }
                          if (el.className.includes(`Y=${elem.y - i}`) && el.className.includes(`X=${elem.x}`)) {
                            el.classList.add('green')
                        }
                         }
                     })
     
                 }
             })
             item.addEventListener("mouseout", () => {
                 if (item.id == i) {
                  chessDiv.forEach((el, id) => {
                         el.classList.remove('green')
                     })
     
                 }
             })
         })
     })
 })


















chessDiv.forEach(item => {
  item.addEventListener('mouseover', () => {
    console.log(item.classList[1], item.classList[2])
    chessY.textContent = item.classList[1];
    chessX.textContent = item.classList[2];
  })
})
chessDiv.forEach(item => {
  item.addEventListener('mouseleave', () => {
    document.querySelector('.chess__x').textContent = `X=0`;
    document.querySelector('.chess__y').textContent = `Y=0`;
  })
})