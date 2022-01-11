class teandedScratch {
  getInfo() {
    return {
      id: 'teanded',
      color1: '#8DC286',
      color2: '#63925d',
      color3: '#63925d',
      color4: '#8DC286',
menuIconURI: 'https://raw.githack.com/Teafuless/teaScratch/main/favico.png',
 blockIconURI: 'https://raw.githack.com/Teafuless/teaScratch/main/icon.png',
      docsURI: 'https://teafulessdl.gitbook.io/teanded-scratch/',
      name: 'Teanded Scratch',
      blocks: [
   
        {
          opcode: 'turnInToTea',
          blockType: Scratch.BlockType.REPORTER,
          text: 'превратить в чай [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Teaful'
            }
          }
        },//
         {
          opcode: 'onSomething',
          blockType: Scratch.BlockType.HAT,
          text: 'если условие [CONDITION] будет верно',
          arguments: {
            CONDITION: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        
       
        {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'сообщения',
        },
         {
          opcode: 'sendMsgVar',
          blockType: Scratch.BlockType.COMMAND,
          text: 'отправить сообщение [MSG] спрайтам со значением [VALUE] переменной [VAR]',
          arguments: {
          MSG: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hi' //
            },
             VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello' //
            },
             VAR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'answer' //
            }
          }
        },
        {
          opcode: 'sendMsg',
          blockType: Scratch.BlockType.COMMAND,
          text: 'отправить сообщение [MSG]',
          arguments: {
          MSG: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hi' //
            }
          }
        },
        {
          opcode: 'recMsg',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'получено сообщение [MSG]?',
          arguments: {
          MSG: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hi' //
            }
          }
        },
        {
          opcode: 'recMsgVar',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'получено сообщение [MSG] со значением [VALUE] переменной [VAR]?',
          arguments: {
          MSG: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hi' //
            },
             VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello' //
            },
             VAR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'answer' //
            }
          }
        },
        
        {
          opcode: 'onMsg',
          blockType: Scratch.BlockType.HAT,
          text: 'когда я получу сообщение [MSG]',
          arguments: {
          MSG: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hi' //
            }
          }
        },
        {
          opcode: 'onMsgVar',
          blockType: Scratch.BlockType.HAT,
          text: 'когда я получу сообщение [MSG] со значением [VALUE] переменной [VAR]',
          arguments: {
          MSG: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hi' //
            },
             VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'hello' //
            },
             VAR: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'answer' //
            }
          }
        },
          {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Переменные',
        },
         {
          opcode: 'newVar',
          blockType: Scratch.BlockType.COMMAND,
          text: 'создать переменную [NAME]',
          arguments: {
          NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Tea' //
            }
          }
        },
        {
          opcode: 'varExists',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'переменная [NAME] существует?',
          arguments: {
          NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'LITERALLY_NOT_EXISTING_VAR' //
            }
          }
        }, 
{
          opcode: 'getVar',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить значение переменной [NAME]',
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
          text: 'получить логическое значение переменной [NAME]',
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
          text: 'задать переменной [NAME] значение [VALUE]',
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
          opcode: 'changeVar',
          blockType: Scratch.BlockType.COMMAND,
          text: 'изменить переменной [NAME] значение на [VALUE]',
          arguments: {
          NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Tea' //
            },
VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5' //
            }
          }
        },
{
          opcode: 'setLogicVar',
          blockType: Scratch.BlockType.COMMAND,
          text: 'задать переменной [NAME] логическое значение [VALUE]',
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
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Текстовые манипуляции',
        },
                                {
          opcode: 'codeBase',
          blockType: Scratch.BlockType.REPORTER,
          text: '[PARAM] Base64 [TEXT]',
          arguments: {
             PARAM: {
                  type: Scratch.ArgumentType.STRING,
              menu: 'baseParam'
              },
            TEXT: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: 'tea'
              },
          }
        },
         {
          opcode: 'randomText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'выдать случайное слово [WORD] или [WORD2]',
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
          opcode: 'toUpCase',
          blockType: Scratch.BlockType.REPORTER,
          text: 'преобразовать в верхний регистр [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'TeAFul'
            }
          }
        },
             {
          opcode: 'toLowCase',
          blockType: Scratch.BlockType.REPORTER,
          text: 'преобразовать в нижний регистр [TEXT]',
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'tEafUL'
            }
          }
        },
         {
          opcode: 'replaceIn',
          blockType: Scratch.BlockType.REPORTER,
          text: 'заменить [WORD] в [TEXT] на [NEW]',
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
          text: 'заменить все [WORD] в [TEXT] на [NEW]',
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
          text: 'заменить [WORD] в [TEXT] на [NEW], [HM] раз',
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
          text: 'получить направление позиции x: [XPOS], y: [YPOS] с симуляцией позиции x: [MYXPOS], y: [MYYPOS]',
          arguments: {
            XPOS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            YPOS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            MYXPOS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '50'
            },
            MYYPOS: {
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
          text: 'если [CONDITION], то [THEN], иначе [ELSE]',
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
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Математические действия',
        },
                {
          opcode: 'roundWithSteps',
          blockType: Scratch.BlockType.REPORTER,
          text: 'округлить [NUM] с шагом в [STEPS]',
          arguments: {
              NUM: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '19'
              },
              STEPS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
            }
          }
        },
                        {
          opcode: 'roundWithOffset',
          blockType: Scratch.BlockType.REPORTER,
          text: 'округлить [NUM] с шагом в [STEPS] и с расстоянием [OFFSET]',
          arguments: {
              NUM: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '19'
              },
              STEPS: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
            },
             OFFSET: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
            },
          }
        },
        {
          opcode: 'ostatok',
          blockType: Scratch.BlockType.REPORTER,
          text: 'остаток от деления [NUM1] на [NUM2]',
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
          text: 'возвести [NUM1] в степень [NUM2]',
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
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Части текста',
        },
                {
          opcode: 'getAllAfter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить текст после символа [SYMBOL] в тексте [TEXT], пропустив [IGNORE] символов',
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
          text: 'получить текст до символа [SYMBOL] в тексте [TEXT], пропустив [IGNORE] символов',
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
          text: 'разделить текст [TEXT], с разделителем [SEPARATOR]',
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
          text: 'получить часть текста [TEXT] с номером [NUM]',
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
          text: 'разделить текст [TEXT], с разделителем [SEPARATOR], с ограничением в [LIMIT] частей текста',
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
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'JavaScript',
        },
         {
          opcode: 'evalSS',
          blockType: Scratch.BlockType.COMMAND,
          text: 'evaluate [EVAL]',
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
          text: 'return evaluated [EVAL]',
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
          text: 'return logic evaluated value [EVAL]',
          arguments: {
              EVAL: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'return 0'
              }
          }
        },
        {
          opcode: 'joinsum',
          blockType: Scratch.BlockType.REPORTER,
          text: 'сложить строки [STRING1] и [STRING2]',
          arguments: {
              STRING1: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'ча'
              },
            STRING2: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'й'
              }
          }
        },
         {
          opcode: 'sumvar',
          blockType: Scratch.BlockType.REPORTER,
          text: 'добавить [VALUE] к переменной [VAR]',
          arguments: {
              VALUE: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'tea'
              },
            VAR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'teaful'
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
          blockType: Scratch.BlockType.BUTTON,
          text: 'Массивы',
        },
              {
          opcode: 'newObject',
          blockType: Scratch.BlockType.COMMAND,
          text: 'создать новый пустой массив с названием [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
         {
          opcode: 'joinArr',
          blockType: Scratch.BlockType.REPORTER,
          text: 'объединить элементы [ARR] с помощью [SEP]',
          arguments: {
              ARR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            SEP: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: ' - '
              }
          }
        },
                                 {
          opcode: 'forEachElemMC',
          blockType: Scratch.BlockType.COMMAND,
          text: 'для каждого из [ARR], [FUNC] записать в [ARR2]',
          arguments: {
              ARR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
                          ARR2: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool2'
              },/*
            ELEM: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'elem'
              },*/
            FUNC: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'function\(i\)\{return encodeURI\(i\)\}'
              },
          }
        },
                 {
          opcode: 'forEachElemM',
          blockType: Scratch.BlockType.REPORTER,
          text: 'для каждого из [ARR], [FUNC] записать в [ARR2]',
          arguments: {
              ARR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
                          ARR2: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool2'
              },/*
            ELEM: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'elem'
              },*/
            FUNC: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'function\(i\)\{return encodeURI\(i\)\}'
              },
          }
        },
                 {
          opcode: 'forEachElemC',
          blockType: Scratch.BlockType.COMMAND,
          text: 'для каждого из [ARR], [FUNC]',
          arguments: {
              ARR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            ELEM: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'elem'
              },
            FUNC: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'tea+=elem'
              }
          }
        },

         {
          opcode: 'forEachElem',
          blockType: Scratch.BlockType.REPORTER,
          text: 'для каждого [ELEM] из [ARR], [FUNC]',
          arguments: {
              ARR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            ELEM: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'elem'
              },
            FUNC: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'tea+=elem'
              }
          }
        },
         {
          opcode: 'filterArr',
          blockType: Scratch.BlockType.REPORTER,
          text: 'совпадающие с [CON], [ELEM] из [ARR]',
          arguments: {
              ARR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            ELEM: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'elem'
              },
            CON: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'elem==1'
              }
          }
        },
        {
          opcode: 'replaceArr',
          blockType: Scratch.BlockType.REPORTER,
          text: 'заменить [TEXT] массивом [ARR]',
          arguments: {
              ARR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'array'
              },
            TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'tea жил tomorrow'
              }
          }
        },
      
                {
          opcode: 'fillArrFrom',
          blockType: Scratch.BlockType.REPORTER,
          text: 'заполнить [ARR] с [VAL], от [POS1] до [POS2]',
          arguments: {
              ARR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            VAL: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '0'
              },
            POS1: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 0
              },
             POS2: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 2
              },
          }
        },
                {
          opcode: 'fillArr',
          blockType: Scratch.BlockType.REPORTER,
          text: 'заполнить [ARR] с [VAL]',
          arguments: {
              ARR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            VAL: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '0'
              }
          }
        },
                {
          opcode: 'someElem',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'любой [ELEM] из [ARR] совпадает с [CON]?',
          arguments: {
              ARR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            CON: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'elem!=1'
              },
            ELEM: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'elem'
              },
          }
        },
        {
          opcode: 'everyElem',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'все [ELEM] из [ARR] совпадают с [CON]?',
          arguments: {
              ELEM: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'elem'
              },
            CON: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'elem>=5'
              },
            ARR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
          }
        },
        {
          opcode: 'copyTo',
          blockType: Scratch.BlockType.COMMAND,
          text: 'скопировать [ARR1] в [ARR2]',
          arguments: {
              ARR1: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            ARR2: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool2'
              }
          }
        },
         {
          opcode: 'copyToR',
          blockType: Scratch.BlockType.REPORTER,
          text: 'скопировать [ARR1] в [ARR2]',
          arguments: {
              ARR1: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              },
            ARR2: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool2'
              }
          }
        },
        {
          opcode: 'reverseArr',
          blockType: Scratch.BlockType.REPORTER,
          text: 'перевернуть массив [ARR]',
          arguments: {
              ARR: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
         {
          opcode: 'pushObj',
          blockType: Scratch.BlockType.COMMAND,
          text: 'добавить значение [VALUE] в массив [NAME]',
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
          text: 'получить значение под номером [NUM] из массива [NAME]',
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
          text: 'добавить значение [VALUE] в начало массива [NAME]',
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
          text: 'изменить значение под номером [NUM] из массива [NAME] на [VALUE]',
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
          text: 'удалить первое значение массива [NAME]',
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
          text: 'удалить значение из конца массива [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool'
              }
          }
        },
        {
          opcode: 'addTextMas',
          blockType: Scratch.BlockType.COMMAND,
          text: 'разделить текст [TEXT] с разделителем [SYM] и добавить в массив [MAS]',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'tea\;is\;best'
              },
                 SYM: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: ';'
              },
                MAS: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'text'
              },
          }
        },
        {
          opcode: 'objLength',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить длину массива [NAME]',
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
          text: 'получить номер значения [VALUE] из массива [NAME]',
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
          opcode: 'lastIndexOfObj',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить последний номер значения [VALUE] из массива [NAME]',
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
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Карты ключей',
        },
        {
          opcode: 'newMap',
          blockType: Scratch.BlockType.COMMAND,
          text: 'создать новую карту ключей с названием [NAME]',
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
          text: 'установить ключу [KEY] карты [NAME] значение [VALUE]',
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
          text: 'получить значение ключа [KEY] из карты [NAME]',
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
          text: 'карта [NAME] содержит [KEY]?',
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
          text: 'удалить ключ [KEY] из карты [NAME]',
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
          text: 'очистить карту [NAME]',
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
          text: 'размер карты [NAME]',
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
          text: 'получить список ключей карты [NAME]',
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
          text: 'получить список значений карты [NAME]',
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
          text: 'целое деление [NUM1] на [NUM2]',
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
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Превратить текст \-',
        },
         {
          opcode: 'tostr',
          blockType: Scratch.BlockType.REPORTER,
          text: 'превратить [TEXT] в строку',
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
          text: 'превратить строку [TEXT] в число',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '2'
              }
          }
        },
           {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: '\-',
        },
        {
          opcode: 'indexOfLetter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить номер символа [LETTER] в тексте [TEXT]',
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
          opcode: 'lastIndexOfLetter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить последний номер символа [LETTER] в тексте [TEXT]',
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
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Логические блоки',
        },
        {
          opcode: 'isNaNNum',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'isNaN [NUM]?',
          arguments: {
              NUM: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: NaN
              }
          }
        },
        {
          opcode: 'isFiniteNum',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'isFinite [NUM]?',
          arguments: {
              NUM: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: Infinity
              }
          }
        },
                {
          opcode: 'trueFalse',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[TRUEFALSE]',
          arguments: {
              TRUEFALSE: {
                  type: Scratch.ArgumentType.STRING,
                 menu: 'trueFalse'
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
        },
                       {
          opcode: 'moreOrEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[NUM1] \>\= [NUM2]',
          arguments: {
              NUM1: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '8'
              },
            NUM2: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '5'
              }
          }
        },
                {
          opcode: 'smallerOrEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[NUM1] \<\= [NUM2]',
          arguments: {
              NUM1: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '2'
              },
            NUM2: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '5'
              }
          }
        },
                {
          opcode: 'strictEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[STRING] строго равно [STRING2]',
          arguments: {
              STRING: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '8'
              },
            STRING2: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '5'
              }
          }
        },
        {
          opcode: 'strictNotEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[STRING] строго не равно [STRING2]',
          arguments: {
              STRING: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '8'
              },
            STRING2: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: '5'
              }
          }
        },
        {
          opcode: 'strictLogicNot',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[STRING] строго не равно истине',
          arguments: {
              STRING: {
                  type: Scratch.ArgumentType.BOOLEAN
              }
          }
        },
             {
          opcode: 'strictLogic',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[STRING] строго равно истине',
          arguments: {
              STRING: {
                  type: Scratch.ArgumentType.BOOLEAN
              }
          }
        },
           {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Проценты',
        },
        {
          opcode: 'getProcent',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить [PROCENT]% от числа [NUMBER1]',
          arguments: {
              NUMBER1: {
                  type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
            PROCENT: {
                  type: Scratch.ArgumentType.NUMBER,
                defaultValue: '58'
              }
          }
        },
         {
          opcode: 'getProcentFrom',
          blockType: Scratch.BlockType.REPORTER,
          text: 'сколько процентов число [NUMBER1] составляет от [NUMBER2]',
          arguments: {
              NUMBER1: {
                  type: Scratch.ArgumentType.NUMBER,
                defaultValue: '50'
              },
            NUMBER2: {
                  type: Scratch.ArgumentType.NUMBER,
                defaultValue: '25'
              }
          }
        },
           {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Консоль\/Терминал',
        },
         {
          opcode: 'catchError',
          blockType: Scratch.BlockType.REPORTER,
          text: 'попробовать выполнить [CODE], записать ошибку в переменную [VARS]',
          arguments: {
              CODE: {
                  type: Scratch.ArgumentType.STRING
              },
            VARS: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'varsMenu'
              }
          }
        },
         {
          opcode: 'catchErr',
          blockType: Scratch.BlockType.COMMAND,
          text: 'попробовать выполнить [CODE], записать ошибку в переменную [VARS]',
          arguments: {
              CODE: {
                  type: Scratch.ArgumentType.STRING
              },
            VARS: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'varsMenu'
              }
          }
        },
         {
          opcode: 'consoleError',
          blockType: Scratch.BlockType.COMMAND,
          text: 'console.error([CODE])',
          arguments: {
              CODE: {
                  type: Scratch.ArgumentType.STRING
              }
          }
        },
         {
          opcode: 'consoleLog',
          blockType: Scratch.BlockType.COMMAND,
          text: 'console.log([TEXT])',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING
              }
          }
        },
              {
          opcode: 'alertT',
          blockType: Scratch.BlockType.COMMAND,
          text: 'alert([TEXT])',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING
              }
          }
        },
         {
          opcode: 'promptT',
          blockType: Scratch.BlockType.REPORTER,
          text: 'prompt([TEXT])',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING
              }
          }
        },
          {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Текст',
        },
        
          {
          opcode: 'text',
          blockType: Scratch.BlockType.REPORTER,
          text: '[TEXT]',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'just a text'
              }
          }
        },
         {
          opcode: 'newLine',
          blockType: Scratch.BlockType.REPORTER,
          text: 'новая строка [TIMES] раз',
          arguments: {
              TIMES: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: 3
              },
          }
        },
                 {
          opcode: 'reverseWords',
          blockType: Scratch.BlockType.REPORTER,
          text: 'перевернуть текст [TEXT]',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'cool tea is always cool'
              },
          }
        },
        {
          opcode: 'mixWordsTimes',
          blockType: Scratch.BlockType.REPORTER,
          text: 'перемешать слова в [TEXT], [TIMES] раз, [REPEAT]',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
              defaultValue: 'а б в г д е ё ж з и й к л м н о п р с т у ф, а дальше я забыл'
              },
            REPEAT: {
                  type: Scratch.ArgumentType.BOOLEAN
              },
            TIMES: {
                  type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
              },
          }
        },
                {
          opcode: 'mixLettersTimes',
          blockType: Scratch.BlockType.REPORTER,
          text: 'перемешать символы в [TEXT], [TIMES] раз, [REPEAT]',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
              defaultValue: 'абвгдеёжзийклмнопрстуф'
              },
            REPEAT: {
                  type: Scratch.ArgumentType.BOOLEAN
              },
              TIMES: {
                  type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
              },
          }
        },
        {
          opcode: 'mixWords',
          blockType: Scratch.BlockType.REPORTER,
          text: 'перемешать слова в [TEXT], [REPEAT]',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
              defaultValue: 'а б в г д е ё ж з и й к л м н о п р с т у ф, а дальше я забыл'
              },
            REPEAT: {
                  type: Scratch.ArgumentType.BOOLEAN
              }
          }
        },
                {
          opcode: 'mixLetters',
          blockType: Scratch.BlockType.REPORTER,
          text: 'перемешать символы в [TEXT], [REPEAT]',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
              defaultValue: 'абвгдеёжзийклмнопрстуф'
              },
            REPEAT: {
                  type: Scratch.ArgumentType.BOOLEAN
              }
          }
        },
         {
          opcode: 'reverseText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'перевернуть [TEXT]',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
              defaultValue: 'привет'
              }
          }
        },
        {
          opcode: 'sliceText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'обрезать [TEXT] от [NUM1] до [NUM2]',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
              defaultValue: 'лол, круто'
              },
            NUM1: {
                  type: Scratch.ArgumentType.NUMBER,
              defaultValue: 0
              },
              NUM2: {
                  type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
              },
          }
        },
        {
          opcode: 'repeatText',
          blockType: Scratch.BlockType.REPORTER,
          text: 'повторить [TEXT], [TIMES] раз',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
              defaultValue: 'tEsT'
              },
            TIMES: {
                  type: Scratch.ArgumentType.NUMBER,
              defaultValue: '3'
              },
          }
        },
                  {
          opcode: 'getFrom',
          blockType: Scratch.BlockType.REPORTER,
          text: '#[NUM] из [TEXT] с разделителем [SEP]',
          arguments: {
              TEXT: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'чай,крутой,да'
              },
                        NUM: {
                  type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
                        SEP: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: ','
              },
          }
        },
        {
          opcode: 'randomString',
          blockType: Scratch.BlockType.REPORTER,
          text: 'случайная строка с набором символов [CHAR] длиной в [LEN] символов.',
          arguments: {
              LEN: {
                  type: Scratch.ArgumentType.NUMBER
              },
             CHAR: {
                  type: Scratch.ArgumentType.STRING,
               menu: 'charSet'
              }
          }
        },
         {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'TS Code',
        },
         {
          opcode: 'tsEval',
          blockType: Scratch.BlockType.REPORTER,
          text: 'TS:[CODE]',
          arguments: {
              CODE: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'create {tea} setValue 5;variable{tea}'
              }
          }
        },
                 {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'pi',
          arguments: {
              TEA: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: '0'
              }
          }
        },
                        {
          opcode: 'teaCmd',
          blockType: Scratch.BlockType.REPORTER,
          text: 'TS Command: [CMD]',
          arguments: {
              CMD: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'sum: 1+1'
              }
          }
        },
          {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Объекты',
        },
                                {
          opcode: 'createObj',
          blockType: Scratch.BlockType.COMMAND,
          text: 'создать объект с названием [NAME]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'obj'
              }
          }
        },
        {
          opcode: 'setObjKey',
          blockType: Scratch.BlockType.COMMAND,
          text: 'установить ключу [KEY] из объекта [NAME] значение [VALUE]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'obj'
              },
             KEY: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'key'
              },
             VALUE: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: '5'
              }
          }
        },
         {
          opcode: 'replaceObj',
          blockType: Scratch.BlockType.REPORTER,
          text: 'заменить все совпадения текста [TEXT] с объектом [OBJ]',
          arguments: {
              OBJ: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'obj'
              },
             TEXT: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: '\'text 123\''
              }
          }
        },
          {
          opcode: 'getMas',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить объект [OBJ]',
          arguments: {
              OBJ: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'obj'
              }
          }
        },
          {
          opcode: 'getObjKey',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить значение ключа [KEY] из объекта [OBJ]',
          arguments: {
              OBJ: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'obj'
              },
             KEY: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'key'
              }
          }
        },
         {
          opcode: 'getKeyName',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить имя ключа со значением [VALUE] из объекта [OBJ]',
          arguments: {
              OBJ: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'obj'
              },
             VALUE: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'value'
              }
          }
        },
                 {
          opcode: 'getKeyByIndex',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить имя ключа с индексом [INDEX] из объекта [OBJ]',
          arguments: {
              OBJ: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'obj'
              },
             INDEX: {
                  type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              }
          }
        },
        
         {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Взаимодействия с браузером',
        },
        {
          opcode: 'openPage',
          blockType: Scratch.BlockType.COMMAND,
          text: 'открыть страницу [URL] в [TAB] вкладке',
          arguments: {
              URL: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'https\:\\\\scratch\.mit\.edu\\'
              },
            TAB: {
              type: Scratch.ArgumentType.STRING,
              menu: 'tab'
            }
          }
        },
         {
          opcode: 'reloadPage',
          blockType: Scratch.BlockType.COMMAND,
          text: 'обновить страницу',
          arguments: {
              LOL: {
                  type: Scratch.ArgumentType.BOOLEAN
              }
          }
        },
        {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Звуки',
        },/*
         {
          opcode: 'playSound',
          blockType: Scratch.BlockType.COMMAND,
          text: 'воспроизвести звук по ссылке [URL]',
          arguments: {
              URL: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://wav-library.net/sounds/0-0-1-16300-20'
              }
          }
        },
                         {
          opcode: 'playSoundWU',
          blockType: Scratch.BlockType.COMMAND,
          text: 'воспроизвести звук',
          arguments: {
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
            
          }
        },
                                 {
          opcode: 'playSoundAndWait',
          blockType: Scratch.BlockType.COMMAND,
          text: 'воспроизвести звук и ждать',
          arguments: {
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
            
          }
        },
                 {
          opcode: 'setSound',
          blockType: Scratch.BlockType.COMMAND,
          text: 'установить звуку значение в [URL]',
          arguments: {
              URL: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://wav-library.net/sounds/0-0-1-16300-20'
              }
            
          }
        },
         {
          opcode: 'changeVolume',
          blockType: Scratch.BlockType.COMMAND,
          text: 'изменить громкость звука на [VOL]',
          arguments: {
              VOL: {
                  type: Scratch.ArgumentType.NUMBER,
                defaultValue: '25'
              }
          }
        },
        {
          opcode: 'setVolume',
          blockType: Scratch.BlockType.COMMAND,
          text: 'установить громкость звука в [VOL]',
          arguments: {
              VOL: {
                  type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              }
          }
        },
        {
          opcode: 'stopSounds',
          blockType: Scratch.BlockType.COMMAND,
          text: 'остановить все звуки',
          arguments: {
              LOL: {
                  type: Scratch.ArgumentType.NUMBER,
                defaultValue: '25'
              }
          }
        },
  {
          opcode: 'pauseSounds',
          blockType: Scratch.BlockType.COMMAND,
          text: 'приостановить звук',
          arguments: {
             NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            }
          }
        },
        {
          opcode: 'resumeSounds',
          blockType: Scratch.BlockType.COMMAND,
          text: 'возобновить звук',
          arguments: {
             NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            }
          }
        },
              {
          opcode: 'gotoSound',
          blockType: Scratch.BlockType.COMMAND,
          text: 'перемотать звук на [GOTO]',
          arguments: {
              GOTO: {
                  type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              }
          }
        },
        {
          opcode: 'soundLength',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить длину звука',
          arguments: {
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
          }
        },
                {
          opcode: 'getVolume',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить громкость звука',
          arguments: {
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
          }
        },
        {
          opcode: 'cTime',
          blockType: Scratch.BlockType.REPORTER,
          text: 'прошло времени с момента воспроизведения звука',
          arguments: {
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
          }
        },
         {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Звуки с названием',
        },*/
         {
          opcode: 'playSoundN',
          blockType: Scratch.BlockType.COMMAND,
          text: 'воспроизвести звук [NAME] по ссылке [URL]',
          arguments: {
              URL: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://wav-library.net/sounds/0-0-1-16300-20'
              },
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
            
          }
        },
                {
          opcode: 'playSoundAndWaitN',
          blockType: Scratch.BlockType.COMMAND,
          text: 'воспроизвести звук [NAME] и ждать',
          arguments: {
              URL: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://wav-library.net/sounds/0-0-1-16300-20'
              },
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
            
          }
        },
                 {
          opcode: 'playSoundWUN',
          blockType: Scratch.BlockType.COMMAND,
          text: 'воспроизвести звук [NAME]',
          arguments: {
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
            
          }
        },
                 {
          opcode: 'setSoundN',
          blockType: Scratch.BlockType.COMMAND,
          text: 'установить звуку [NAME] значение в [URL]',
          arguments: {
              URL: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://wav-library.net/sounds/0-0-1-16300-20'
              },
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
            
          }
        },
         {
          opcode: 'changeVolumeN',
          blockType: Scratch.BlockType.COMMAND,
          text: 'изменить громкость звука [NAME] на [VOL]',
          arguments: {
              VOL: {
                  type: Scratch.ArgumentType.NUMBER,
                defaultValue: '25'
              },
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
          }
        },
        {
          opcode: 'setVolumeN',
          blockType: Scratch.BlockType.COMMAND,
          text: 'установить громкость звука [NAME] в [VOL]',
          arguments: {
              VOL: {
                  type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              },
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
          }
        },
        {
          opcode: 'stopSoundsN',
          blockType: Scratch.BlockType.COMMAND,
          text: 'остановить звук [NAME]',
          arguments: {
             NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            }
          }
        },
         {
          opcode: 'pauseSoundsN',
          blockType: Scratch.BlockType.COMMAND,
          text: 'приостановить звук [NAME]',
          arguments: {
             NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            }
          }
        },
        {
          opcode: 'resumeSoundsN',
          blockType: Scratch.BlockType.COMMAND,
          text: 'возобновить звук [NAME]',
          arguments: {
             NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            }
          }
        },
              {
          opcode: 'gotoSoundN',
          blockType: Scratch.BlockType.COMMAND,
          text: 'перемотать звук [NAME] на [GOTO]',
          arguments: {
              GOTO: {
                  type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              },
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
          }
        },/*
              {
          opcode: 'soundLengthN',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить длину звука [NAME]',
          arguments: {
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
          }
        },
        {
          opcode: 'getVolumeN',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить громкость звука [NAME]',
          arguments: {
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
          }
        },
                {
          opcode: 'cTimeN',
          blockType: Scratch.BlockType.REPORTER,
          text: 'прошло времени с момента воспроизведения звука [NAME]',
          arguments: {
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
          }
        },*/
                        {
          opcode: 'getSound',
          blockType: Scratch.BlockType.REPORTER,
          text: '[PARAM] от [NAME]',
          arguments: {
            NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'meow'
            },
            PARAM: {
                type: Scratch.ArgumentType.STRING,
                menu: 'soundParam'
            },
          }
        },
                 {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Ссылки',
        },
         {
          opcode: 'isURL',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'это ссылка? [LINK]',
          arguments: {
            LINK: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://raw.githack.com/Teafuless/teaScratch/v1.17.1/text.js'
            }
          }
        },
                    {
          opcode: 'getURL',
          blockType: Scratch.BlockType.REPORTER,
          text: '[PARAM] от [LINK]',
          arguments: {
            LINK: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://raw.githack.com/Teafuless/teaScratch/v1.17.1/text.js'
            },
            PARAM: {
                type: Scratch.ArgumentType.STRING,
                menu: 'urlParam'
            },
          }
        },
                        {
          opcode: 'fetch',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить текст по ссылке [URL]',
          arguments: {
            URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://raw.githack.com/Teafuless/teaScratch/v1.17.1/text.js'
            },
          }
        },
                                {
          opcode: 'fetchEval',
          blockType: Scratch.BlockType.REPORTER,
          text: 'выполнить код по ссылке [URL]',
          arguments: {
            URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://raw.githack.com/Teafuless/teaScratch/v1.17.1/test.js'
            },
          }
        },
                                        {
          opcode: 'fetchEvalC',
          blockType: Scratch.BlockType.COMMAND,
          text: 'выполнить код по ссылке [URL]',
          arguments: {
            URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://raw.githack.com/Teafuless/teaScratch/v1.17.1/test.js'
            },
          }
        },
                                                {
          opcode: 'fetchFromWeb',
          blockType: Scratch.BlockType.REPORTER,
          text: 'содержимое из [URL]',
          arguments: {
            URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://get.geojs.io/v1/ip/country.json'
            },
          }
        },
        {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Счётчик',
        },
                                                {
          opcode: 'Counter',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить значение счётчика',
          arguments: {
            COUNTER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'i'
            },
          }
        },
                                                        {
          opcode: 'iCounter',
          blockType: Scratch.BlockType.COMMAND,
          text: 'увеличить счётчик [COUNTER]',
          arguments: {
            COUNTER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'i'
            },
          }
        },
                                                                {
          opcode: 'dCounter',
          blockType: Scratch.BlockType.COMMAND,
          text: 'уменьшить счётчик [COUNTER]',
          arguments: {
            COUNTER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'i'
            },
          }
        },
                                                                {
          opcode: 'rCounter',
          blockType: Scratch.BlockType.COMMAND,
          text: 'сбросить счётчик [COUNTER]',
          arguments: {
            COUNTER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'i'
            },
          }
        },
                {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Цвета',
        },
                                                                        {
          opcode: 'getColor',
          blockType: Scratch.BlockType.REPORTER,
          text: '[COLOR]',
          arguments: {
            COLOR: {
                type: Scratch.ArgumentType.COLOR,
                defaultValue: '#6bd1b8'
            },
          }
        },
           {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Указатель мыши \[!\]',
        },
{
          opcode: 'getCursor',
          blockType: Scratch.BlockType.REPORTER,
          text: 'указатель мыши',
          arguments: {
            URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://ani.cursors-4u.net/others/oth-9/oth931.cur'
            },
          }
        },
        {
          opcode: 'resetCursor',
          blockType: Scratch.BlockType.COMMAND,
          text: 'сбросить указатель мыши',
          arguments: {
            URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://ani.cursors-4u.net/others/oth-9/oth931.cur'
            },
          }
        },
                {
          opcode: 'setCursor',
          color: '#BDFDDD',
          blockType: Scratch.BlockType.COMMAND,
          text: 'изменить указатель мыши на [URL]',
          arguments: {
            URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://ani.cursors-4u.net/others/oth-9/oth931.cur'
            },
          }
        },
                {
          opcode: 'hideCursor',
          blockType: Scratch.BlockType.COMMAND,
          text: 'скрыть указатель мыши',
          arguments: {
            URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://ani.cursors-4u.net/others/oth-9/oth931.cur'
            },
          }
        },
        {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Поиск совпадений в тексте',
        },
        {
          opcode: 'findMatch',
          blockType: Scratch.BlockType.REPORTER,
          text: 'найти \#[NUM] [MATCH] в [TEXT]',
          arguments: {
            NUM: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
            },
            MATCH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'текст'
            },
            TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'тексте'
            },
          }
        },
                 {
          opcode: 'getUniqueWords',
          blockType: Scratch.BlockType.REPORTER,
          text: 'уникальные слова в [TEXT]',
          arguments: {
            TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'чай чай выручай'
            },
          }
        },
         {
          opcode: 'getUniqueLetters',
          blockType: Scratch.BlockType.REPORTER,
          text: 'уникальные символы в [TEXT]',
          arguments: {
            TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'тттттаттттотттттатттттааааоооотт'
            },
          }
        },
          {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Дата',
        },
        {
          opcode: 'getCurrentMS',
          blockType: Scratch.BlockType.REPORTER,
          text: 'текущие ms',
          arguments: {
            TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'тексте'
            },
          }
        },
                {
          opcode: 'daysUntil',
          blockType: Scratch.BlockType.REPORTER,
          text: 'дней с [CUR] до [DATE]',
          arguments: {
            CUR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'гггг/мм/дд'
            },
            DATE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'гггг/мм/дд'
            },
          }
        },
         {
          opcode: 'getDate',
          blockType: Scratch.BlockType.REPORTER,
          text: 'получить дату [DATE]',
          arguments: {
            DATE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'гггг/мм/дд'
            },
          }
        },
        {
          opcode: 'untilDate',
          blockType: Scratch.BlockType.REPORTER,
          text: '[PARAM] с [DATE] до [UNTIL]',
          arguments: {
            DATE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'гггг/мм/дд'
            },
            UNTIL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'гггг/мм/дд'
            },
            PARAM: {
                type: Scratch.ArgumentType.STRING,
                menu: 'untilDateParam'
            },
          }
        },
        {
          opcode: 'getFromDate',
          blockType: Scratch.BlockType.REPORTER,
          text: '[PARAM] от [DATE]',
          arguments: {
            DATE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'гггг/мм/дд'
            },
            PARAM: {
                type: Scratch.ArgumentType.STRING,
                menu: 'dateParam'
            },
          }
        },
        {
          opcode: 'setFromDate',
          blockType: Scratch.BlockType.REPORTER,
          text: 'установить [PARAM] от [DATE] в [STR]',
          arguments: {
            DATE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'гггг/мм/дд'
            },
            PARAM: {
                type: Scratch.ArgumentType.STRING,
              menu: 'setDateParam',
                defaultValue: 'HOURS'
            },
            STR: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '5'
            },
          }
        },
        {
          opcode: 'getToday',
          blockType: Scratch.BlockType.REPORTER,
          text: 'сегодня',
          arguments: {
            DATE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'гггг/мм/дд'
            },
          }
        },
        {
          opcode: 'getCurDate',
          blockType: Scratch.BlockType.REPORTER,
          text: 'текущий [PARAM]',
          arguments: {
            PARAM: {
                type: Scratch.ArgumentType.STRING,
                menu: 'dateParam'
            },
          }
        },
        {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Bitwise',
        },
        {
          opcode: 'bitwiseNot',
          blockType: Scratch.BlockType.REPORTER,
          text: '~[ARG]',
          arguments: {
            ARG: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '1'
            },
          }
        },
        {
          opcode: 'bitwiseLS',
          blockType: Scratch.BlockType.REPORTER,
          text: '[NUM1]<<[NUM2]',
          arguments: {
            NUM1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '5'
            },
            NUM2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '5'
            },
          }
        },
        {
          opcode: 'bitwiseRS',
          blockType: Scratch.BlockType.REPORTER,
          text: '[NUM1]>>[NUM2]',
          arguments: {
            NUM1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '5'
            },
            NUM2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '5'
            },
          }
        },
        {
          opcode: 'bitwiseunSignedRS',
          blockType: Scratch.BlockType.REPORTER,
          text: '[NUM1]>>>[NUM2]',
          arguments: {
            NUM1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '5'
            },
            NUM2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '5'
            },
          }
        },
        {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Другие операторы'
        },
        {
          opcode: 'nullish',
          blockType: Scratch.BlockType.REPORTER,
          text: '[NUM1]??[NUM2]',
          arguments: {
            NUM1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '5'
            },
            NUM2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '5'
            },
          }
        },
                {
          opcode: 'getDir',
          blockType: Scratch.BlockType.REPORTER,
          text: 'направление [DIRECT]',
          arguments: {
            DIRECT: {
                type: Scratch.ArgumentType.ANGLE,
              defaultValue: '228'
            }
          }
        },
         {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Матрица',
        },
                {
          opcode: 'getMatrix',
          blockType: Scratch.BlockType.REPORTER,
          text: '[MAT]',
          arguments: {
            MAT: {
                type: Scratch.ArgumentType.MATRIX,
              defaultValue: '0110001110011110100101100'
            }
          }
        },
                          {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Циклы',
        },
                         {
          opcode: 'forC',
          blockType: Scratch.BlockType.COMMAND,
          text: 'выполнить [START], повторять [CODE] и выполнять действие [STEP], пока [CON] верно',
          arguments: {
              CON: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'globalThis[\'tea\'] < 5'
              },
             STEP: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'globalThis[\'tea\'] += 1'
              },
                         START: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'globalThis[\'tea\'] = 0'
              },
                         CODE: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'globalThis[\'tea\']'
              }
          }
        },
                                 {
          opcode: 'forCR',
          blockType: Scratch.BlockType.REPORTER,
          text: 'выполнить [START], повторять [CODE] и выполнять действие [STEP], пока [CON] верно',
          arguments: {
              CON: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'globalThis[\'tea\'] < 5'
              },
             STEP: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'globalThis\[\'tea\'\] \+\= 1'
              },
                         START: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'globalThis\[\'tea\'\] \= 0'
              },
                         CODE: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'globalThis\[\'tea\'\]'
              }
          }
        },
               {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Функции',
        },
           {
          opcode: 'newFunc',
          blockType: Scratch.BlockType.COMMAND,
          text: 'создать функцию [NAME], с аргументами [ARGS], с кодом [CODE]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'isTea'
              },
             ARGS: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: '\'tea\''
              },
              CODE: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: '\'return tea + " - чай"\''
              }
          }
        },
        {
          opcode: 'execFunc',
          blockType: Scratch.BlockType.COMMAND,
          text: 'выполнить функцию [NAME], с аргументами [ARGS]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'isTea'
              },
             ARGS: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: '"я"'
              }
          }
        },
         {
          opcode: 'execFuncRep',
          blockType: Scratch.BlockType.REPORTER,
          text: 'выполнить функцию [NAME], с аргументами [ARGS]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'isTea'
              },
             ARGS: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: '"я"'
              }
          }
        },
        {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Классы',
        },
        {
          opcode: 'Construct',
          blockType: Scratch.BlockType.COMMAND,
          text: 'let [VAR] = new [CON]([CODE])',
          arguments: {
              CON: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'Join'
              },
             VAR: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: 'teaful'
              },
            CODE: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: '("Teaful"," жив")'
              },
          }
        },
                {
          opcode: 'ConstructR',
          blockType: Scratch.BlockType.REPORTER,
          text: 'let [VAR] = new [CON]([CODE])',
          arguments: {
              CON: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'Join'
              },
             VAR: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: 'teaful'
              },
            CODE: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: '("Teaful"," жив")'
              },
          }
        },
                {
          opcode: 'newClass',
          blockType: Scratch.BlockType.COMMAND,
          text: 'class [CLASS] \{[CODE]\}',
          arguments: {
             CLASS: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: 'Join'
              },
            CODE: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: 'constructor(text,text2)\{return String(text)+String(text2)\}'
              },
          }
        },
                        {
          opcode: 'newClassR',
          blockType: Scratch.BlockType.REPORTER,
          text: 'class [CLASS] \{[CODE]\}',
          arguments: {
             CLASS: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: 'Join'
              },
            CODE: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: 'constructor(text,text2)\{return String(text)+String(text2)\}'
              },
          }
        },
        {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Экран',
        },
                     {
          opcode: 'getScreen',
          blockType: Scratch.BlockType.REPORTER,
          text: '[PARAM]',
          arguments: {
             PARAM: {
                  type: Scratch.ArgumentType.STRING,
              menu: 'screenParam'
              }
          }
        },
                {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Навигатор',
        },
                                        {
          opcode: 'isOnLine',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'в сети?',
          arguments: {
             PARAM: {
                  type: Scratch.ArgumentType.STRING,
              menu: 'baseParam'
              }
          }
        },
                                             {
          opcode: 'language',
          blockType: Scratch.BlockType.REPORTER,
          text: 'язык пользователя',
          arguments: {
             PARAM: {
                  type: Scratch.ArgumentType.STRING,
              menu: 'baseParam'
              }
          }
        },
                           {
          opcode: 'languageNum',
          blockType: Scratch.BlockType.REPORTER,
          text: '[NUM] язык пользователя',
          arguments: {
   
            NUM: {
                  type: Scratch.ArgumentType.NUMBER,
              menu: '0'
              }
          }
        },
        {
          opcode: 'languages',
          blockType: Scratch.BlockType.REPORTER,
          text: 'языки пользователя',
          arguments: {
             PARAM: {
                  type: Scratch.ArgumentType.STRING,
              menu: 'baseParam'
              }
          }
        },
                           {
          opcode: 'cookieEnabled',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'файлы Cookie включены?',
          arguments: {
             PARAM: {
                  type: Scratch.ArgumentType.STRING,
              menu: 'baseParam'
              }
          }
        },
                           {
          opcode: 'RAM',
          blockType: Scratch.BlockType.REPORTER,
          text: 'ОЗУ',
          arguments: {
             PARAM: {
                  type: Scratch.ArgumentType.STRING,
              menu: 'baseParam'
              }
          }
        },
                           {
          opcode: 'hardware',
          blockType: Scratch.BlockType.REPORTER,
          text: 'количество ядер процессора',
          arguments: {
             PARAM: {
                  type: Scratch.ArgumentType.STRING,
              menu: 'baseParam'
              }
          }
        },
                           {
          opcode: 'buildID',
          blockType: Scratch.BlockType.REPORTER,
          text: 'ID сборки',
          arguments: {
             PARAM: {
                  type: Scratch.ArgumentType.STRING,
              menu: 'baseParam'
              }
          }
        },
                           {
          opcode: 'platform',
          blockType: Scratch.BlockType.REPORTER,
          text: 'платформа',
          arguments: {
             PARAM: {
                  type: Scratch.ArgumentType.STRING,
              menu: 'baseParam'
              }
          }
        },
                           {
          opcode: 'userAgent',
          blockType: Scratch.BlockType.REPORTER,
          text: 'пользовательский агент',
          arguments: {
             PARAM: {
                  type: Scratch.ArgumentType.STRING,
              menu: 'baseParam'
              }
          }
        },
                           {
          opcode: 'vendor',
          blockType: Scratch.BlockType.REPORTER,
          text: 'производитель браузера',
          arguments: {
             PARAM: {
                  type: Scratch.ArgumentType.STRING,
              menu: 'baseParam'
              }
          }
        },
      ],
      menus: {
        teaMenu: {
            items: ['teaful','tealess','teafuless'],
          acceptReporters: true
        },
        
        varsMenu: {
            items: ['consoleErr']
        },
        charSet: {
        items: ['QWERTY','ЙЦУКЕН','0123456789'],
          acceptReporters: true
        },
          tab:{
          items: ['этой','новой'],
          acceptReporters: true
        },
        soundParam:{
          items: ['URL','VOLUME','TIME','DURATION'],
          acceptReporters: true
        },
         trueFalse:{
          items: ['true','false'],
          acceptReporters: true
        },
        urlParam:{
          items: ['DOMAIN','ORIGIN'],
          acceptReporters: true
        },
        dateParam:{
          items: ['YEAR','MONTH','DAY OF THE WEEK','DAY','HOURS','MINUTES','SECONDS','MS','FULL YEAR','TIME SINCE THE UNIX EPOCH','UTC FULL YEAR','UTC MONTH', 'UTC DAY OF THE WEEK','UTC DAY','UTC HOURS','UTC MINUTES','UTC SECONDS','UTC MS','TIMEZONE OFFSET'],
          acceptReporters: true
        },
        untilDateParam:{
          items: ['лет','месяцев','часов','минут','секунд','MS'],
          acceptReporters: true
        },
            setDateParam:{
          items: ['YEAR','MONTH','DAY OF THE WEEK','DAY','HOURS','MINUTES','SECONDS','MS','FULL YEAR','TIME SINCE THE UNIX EPOCH','UTC FULL YEAR','UTC MONTH', 'UTC DAY OF THE WEEK','UTC DAY','UTC HOURS','UTC MINUTES','UTC SECONDS','UTC MS'],
          acceptReporters: true
            },
        baseParam:{
          items: ['в','из'],
          acceptReporters: true
            },
         screenParam:{
          items: ["ширина","высота","доступная ширина","доступная высота","первый доступный пиксель слева","первый доступный пиксель сверху","угол ориентации документа","ориентация экрана"],
          acceptReporters: true
            },
      }
    };
  }
  turnInToTea({TEXT}) {
    return TEXT+" - чай"
  }
  getPosDirection({MYXPOS,MYYPOS,XPOS,YPOS}){
return Math.atan((XPOS - MYXPOS)/(YPOS - MYYPOS)) + (((YPOS - MYYPOS < 0) ? 1 : 0)) * 180;
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
    if (CONDITION===true) {
      return true
  } else { 
  }
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
 changeVar({NAME,VALUE}){
globalThis[NAME] += VALUE
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
    return globalThis[NAME].indexOf(VALUE)
  }
    lastIndexOfObj({NAME,VALUE}){
    return globalThis[NAME].lastIndexOf(VALUE)
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
    lastIndexOfLetter({LETTER,TEXT}){
  return TEXT.lastIndexOf(LETTER)
  }
  between({NUM1,NUM2,NUM3}){
    if(NUM2<NUM3) {
 return NUM2<NUM1&&NUM1<NUM3
    } else { 
      return NUM2>NUM1&&NUM1>NUM3
    }
  }
    moreOrEquals({NUM1,NUM2}){
    return (NUM1>=NUM2)
  }
  smallerOrEquals({NUM1,NUM2}){
    return (NUM1<=NUM2)
  }
   strictEquals({STRING,STRING2}){
    return (STRING===STRING2)
  }
   strictNotEquals({STRING,STRING2}){
    return (STRING!==STRING2)
  }
     strictLogicNot({STRING}){
    return (STRING!==true)
  }
       strictLogic({STRING}){
    return (STRING===true)
  }
  getProcent({NUMBER1,PROCENT}){
    return (NUMBER1/100)*PROCENT
  }
  getProcentFrom({NUMBER1,NUMBER2}){
    return (NUMBER1/NUMBER2)*100
  }
  consoleLog({TEXT}){
    globalThis.consoleLog = String(TEXT);
    console.log(TEXT);
  }
  consoleError({CODE}){
  globalThis.consoleErr = String(CODE)
  throw (console.error(CODE))
  }
catchError({CODE}){
    try {
    return eval(CODE)
} catch(error) {
return error
}
  }
  catchErr({CODE}){
    try {
     CODE
} catch(error) {
 globalThis.consoleErr = String(error)
console.error(error)
}
  }
  test({ARG}) {
    globalThis.test = true
  }
  alertT({TEXT}){
    alert(TEXT)
  }
    promptT({TEXT}){
    prompt(TEXT)
  }
  joinsum({STRING1,STRING2}){
    return STRING1+STRING2
  }
    sumvar({VAR,VALUE}){
    return globalThis[VAR]+=VALUE
  }
  recMsg({MSG}){
    return (globalThis[MSG+'tsMsg']==1)
    globalThis[MSG+'tsMsg'] = 0
  }
  recMsgVar({MSG,VALUE,VAR}){
    return (globalThis[MSG+'tsMsg']==1&&globalThis[VAR]==VALUE)
    globalThis[MSG+'tsMsg'] = 0
  }
    sendMsgVar({MSG,VALUE,VAR}){
      function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
    globalThis[MSG+'tsMsg'] = 1
    globalThis[VAR] = VALUE
      
      async function undo() {
        console.log('undo')
  await delay(300);
       globalThis[MSG+'tsMsg'] = 0 
}
      undo()
  }
   sendMsg({MSG}){
     function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
    globalThis[MSG+'tsMsg'] = 1
      async function undo() {
        console.log('undo')
  await delay(300);
       globalThis[MSG+'tsMsg'] = 0 
}
     undo()
  }
   onMsg({MSG}) {
    if (globalThis[MSG+'tsMsg']==1) {
      return true
  } else { 
  }
     globalThis[MSG+'tsMsg'] = 0
  }
  
  onMsgVar({MSG}) {
    if (globalThis[MSG+'tsMsg']==1&&globalThis[VAR]==VALUE) {
      return true
  } else {  
  }
     globalThis[MSG+'tsMsg'] = 0
  }
  text({TEXT}){
    return TEXT
  }
  randomString({LEN,CHAR}){
    if  (CHAR = 'QWERTY'){
    return generateString(LEN,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz')
    } else if (CHAR = 'ЙЦУКЕН'){
      return generateString(LEN,'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮйцукенгшщзхъфывапролджэячсмитьбюёЁ')
    } else {
       return generateString(LEN,'0123456789')
    }
function generateString(length,charset) {
    let result = ' ';
 
    const charactersLength = charset.length;
  
    for ( let i = 0; i < length; i++ ) {
        result += charset.charAt(Math.floor(Math.random() * charactersLength));
    }

  return result;
}
    
  
  }
  newFunc({NAME,ARGS,CODE}){
let res = `globalThis["${NAME}"] \= new Function(${ARGS},${CODE})`
eval(res)
  }
  execFunc({NAME,ARGS}){
let res = `${NAME}(${ARGS})`
eval(res)

  }
  execFuncRep({NAME,ARGS}){
let res = `${NAME}(${ARGS})`
return eval(res)
  }
  tsEval({CODE}){
    /*ERRORS*/
    const teaErrors = {
      '\:': ' ',
      'Syntax': 'Синтаксическая',
      'Error': 'Ошибка',
      'SyntaxError': 'Синтаксическая ошибка'
    }
    /*ERRORS_END*/
    //
    //
    /*CODE*/
    const teaCode = {
'get': 'return',
'+': 'sum',
'and': '\,',
'[': '(',
']': ')',
'{': '[\'',
'}': '\']',
'sendInConsole': 'console.log',
'variable': 'globalThis',
'create': 'globalThis',
'setValue': '=',
'also': ' ',
'todo': '\n\/\*TODO --->\n',
'todo_end': '\n<--- TODO\*\/\n',
'sendMessage': 'globalThis[\'',
'sendMessage_end': '\'+\'tsMsg\']=1',
'receivedMessage':'(globalThis[\'',
'receivedMessage_end': '\'+\'tsMsg\']==true)',
'unSMessage': 'globalThis[\'',
'unSMessage_end': '\'+\'tsMsg\']=0',
'move': 'globalThis[\'spriteMove\'+\'tsMsg\']=1;globalThis[\'steps\']=',
'move_end': ' ',
'comment': '\n\/\*\n',
'comment_end': '\n\*\/\n',
'rotateBy': 'globalThis[\'rotate\'+\'tsMsg\']=1;globalThis[\'rotate\']=',
'rotateBy_end': ' ',
'rotateBack': 'globalThis[\'rotate\'+\'tsMsg\']=1;globalThis[\'rotate\']=(',
'rotateBack_end': ')*-1',
'condition': '\(\(',
'condition_end': '\)==true)',
'if_start': '\{ \n\/\*Teanded Scratch \'if start\'\*\/\n',
'if_end': '\n\/\*Teanded Scratch \'if end\'\*\/\n}',
'c_v': '\/\*code_view\*\/',
'say': 'globalThis[\'say\'+\'tsMsg\']=1;globalThis[\'sayText\']=',
'say_end': ' ',
'say_AW': 'globalThis[\'say_AW\'+\'tsMsg\']=1;globalThis[\'say_AWText\']=',
'say_AW_end': ';',
'say_wait': 'globalThis[\'say_AWWait\']=',
'say_wait_end': ' ',
'switch_costumeTo': 'globalThis[\'switchCostume\'+\'tsMsg\']=1;globalThis[\'swCostume\']=',
'switch_costume_end': ' ',
'switch_costumeBy': 'globalThis[\'switchCostumeBy\'+\'tsMsg\']=1;globalThis[\'swCostumeBy\']=',
'switch_costumeBy_end': ' ',

}
    /*CODE-END*/
    
    /*
    Teanded Scratch pseudo-programming language
    */
function sum(...args){
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

try {
  if(CODE.replace('c_v',' ')==CODE){
return eval(CODE.replace(/(\w+|.)/g, (m,n) => (teaCode[n] || m)))
  } else {
    return String(CODE.replace(/(\w+|.)/g, (m,n) => (teaCode[n] || m)))
  }
} catch (e) {return String(e.replace(/(\w+|.)/g, (m,n) => (teaErrors[n] || m)))}
   /*end*/
  }//
  binToText({BIN}){
    function binToText(str) {
  return str.split(/\s/).map(function (val){
    return String.fromCharCode(parseInt(val, 2));
  }).join("");
}
    binToText({BIN})
  }
  textToBin({TEXT}){
    function textToBin(text) {
  return (
    Array
      .from(text)
      .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
      .map(bin => '0'.repeat(8 - bin.length) + bin )
      .join(' ')
  );
}
    textToBin(TEXT)
  }
  varExists({NAME}){
try { 
  globalThis[NAME];
  return ((globalThis[NAME]==undefined)==false);
} catch (e) { 
  return false;
};
  }
  pi({TEA}){
    return '3.1415926535'
  }
  
  /* TEA CMD
  BELOW: */
            teaCmd({CMD}){
let text = CMD.replace(/([\(\)])/g,'')
let cmd = text.split(":")
text = cmd.replace(/([\(\)])/g,'')
              cmd = cmd[0]
  if (cmd=='sum'){
    text = text.split("+")
function sum(...args){
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

   result;
} 
    return sum(...text)

  }else if (cmd == 'sub'){
    text = text.split("-")
function sub(...args){
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result -= arguments[i];
  }

   result;
} 
    return sub(...text)

    
  }else if (cmd=='divide'){
    text = text.split("-")
function divide(...args){
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result = result / arguments[i]
  }

   result;
} 
    return divide(...text)
  }else if(cmd== 'multi'){
    text = text.split("-")
function multi(...args){
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result = result * arguments[i]
  }

   result;
} 
    return multi(...text)
  }else {
    return 'Oops...'
}
  }
  /*TEA CMD
  END*/
  
 createObj({NAME}){
   globalThis[NAME] = {}
 }
 setObjKey({NAME,KEY,VALUE}){
  let res = `globalThis\[\'${NAME}\'\]\.${KEY} \= \`${VALUE}\``
  eval(res)
 }
  replaceObj({OBJ,TEXT}){
    return String(eval(String(TEXT).replace(/(\w+|.)/g, (m,n) => (globalThis[OBJ][n] || m))))
  }
  getMas({OBJ}){
    return globalThis[OBJ]
  }
  getObjKey({OBJ,KEY}){
      let res = `globalThis\[\'${OBJ}\'\]\.${KEY}`
  return eval(res)
  }
  getKeyName({OBJ,VALUE}){
function getKey(obj, value) {
   Object.keys(obj).find(key => obj[key] === value);
}
    return getKey(globalThis[OBJ],VALUE)
  }
  getKeyByIndex({OBJ,INDEX}){
    return Object.keys(globalThis[OBJ])[INDEX]
  }
  toUpCase({TEXT}){
    return String(TEXT).toUpperCase()
  }
    toLowCase({TEXT}){
    return String(TEXT).toLowerCase()
  }
  addTextMas({TEXT,SYM,MAS}){
    let text = TEXT.split(SYM)
    for (let i = 0;i < text.length;i++){
      globalThis[MAS].push(text[i])
    }
  }
  forC({CON,STEP,START,CODE}){
    
let res = `for \(${START}\;${CON}\;${STEP}\)\{${CODE}\}`
try {
eval(res)
} catch(e) {
  console.error(e)
}
  }
    forCR({CON,STEP,START,CODE}){
let res = `for \(${START}\;${CON}\;${STEP}\)\{\n${CODE}\n\}`
try {
eval(res)
  return true
} catch(e) {
  return e
}
  }
  openPage({URL,TAB}){
    if (TAB=='этой'){
window.open(String(URL), '_blank');
    } else  {
window.location.replace(String(URL))
  }
  }
  reloadPage({LOL}){
    window.location.reload()
  }
  playSound({URL}){
    if (typeof globalThis['VOLUME'] == undefined||globalThis['VOLUME'] == undefined){
      globalThis['VOLUME'] = 100/100
    }
                    if (globalThis['VOLUME']>1) {
          globalThis['VOLUME'] = 0+globalThis['VOLUME']-1
        }
        if (globalThis['VOLUME']<0) {
          globalThis['VOLUME'] = 1+globalThis['VOLUME']
        }
   globalThis['sound'] = new Audio
    globalThis['sound'].src = String(URL)
    globalThis['sound'].volume = globalThis['VOLUME']
    globalThis['sound'].play()
  }
  changeVolume({VOL}){
    globalThis['VOLUME'] += Number(VOL)/100
  }
  setVolume({VOL}){
    globalThis['VOLUME'] = Number(VOL)/100
  }
  stopSounds({LOL}){
    globalThis['sound'].pause();
    globalThis['sound'].currentTime = 0;
  }
  gotoSound({GOTO}){
    globalThis['sound'].currentTime = GOTO
  }
    playSoundN({URL,NAME}){
    if (typeof globalThis[NAME+'VOLUME'] == undefined){
      globalThis[NAME+'VOLUME'] = 100/100
    }
                      if (globalThis[NAME+'VOLUME']>1) {
          globalThis[NAME+'VOLUME'] = 0+globalThis[NAME+'VOLUME']-1
        }
        if (globalThis[NAME+'VOLUME']<0) {
          globalThis[NAME+'VOLUME'] = 1+globalThis[NAME+'VOLUME']
        }
    globalThis[NAME] = new Audio
    globalThis[NAME].src = String(URL)
    globalThis[NAME].volume = globalThis[NAME+'VOLUME']
    globalThis[NAME].play()
  }
    changeVolumeN({VOL,NAME}){
    globalThis[NAME+'VOLUME'] += Number(VOL)/100
  }
  setVolumeN({VOL,NAME}){
    globalThis[NAME+'VOLUME'] = Number(VOL)/100
  }
  stopSoundsN({NAME}){
        globalThis[NAME].pause();
    globalThis[NAME].currentTime = 0;
  }
  gotoSoundN({GOTO,NAME}){
     globalThis[NAME].currentTime = GOTO
  }
    soundLengthN({NAME}){
    return globalThis[NAME].duration
  }
    getVolumeN({NAME}){
    return globalThis[NAME+'VOLUME']*100
  }
  setSoundN({URL,NAME}){
    globalThis[NAME] = new Audio
    globalThis[NAME].src = String(URL)
  }
        playSoundAndWaitN({URL,NAME}){
          function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
        
    if (typeof globalThis[NAME+'VOLUME'] == undefined){
      globalThis[NAME+'VOLUME'] = 100/100
    }
                if (globalThis[NAME+'VOLUME']>1) {
          globalThis[NAME+'VOLUME'] = 0+globalThis[NAME+'VOLUME']-1
        }
        if (globalThis[NAME+'VOLUME']<0) {
          globalThis[NAME+'VOLUME'] = 1+globalThis[NAME+'VOLUME']
        }
    globalThis[NAME].volume = globalThis[NAME+'VOLUME']
    globalThis[NAME].play()
          sleep(30+globalThis[NAME].duration*1000)
  }
      playSoundWUN({URL,NAME}){
    if (typeof globalThis[NAME+'VOLUME'] == undefined){
      globalThis[NAME+'VOLUME'] = 100/100
    }
                if (globalThis[NAME+'VOLUME']>1) {
          globalThis[NAME+'VOLUME'] = 0+globalThis[NAME+'VOLUME']-1
        }
        if (globalThis[NAME+'VOLUME']<0) {
          globalThis[NAME+'VOLUME'] = 1+globalThis[NAME+'VOLUME']
        }
    globalThis[NAME].volume = globalThis[NAME+'VOLUME']
    globalThis[NAME].play()
        
  }
    pauseSoundsN({NAME}){
      globalThis[NAME+'pausedTime'] = globalThis[NAME].currentTime
    globalThis[NAME].pause()
globalThis[NAME].currentTime = 0;
  }
  resumeSoundsN({NAME}){
    globalThis[NAME].play()
    globalThis[NAME].currentTime = globalThis[NAME+'pausedTime']
    globalThis[NAME+'pausedTime']=0
  }
      soundLength({NAME}){
    return globalThis['sound'].duration
  }
    getVolume({NAME}){
    return globalThis['VOLUME']*100
  }
  setSound({NAME}){
   globalThis['sound'] = new Audio
   globalThis['sound'].src = String(URL)
  }
   
   playSoundAndWait({URL,NAME}){
     function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
    if (typeof globalThis['VOLUME'] == undefined){
      globalThis['VOLUME'] = 100/100
    }
        if (globalThis['VOLUME']>1) {
          globalThis['VOLUME'] = 0+globalThis['VOLUME']-1
        }
        if (globalThis['VOLUME']<0) {
          globalThis['VOLUME'] = 1+globalThis['VOLUME']
        }
        globalThis['sound'].volume = globalThis[NAME+'VOLUME']
    globalThis['sound'].play()
     sleep(30+globalThis['sound'].duration*1000)
  }
  
      playSoundWU({URL,NAME}){
    if (typeof globalThis['VOLUME'] == undefined){
      globalThis['VOLUME'] = 100/100
    }
        if (globalThis['VOLUME']>1) {
          globalThis['VOLUME'] = 0+globalThis['VOLUME']-1
        }
        if (globalThis['VOLUME']<0) {
          globalThis['VOLUME'] = 1+globalThis['VOLUME']
        }
   globalThis['sound'].volume = globalThis[NAME+'VOLUME']
    globalThis['sound'].play()
  }
    pauseSoundsN({NAME}){
      globalThis['sound_pausedTime'] = globalThis['sound'].currentTime
    globalThis['sound'].stop()
  }
  resumeSoundsN({NAME}){
    globalThis['sound'].play()
    globalThis['sound'].currentTime = globalThis['sound_pausedTime']
    globalThis['sound_pausedTime']=0
  }
  cTimeN({NAME}){
    return globalThis[NAME].currentTime
  }
    cTime({NAME}){
    return globalThis['sound'].currentTime
  }
  fetch({URL}){
   return fetch(`${URL}`).then(response => response.text()).then(text => text)
  }
    fetchEval({URL}){
       
let r = fetch(`${URL}`).then(response => response.text()).then(text => eval(text))
   return r

  }
      fetchEvalC({URL}){
      
let r = fetch(`${URL}`).then(response => response.text()).then(text => eval(text))
    r

  }
  getColor({COLOR}){
    return String(COLOR)
  }
  iCounter({COUNTER}){
    globalThis['COUNTER'] = COUNTER
globalThis[COUNTER]++
  }
    dCounter({COUNTER}){
      globalThis['COUNTER'] = COUNTER
globalThis[COUNTER]--
  }
    rCounter({COUNTER}){
      globalThis['COUNTER'] = COUNTER
globalThis[COUNTER]=0
  }
  Counter({COUNTER}){
    return globalThis[globalThis['COUNTER']]
  }
      resetCursor() {
        document.body.style.cursor = "auto";
    }
      hideCursor() {
        document.body.style.cursor = "none";
    }
     getCursor() {
        let text = document.body.style.cursor;
        return text;
    }
      setCursor({URL}) {
        document.body.style.cursor = URL;
    }
  getSound({NAME,PARAM}){
    if (PARAM == 'URL'){
      return String(globalThis[NAME].src)
    } else if (PARAM == 'VOLUME'){
      return String(globalThis[NAME].volume*100)
    } else if (PARAM == 'TIME'){
      return String(globalThis[NAME].currentTime)
    } else if (PARAM == 'DURATION'){
      return String(globalThis[NAME].duration)
    }
  }
  trueFalse({TRUEFALSE}){
    return String(TRUEFALSE)
  }
  findMatch({TEXT,MATCH,NUM}){
   return String(String(TEXT).match(MATCH)[NUM])
  }
  fetchFromWeb({URL}){
        return fetch(URL).then(res => res.text()).catch(err => '');
  }
  getFrom({TEXT,NUM,SEP}){
    let res = TEXT.split(String(SEP))
    return String(res[NUM])
  }
  isURL({LINK}){
    function isURL(str) {
      let link
  try {
    link = new URL(str)
    return String(link.protocol === "http:" || link.protocol === "https:")
  } catch (e) {
    return false
  }

  return String(link.protocol === "http:" || link.protocol === "https:")
}
    return String(isURL(LINK))
  }
  
  getURL({LINK,PARAM}){
    let link = (new URL(LINK))
    if (PARAM=='DOMAIN'){
      return link.hostname
    } else if (PARAM=='ORIGIN'){
      return link.origin
    }
  }
  roundWithSteps({NUM,STEPS}){
    function roundNum(num, i, offset) {
  return Math.ceil((num - offset) / i ) * i + offset;
}
return roundNum(NUM, STEPS, 10)
  }
    roundWithOffset({NUM,STEPS,OFFSET}){
    function roundNum(num, i, offset) {
   return Math.ceil((num - offset) / i ) * i + offset;
}
return roundNum(NUM, STEPS, OFFSET)
  }
/*разделитель
да, мне просто не удобно 
когда все функции выглядят как одна, 
вот и разделяю*/
  getLetters({TEXT,NUM1,NUM2}){
    return TEXT.slice(Math.max(1, NUM1) - 1, Math.min(TEXT.length, NUM2));
  }
repeatText({TIMES,TEXT}){
  let res = ''
  for (let i = 0;i < TIMES;i++){
    res += TEXT
  }
  return res
 }
  curUrl({URL}){
    return String(window.location.href)
  }
  sliceText({TEXT,NUM1,NUM2}){
    return String(String(TEXT).slice(NUM1,NUM2))
  }
  getCurrentMS({TEXT}){
    return Date.now() % 1000
  }
  daysUntil({CUR,DATE}){
    let res = 24 * 60 * 60 * 1000
    let curday = new Date(CUR)
    let date = new Date(DATE)
    return String(Math.round(Math.abs((curday - date) / res)))
 }
  getDate({DATE}){
    let date = new Date(DATE)
    return String(date)
 }
  getFromDate({DATE,PARAM}){
    let date = new Date(DATE)
    if (PARAM == 'YEAR'){
      return String(date.getYear())
    } else if (PARAM == 'MONTH'){
      return String(date.getMonth())
    } else if (PARAM == 'DAY OF THE WEEK'){
      return String(date.getDay())
    } else if (PARAM == 'HOURS'){
      return String(date.getHours())
    } else if (PARAM == 'MINUTES'){
      return String(date.getMinutes())
    } else if (PARAM == 'SECONDS'){
      return String(date.getSeconds())
    } else if (PARAM == 'DAY'){
      return String(date.getDate())
    } else if (PARAM == 'MS'){
      return String(date.getMilliseconds())
    } else if (PARAM == 'FULL YEAR'){
      return String(date.getFullYear())
    } else if (PARAM == 'TIME SINCE THE UNIX EPOCH'){
      return String(date.getTime())
    } else if (PARAM == 'TIMEZONE OFFSET'){
      return String(date.getTimezoneOffset())
    } else if (PARAM == 'UTC DAY'){
      return String(date.getUTCDate())
    } else if (PARAM == 'UTC DAY OF THE WEEK'){
      return String(date.getUTCDay())
    } else if (PARAM == 'UTC FULL YEAR'){
      return String(date.getUTCFullYear())
    } else if (PARAM == 'UTC HOURS'){
      return String(date.getUTCHours())
    } else if (PARAM == 'UTC MS'){
      return String(date.getUTCMilliseconds())
    } else if (PARAM == 'UTC MINUTES'){
      return String(date.getUTCMinutes())
    } else if (PARAM == 'UTC MONTH'){
      return String(date.getUTCMonth())
    } else if (PARAM == 'UTC SECONDS'){
      return String(date.getUTCSeconds())
    }
 }
   getCurDate({PARAM}){
    let date = new Date()
    if (PARAM == 'YEAR'){
      return String(date.getYear())
    } else if (PARAM == 'MONTH'){
      return String(date.getMonth())
    } else if (PARAM == 'DAY OF THE WEEK'){
      return String(date.getDay())
    } else if (PARAM == 'HOURS'){
      return String(date.getHours())
    } else if (PARAM == 'MINUTES'){
      return String(date.getMinutes())
    } else if (PARAM == 'SECONDS'){
      return String(date.getSeconds())
    } else if (PARAM == 'DAY'){
      return String(date.getDate())
    } else if (PARAM == 'MS'){
      return String(date.getMilliseconds())
    } else if (PARAM == 'FULL YEAR'){
      return String(date.getFullYear())
    } else if (PARAM == 'TIME SINCE THE UNIX EPOCH'){
      return String(date.getTime())
    } else if (PARAM == 'TIMEZONE OFFSET'){
      return String(date.getTimezoneOffset())
    } else if (PARAM == 'UTC DAY'){
      return String(date.getUTCDate())
    } else if (PARAM == 'UTC DAY OF THE WEEK'){
      return String(date.getUTCDay())
    } else if (PARAM == 'UTC FULL YEAR'){
      return String(date.getUTCFullYear())
    } else if (PARAM == 'UTC HOURS'){
      return String(date.getUTCHours())
    } else if (PARAM == 'UTC MS'){
      return String(date.getUTCMilliseconds())
    } else if (PARAM == 'UTC MINUTES'){
      return String(date.getUTCMinutes())
    } else if (PARAM == 'UTC MONTH'){
      return String(date.getUTCMonth())
    } else if (PARAM == 'UTC SECONDS'){
      return String(date.getUTCSeconds())
    }
 }
   setFromDate({DATE,PARAM,STR}){
    let date = new Date(DATE)
    if (PARAM == 'YEAR'){
     date.setYear(STR)
      return String(date.getYear())
    } else if (PARAM == 'MONTH'){
       date.setMonth(STR)
      return String(date.getMonth())
    } else if (PARAM == 'DAY OF THE WEEK'){
       date.setDay(STR)
      return String(date.getDay())
    } else if (PARAM == 'HOURS'){
      date.setHours(STR)
      return String(date.getHours())
    } else if (PARAM == 'MINUTES'){
       date.setMinutes(STR)
      return String(date.getMinutes())
    } else if (PARAM == 'SECONDS'){
       date.setSeconds(STR)
return String(date.getSeconds())

    } else if (PARAM == 'DAY'){
       date.setDate(STR)
      return String(date.getDate())
    } else if (PARAM == 'MS'){
      date.setMilliseconds(STR)
      return String(date.getMilliseconds())
    } else if (PARAM == 'FULL YEAR'){
      date.setFullYear(STR)
return String(date.getFullYear())

    } else if (PARAM == 'TIME SINCE THE UNIX EPOCH'){
       date.setTime(STR)
       return String(date.getTime())
    } else if (PARAM == 'UTC DAY'){
      date.setUTCDate(STR)
      return String(date.getUTCDate())
    } else if (PARAM == 'UTC DAY OF THE WEEK'){
      date.setUTCDay(STR)
      return String(date.getUTCDay())
    } else if (PARAM == 'UTC FULL YEAR'){
       date.setUTCFullYear(STR)
      return String(date.getUTCFullYear())
    } else if (PARAM == 'UTC HOURS'){
       date.setUTCHours(STR)
return String(date.getUTCHours())
    } else if (PARAM == 'UTC MS'){
       date.setUTCMilliseconds(STR)
      return String(date.getUTCMilliseconds())
    } else if (PARAM == 'UTC MINUTES'){
       date.setUTCMinutes(STR)
      return String(date.getUTCMinutes())
    } else if (PARAM == 'UTC MONTH'){
       date.setUTCMonth(STR)
      return String(date.getUTCMonth())
    } else if (PARAM == 'UTC SECONDS'){
       date.setUTCSeconds(STR)
       return String(date.getUTCSeconds())
    }
 }
    untilDate({DATE,UNTIL,PARAM}){
    let date = new Date(DATE)
    let until = new Date(UNTIL)
    if (PARAM == 'лет'){
      return String(Number(until.getYear())-Number(date.getYear()))
    } else if (PARAM == 'месяцев'){
      return String(Number(until.getMonth())-Number(date.getMonth()))
    } else if (PARAM == 'часов'){
      return String(Number(until.getHours())-Number(date.getHours()))
    } else if (PARAM == 'минут'){
      return String(Number(until.getMinutes())-Number(date.getMinutes()))
    } else if (PARAM == 'секунд'){
      return String(Number(until.getSeconds())-Number(date.getSeconds()))
    } else if (PARAM == 'MS'){
      return String(Number(until.getMilliseconds())-Number(date.getMilliseconds()))
    }
 }
  getToday({DATE}){
    let date = new Date()
    return String(date)
 }
    mixLettersTimes({TEXT,REPEAT,TIMES}){
    let res = ''
    if (REPEAT=='true'||REPEAT==true){
             function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
       }
      for (let i = 0;i<TIMES;i++){
        res += TEXT.charAt(random(0,TEXT.length-1))
      }
    } else {
      let unusedText = TEXT
      let num;
    function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
       }
            for (let i = 0;i<TIMES;i++){
              num = random(0,unusedText.length-1)
              res += unusedText.charAt(num)
              unusedText = unusedText.replace(unusedText.charAt(num),'')
      }
    }
return String(res)
  }
  mixLetters({TEXT,REPEAT}){
    let res = ''
    if (REPEAT=='true'||REPEAT==true){
             function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
       }
      for (let i = 0;i<TEXT.length;i++){
        res += TEXT.charAt(random(0,TEXT.length-1))
      }
    } else {
      let unusedText = TEXT
      let num;
    function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
       }
            for (let i = 0;i<TEXT.length;i++){
              num = random(0,unusedText.length-1)
              res += unusedText.charAt(num)
              unusedText = unusedText.replace(unusedText.charAt(num),'')
      }
    }
return String(res)
  }
    mixWordsTimes({TEXT,REPEAT,TIMES}){
    let res = ''
    let text = String(TEXT).split(' ')
    function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (REPEAT=='true'||REPEAT==true){
      for (let i = 0;i<TIMES;i++){
        res += String(text[Number(random(0,text.length-1))])+' '
      }
    } else {
      let unusedText = text.concat()
      let num
      for (let i = 0;i<TIMES;i++){
        num = Number(random(0,unusedText.length-1))
        res += String(unusedText[num])+' '
        unusedText = unusedText.splice(num,num)
      }
    }
    return String(res)
  }
  mixWords({TEXT,REPEAT}){
    let res = ''
    let text = String(TEXT).split(' ')
    function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    if (REPEAT=='true'||REPEAT==true){
      for (let i = 0;i<text.length;i++){
        res += String(text[Number(random(0,text.length-1))])+' '
      }
    } else {
      let unusedText = text.concat()
      let num
      for (let i = 0;i<text.length;i++){
        num = Number(random(0,unusedText.length-1))
        res += String(unusedText[num])+' '
        unusedText = unusedText.splice(num,num)
      }
    }
    return String(res)
  }

    getUniqueWords({TEXT}){
    let res = []
    let text = TEXT.split(' ')
    for (let i = 0;i<text.length;i++){
      if (res.includes(text[i])==false){
        res.push(text[i])
      }
    }
    return String(res)
  }
  getUniqueLetters({TEXT}){
    let res = []
    for (let i = 0;i<TEXT.length;i++){
      if (res.includes(TEXT.charAt(i))==false){
        res.push(TEXT.charAt(i))
      }
    }
    return String(res)
  }
    reverseText({TEXT}){
    let res = ''
    for (let i = TEXT.length;i>-1;i--){
      res += String(TEXT.charAt(i))
   }
    return String(res)
  }
  /*v0.0.2.3-full
  новые блоки:*/
  
  reverseArr({ARR}){
return String(globalThis[ARR].reverse())
  }
  reverseWords({TEXT}){
    let res = ''
    let text = TEXT.split(' ')
    for (let i = text.length;i>-1;i--){
      res += String(text[i])
   }
    return String(res)
  }
  copyToR({ARR1,ARR2}){
    try {
    return globalThis[ARR1].concat(globalThis[ARR2])
         } catch(e) {
       globalThis[ARR1].concat()
     }
  }
   copyTo({ARR1,ARR2}){
     try {
    globalThis[ARR1].concat(globalThis[ARR2])
     } catch(e) {
       globalThis[ARR1].concat()
     }
  }
  everyElem({ELEM,CON,ARR}){
   let res = `globalThis\[\'${ARR}\'\]\.every\(${ELEM} => ${CON}\)`
   return String(eval(res))
  }
    someElem({ELEM,CON,ARR}){
   let res = `globalThis\[\'${ARR}\'\]\.some\(${ELEM} => ${CON}\)`
   return String(eval(res))
  }
  fillArr({ARR,VAL}){
    return String(globalThis[ARR].fill(VAL))
  }
  fillArrFrom({ARR,VAL,POS1,POS2}){
    return String(globalThis[ARR].fill(VAL,POS1,POS2))
  }
  filterArr({ELEM,ARR,CON}){
   let res = `globalThis\[\'${ARR}\'\]\.filter\(${ELEM} => ${CON}\)`
    return String(eval(res))
  }
    forEachElemC({ELEM,ARR,FUNC}){
   let res = `globalThis\[\'${ARR}\'\]\.forEach\(${ELEM} => ${FUNC}\)`
       try {
     String(eval(res))
   } catch (e) {
     console.error(e)
   }
  }
  forEachElem({ELEM,ARR,FUNC}){
   let res = `globalThis\[\'${ARR}\'\]\.forEach\(${ELEM} => ${FUNC}\)`
      try {
     String(eval(res))
     return true
   } catch (e) {
     return e
   }
  }
  joinArr({ARR,SEP}){
    return String(globalThis[ARR].join(SEP))
  }
  newLine({TIMES}){
    let res = ''
    for (let i = 0;i<TIMES+1;i++){
      res+='\n'
    }
    return res
  }
  isFiniteNum({NUM}){
    return isFinite(NUM)
  }
  isNaNNum({NUM}){
    return isNaN(NUM)
  }
  
  bitwiseNot({ARG}){
    return String(~ARG)
  }
  bitwiseLS({NUM1,NUM2}){
    return String(NUM1<<NUM2)
  }
  bitwiseRS({NUM1,NUM2}){
    return String(NUM1>>NUM2)
  }
    bitwiseunSignedRS({NUM1,NUM2}){
    return String(NUM1>>>NUM2)
  }
  nullish({NUM1,NUM2}){
    return String(NUM1??NUM2)
  }
  replaceArr({ARR,TEXT}){
    return String(TEXT.replace(/(\w+|.)/g, (m,n) => (globalThis[ARR][n] || m)))
  }
  getMatrix({MAT}){
    return MAT
  }
    forEachElemM({ELEM,ARR,FUNC,ARR2}){
   let res = `globalThis\[\'${ARR}\'\]\.map\(${FUNC}\)`
      try {
     globalThis[ARR2] = eval(res)
     return true
     
   } catch (e) {
     return e
   }
  }
      forEachElemMC({ELEM,ARR,FUNC,ARR2}){
   let res = `globalThis\[\'${ARR}\'\]\.map\(${FUNC}\)`
      try {
     globalThis[ARR2] = eval(res)
      } catch (e) {
        console.error(e)
   }
  }
        getDir({DIRECT}){
return isNaN(Number(DIRECT)) ? 0 : Number(DIRECT)
  }
  Construct({CON,VAR,CODE}){
    let res = `globalThis['${VAR}'] = new ${CON}${CODE}`
    eval(res)
  }
    ConstructR({CON,VAR,CODE}){
    let res = `globalThis['${VAR}'] = new ${CON}${CODE}`
    return eval(res)
  }
    newClass({CLASS,CODE}){
    let res = `globalThis['${CLASS}'] = class ${CLASS}\{\}`
    eval(res)
  }
      newClassR({CLASS,CODE}){
    let res = `globalThis['${CLASS}'] = class ${CLASS}\{\}`
    return eval(res)
  }
  codeBase({PARAM,TEXT}){
    if (PARAM == 'в'){
    return String(btoa(TEXT))
    } else if (PARAM == 'из'){
    return String(atob(TEXT))
    } else {
      return undefined //чтобы жизнь мёдом не казалась
    }
  }
  getScreen({PARAM}){
    if (PARAM == 'ширина'){
    return screen.width
    } else if (PARAM == 'высота'){
    return screen.height
    } else if (PARAM == 'доступная ширина'){
    return screen.availWidth
    } else if (PARAM == 'доступная высота'){
    return screen.availHeight
    } else if (PARAM == 'первый доступный пиксель слева'){
    return screen.availLeft
    } else if (PARAM == 'угол ориентации документа'){
    return screen.orientation.angle
    } else if (PARAM == 'ориентация экрана'){
    return screen.orientation.type
    } else if (PARAM == 'ориентация экрана'){
    return screen.orientation.type
    }
  }
  isOnLine({PARAM}){
    return navigator.onLine
  }
    language({PARAM}){
    return navigator.language
  }
      cookieEnabled({PARAM}){
    return navigator.cookieEnabled
  }
      RAM({PARAM}){
    return navigator.deviceMemory
  }
      hardware({PARAM}){
    return navigator.hardwareConcurrency
  }
  buildID({PARAM}){
    return navigator.buildID
  }
  languageNum({NUM}){
    return navigator.languages[NUM]
  }
    languages({NUM}){
    return navigator.languages
  }
    platform({NUM}){
    return navigator.userAgentData.platform
  }
    userAgent({NUM}){
    return navigator.userAgent
  }
    vendor({NUM}){
    return navigator.vendor
  }
}
Scratch.extensions.register(new teandedScratch());
