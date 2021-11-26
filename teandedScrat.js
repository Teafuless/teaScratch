
class teandedScratch {
  
  getInfo() {
    return {
      
      id: 'teanded',
      color1: '#8DC286',
menuIconURI: 'https://ghcdn.rawgit.org/Teafuless/teaScratch/main/favicon.png',
 blockIconURI: 'https://ghcdn.rawgit.org/Teafuless/teaScratch/main/favicon.png',
      docsURI: 'https://teafulessdl.gitbook.io/teanded-scratch/',
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
          opcode: 'onSomething',
          blockType: Scratch.BlockType.HAT,
          text: 'Если условие [CONDITION] будет верно',
          arguments: {
            CONDITION: {
              type: Scratch.ArgumentType.BOOLEAN
            }
          }
        },
        {
          opcode: 'RegExpS',
          blockType: Scratch.BlockType.REPORTER,
          text: 'RegExp [REGEXP], flags: [FLAGS]',
          arguments: {
            REGEXP: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '\[tea\]'
            },
            FLAGS: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'g' //
            }
          }
        },
         {
          opcode: 'test',
          blockType: Scratch.BlockType.COMMAND,
          text: 'ТЕСТ НОВОЙ ФУНКЦИИ',
          arguments: {
          
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
          opcode: 'shortIf',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Если [CONDITION], то [THEN], иначе [ELSE]',
          arguments: {
              CONDITION: {
                  type: Scratch.ArgumentType.BOOLEAN
              },
              THEN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'then'
            },
            ELSE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'else'
          }
          }
        },
        {
          opcode: 'ostatok',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Остаток от деления [NUM1] на [NUM2]',
          arguments: {
              NUM1: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '5'
              },
              NUM2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
            }
          }
        },
        {
          opcode: 'stepen',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Возвести [NUM1] в степень [NUM2]',
          arguments: {
              NUM1: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '2'
              },
              NUM2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2'
            }
          }
        },
                {
          opcode: 'getAllAfter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Получить текст после символа [SYMBOL] в тексте [TEXT], пропустив [IGNORE] символов',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '2'
              },
              SYMBOL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '2'
            },
            IGNORE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
            }
          }
        },
           {
          opcode: 'getAllBefore',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Получить текст до символа [SYMBOL] в тексте [TEXT], пропустив [IGNORE] символов',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '2'
              },
              SYMBOL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '2'
            },
            IGNORE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
            }
          }
        },
        {
          opcode: 'splitText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Разделить текст [TEXT], с разделителем [SEPARATOR]',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'крутой/чай'
              },
              SEPARATOR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/'
            }
          }
          
        },
         {
          opcode: 'getPart',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Получить часть текста [TEXT] с номером [NUM]',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'крутой,чай'
              },
              NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
            }
          }
          
        },
           {
          opcode: 'splitTextLimit',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Разделить текст [TEXT], с разделителем [SEPARATOR], с ограничением в [LIMIT] частей текста',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'крутой/чай'
              },
              SEPARATOR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '/'
            },
            LIMIT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '3'
            }
          }
        },
         {
          opcode: 'evalSS',
          blockType: Scratch.BlockType.COMMAND,
          text: 'eval [EVAL]',
          arguments: {
              EVAL: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'return 0'
              }
          }
        },
        {
          opcode: 'evalS',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get eval [EVAL]',
          arguments: {
              EVAL: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'return 0'
              }
          }
        },
        {
          opcode: 'evalSSS',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'get LOGIC eval [EVAL]',
          arguments: {
              EVAL: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'return 0'
              }
          }
        }

      ],
      menus: {
        teaMenu: {
            items: ['teaful','tealess','teafuless']
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
shortIf({CONDITION,THEN,ELSE}){
  return (CONDITION) ? THEN : ELSE
}
ostatok({NUM1,NUM2}){
  return NUM1 % NUM2
}
stepen({NUM1,NUM2}){
  return NUM1 ** NUM2
}
  getAllAfter({SYMBOL,TEXT,IGNORE}){
    return String(TEXT).substr(String(TEXT).indexOf(String(SYMBOL))+1+IGNORE)
  }
    getAllBefore({SYMBOL,TEXT,IGNORE}){
    return String(TEXT).substr(0,String(TEXT).indexOf(String(SYMBOL))+IGNORE)
  }
  RegExpS({REGEXP,FLAGS}){
    return RegExp(String(REGEXP),FLAGS)
}
  splitText({SEPARATOR,TEXT}) {
   return String(TEXT).split(String(SEPARATOR))
  }
  getPart({NUM,TEXT}) {
   return String(TEXT)[NUM]
  }
  splitTextLimit({SEPARATOR,TEXT,LIMIT}) {
   return String(TEXT.split(String(SEPARATOR),LIMIT))
  }
  evalS({EVAL}){
    return eval(EVAL)
  }
  evalSS({EVAL}){
   eval(EVAL)
  }
  evalSSS({EVAL}){
   return eval(EVAL)
  }
  onSomething({CONDITION}) {
    this.update()
    if (CONDITION) {
      return true
  } else { 
    return false 
  }
    return false
  }
  test(){
    
        motion.goToXY({X: 50, Y:50}, {target});

  }
}
Scratch.extensions.register(new teandedScratch());
