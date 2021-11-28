
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
          opcode: 'newVar',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Создать переменную [NAME]',
          arguments: {
          NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Tea' //
            }
          }
        },
{
          opcode: 'getVar',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Получить значение переменной [NAME]',
          arguments: {
          NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Tea' //
            }
          }
        }, 
{
          opcode: 'getLogicVar',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Получить логическое значение переменной [NAME]',
          arguments: {
          NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Tea' //
            }
          }
        }, 
{
          opcode: 'setVar',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Задать переменной [NAME] значение [VALUE]',
          arguments: {
          NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Tea' //
            },
VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'cool' //
            }
          }
        },
{
          opcode: 'setLogicVar',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Задать переменной [NAME] логическое значение [VALUE]',
          arguments: {
          NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Tea' //
            },
VALUE: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: 'cool' //
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
        },
              {
          opcode: 'newObject',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Создать новый пустой массив с названием [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
         {
          opcode: 'pushObj',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Добавить значение [VALUE] в массив [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            VALUE: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
        {
          opcode: 'getObj',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Получить значение под номером [NUM] из массива [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            NUM: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 'cool'
              }
          }
        },
        
               {
          opcode: 'unshiftObj',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Добавить значение [VALUE] в начало массива [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            VALUE: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'h'
              }
       
          }
        },
               {
          opcode: 'editObj',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Изменить значение под номером [NUM] из массива [NAME] на [VALUE]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            NUM: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0'
              },
            VALUE: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
          {
          opcode: 'shiftObj',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Удалить первое значение массива [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
          {
          opcode: 'popObj',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Удалить значение из конца массива [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
        {
          opcode: 'objLength',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Получить длину массива [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
{
          opcode: 'indexOfObj',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Получить номер значения [VALUE] из массива [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            VALUE: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
        {
          opcode: 'newMap',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Создать новую карту ключей с названием [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
        {
          opcode: 'mapSet',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Установить ключу [KEY] карты [NAME] значение [VALUE]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            VALUE: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '0'
              },
            KEY: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
        {
          opcode: 'mapGet',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Получить значение ключа [KEY] из карты [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            KEY: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
        {
          opcode: 'mapHas',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Карта [NAME] содержит [KEY]?',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            KEY: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
        
        {
          opcode: 'mapDelete',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Удалить ключ [KEY] из карты [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            KEY: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
        {
          opcode: 'mapClear',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Очистить карту [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
        {
          opcode: 'mapSize',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Размер карты [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
        {
          opcode: 'mapKeys',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Получить список ключей карты [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
        {
          opcode: 'mapValues',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Получить список значений карты [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
         {
          opcode: 'divide',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Целое деление [NUM1] на [NUM2]',
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
          opcode: 'tostr',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Превратить [TEXT] в строку',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '5/2'
              }
          }
        },
         {
          opcode: 'tonumber',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Превратить строку [TEXT] в число',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '2'
              }
          }
        },
        {
          opcode: 'indexOfLetter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Получить номер символа [LETTER] в тексте [TEXT]',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'tea'
              },
            LETTER: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'e'
              }
          }
        },
        {
          opcode: 'between',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[NUM1] между [NUM2] и [NUM3]?',
          arguments: {
              NUM1: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '3'
              },
            NUM2: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '1'
              },
             NUM3: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '8'
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
    if (CONDITION===true) {
      return true
  } else { 
    return false 
  }
    return false
  }
newVar({NAME}){
globalThis[NAME] = 0
}
getVar({NAME}){
return globalThis[NAME]
}
setVar({NAME,VALUE}){
globalThis[NAME] = VALUE
}
getLogicVar({NAME}){
return globalThis[NAME]
}
setLogicVar({NAME,VALUE}){
globalThis[NAME] = VALUE
}
newObject({NAME}) {
  globalThis[NAME] = []
}
  pushObj({NAME,VALUE}) {
    globalThis[NAME].push(VALUE)
  }
  
  unshiftObj({NAME,VALUE}) {
    globalThis[NAME].unshift(VALUE)
  }
  getObj({NAME,NUM}) {
    return globalThis[NAME][NUM]
  }
  editObj({NAME,NUM,VALUE}){
    globalThis[NAME][NUM] = [VALUE]
  }
  shiftObj({NAME}) {
    globalThis[NAME].shift
  }
  popObj({NAME}){
    globalThis[NAME].pop
  }
  objLength({NAME}){
    return globalThis[NAME].length
  }
  indexOfObj({NAME,VALUE}){
    return globalThis[NAME].indexOf([VALUE])
  }
  newMap({NAME}){
    globalThis[NAME] = new Map()
  }
  mapSet({NAME,KEY,VALUE}){
  globalThis[NAME].set(KEY,VALUE)
  }
  mapGet({NAME,KEY}){
 return globalThis[NAME].get(KEY)
  }
  mapHas({NAME,KEY}){
  return globalThis[NAME].has(KEY)
 }
  mapDelete({NAME,KEY}){
  globalThis[NAME].delete(KEY)
  }
  mapClear({NAME}){
    globalThis[NAME].clear()
  }
  mapSize({NAME}){
  return globalThis[NAME].size
  }
  mapKeys({NAME}){
     return globalThis[NAME].keys
  }
  mapValues({NAME}){
    return globalThis[NAME].values
  }
  divide({NUM1,NUM2}){
  return BigInt(NUM1)/BigInt(NUM2)
  }
  tostr({TEXT}){
   return String(TEXT)
  }
    tonum({TEXT}){
   return Number(TEXT)
  }
  indexOfLetter({LETTER,TEXT}){
  return TEXT.indexOf(LETTER)
  }
  between({NUM1,NUM2,NUM3}){
    if(NUM2<NUM3) {
 return NUM2<NUM1&&NUM1<NUM3
    } else { 
      return NUM2>NUM1&&NUM1>NUM3
    }
  }
}
Scratch.extensions.register(new teandedScratch());
