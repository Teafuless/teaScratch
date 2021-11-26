class teandedScratch {
  getInfo() {
    return {
      
      id: 'teanded',
      color1: '#8DC286',
menuIconURI: 'https://ghcdn.rawgit.org/Teafuless/teaScratch/main/favicon.png',
 blockIconURI: 'https://ghcdn.rawgit.org/Teafuless/teaScratch/main/favicon.png',
      name: 'Teanded Scratch',
      blocks: [
   
        {
          opcode: 'turnInToTea',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Превратить в чай [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Teaful'
            }
          }
        },
         {
          opcode: 'randomText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Выдать случайное слово [WORD] или [WORD2]',
          arguments: {
            WORD: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Teaful'
            },
                        WORD2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Teafuless'
            }
          }
        },
         {
          opcode: 'replaceIn',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Заменить [WORD] в [TEXT] на [NEW]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Teaful'
            },
            WORD: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'ful'
            },
            NEW: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0'
            }
          }
        },
        {
          opcode: 'replaceAll',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Заменить все [WORD] в [TEXT] на [NEW]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Teaful'
            },
            WORD: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'ful'
            },
            NEW: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0'
            }
          }
        },
        {
          opcode: 'replaceTimes',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Заменить [WORD] в [TEXT] на [NEW], [HM] раз',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Teaful'
            },
            WORD: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'ful'
            },
            NEW: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0'
            },
            HM: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
          }
        },
        {
          opcode: 'getPosDirection',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Получить направление позиции X: [X], Y: [Y] с симуляцией позиции X: [XX], Y: [YY]',
          arguments: {
            X: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            Y: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            XX: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '50'
            },
            YY: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '50'
            }
          }
        },
        {
          opcode: 'returnValue',
          blockType: Scratch.BlockType.REPORTER,
          text: 'вернуть значение [TEAS]',
          arguments: {
              TEAS: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'teaMenu'
              }
          }
        },
               {
          opcode: 'curVersion',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Текущая версия: [CURVER]',
          arguments: {
              CURVER: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'curVersion'
              }
          }
               },
                 {
          opcode: 'latestVersion',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Последняя версия: [LATVER]',
          arguments: {
              LATVER: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'latVersion'
              }
          }
        },
         {
          opcode: 'evalS',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Выполнить JavaScript: [EVAL]',
          arguments: {
              EVAL: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'return \'test\''
              }
          }
        }
        

      ],
      menus: {
        teaMenu: {
            items: ['teaful','tealess','teafuless']
        },
        curVersion: {
          items: ['v0.2.2']
      },
        latVersion: {
          items: [fetch('https://gitcdn.link/cdn/Teafuless/teaScratch/main/version.txt')
          .then(r => r.text())
          .catch(() => '')]
      }
    }
    };
  }
  turnInToTea({TEXT}) {
    return TEXT+" - чай"
  }
  getPosDirection({X,Y,XX,YY}){
      let xr = XX - X
      let yr = YY - Y
      let res = (!Y>YY) ? 1 : 0
      let ress = res * 180
      let res2 = Math.atan(xr/yr)
      return res2 + ress
  }
  replaceIn({TEXT,WORD,NEW}) {
   return TEXT.replace(WORD,NEW)
  }
  replaceAll({TEXT,WORD,NEW}) {
    let res;
var res1 = new RegExp(WORD, 'g');
res = TEXT.replace(res1, NEW);
    return res 
  }
  replaceTimes({TEXT,WORD,NEW,HM}) {
    let res = TEXT.replace(WORD,NEW)
    for (let i = 0;i!=HM-1;i++) {
   res = res.replace(WORD,NEW)
    }
    return res
  }
  randomText({WORD,WORD2}) {
    function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    
    return (random(1,2)==1) ? WORD : WORD2
  }
  returnValue({TEAS}) {
return TEAS
  }
  curVersion({CURVER}) { 
    return CURVER
  }
latestVersion({LATVER}) {
      return LATVER
}
evalS({EVAL}) {
  eval(EVAL)
}
}
Scratch.extensions.register(new teandedScratch());
