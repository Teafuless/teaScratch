class teandedScratch {
  getInfo() {
    return {
      id: 'teanded',
      color1: '#8DC286',
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
        },
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
          text: 'получить направление позиции X: [X], Y: [Y] с симуляцией позиции X: [XX], Y: [YY]',
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
          blockType: Scratch.BlockType.REPORTER,
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
          blockType: Scratch.BlockType.REPORTER,
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
          blockType: Scratch.BlockType.REPORTER,
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
          blockType: Scratch.BlockType.REPORTER,
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
                  type: Scratch.ArgumentType.STRING
              }
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
          text: 'Функции',
        },
           {
          opcode: 'newFunc',
          blockType: Scratch.BlockType.COMMAND,
          text: 'создать функцию [NAME], с аргументами [ARGS], с кодом [CODE]',
          arguments: {
              NAME: {
                  type: Scratch.ArgumentType.STRING,
                defaultValue: 'tea'
              },
             ARGS: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue:'text'
              },
              CODE: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: 'return text'
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
                defaultValue: 'tea'
              },
             ARGS: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: '\'привет\''
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
                defaultValue: 'tea'
              },
             ARGS: {
                  type: Scratch.ArgumentType.STRING,
               defaultValue: '\'привет\''
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
        },/*
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
                  type: Scratch.ArgumentType.BOOLEAN
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
                  type: Scratch.ArgumentType.BOOLEAN
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
        },*/
        
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
        },
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
          opcode: 'playSoundWU',
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
        },
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
        },
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
        },
                 {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Ссылки',
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
          text: 'цвет [COLOR]',
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
          text: 'Указатель мыши',
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
        
      ],
      menus: {
        teaMenu: {
            items: ['teaful','tealess','teafuless']
        },
        
        varsMenu: {
            items: ['consoleErr']
        },
        charSet: {
        items: ['QWERTY','ЙЦУКЕН','0123456789']
        },
          tab:{
          items: ['этой','новой']
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
    return globalThis[NAME].indexOf([VALUE])
  }
    lastIndexOfObj({NAME,VALUE}){
    return globalThis[NAME].lastIndexOf([VALUE])
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
    try {
    CODE
} catch(error) {
  globalThis.consoleErr = String(error)
console.error(error)
}
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
    globalThis['CHAR_SET'] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    } else if (CHAR = 'ЙЦУКЕН'){
      globalThis['CHAR_SET'] = 'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮйцукенгшщзхъфывапролджэячсмитьбюёЁ0123456789'
    } else if (CHAR = '0123456789'){
       globalThis['CHAR_SET'] = '0123456789'
    }
function generateString(length) {
    let result = ' ';
 
    const charactersLength = globalThis['CHAR_SET'].length;
  
    for ( let i = 0; i < length; i++ ) {
        result += globalThis['CHAR_SET'].charAt(Math.floor(Math.random() * charactersLength));
    }

  return result;
}
    
  return generateString(LEN)
  }
  newFunc({NAME,ARGS,CODE}){
    function gen(n,c,a){
  let r = '';
  r = `function ${n}\(${a}\)\{
${c};
\}`
  return r;
};
globalThis[NAME+'func'] = `gen(${NAME},${CODE},${ARGS})`;
eval(globalThis[NAME+'func']);
  }
  execFunc({NAME,ARGS}){
        function gen(n,c,a){
  let r = '';
  r = `function ${n}\(${a}\)\{
${c};
\}`
  return r;
};
    function exec(n,a){
  let r
r = `${n}\(${a}\)`
  eval(r)
}
eval(globalThis[NAME+'func'])
   exec(NAME,ARGS)
  }
  execFuncRep({NAME,ARGS}){
    function exec(n,a){
  let r
r = `${n}\(${a}\)`
  eval(r)
}
 eval(globalThis[NAME+'func'])
   return exec(NAME,ARGS)
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
  }/*
  forC({CON,STEP,START,CODE}){
let res = `for \(${START}\;${CON}\;${STEP}\)\{${CODE}\}`
eval(res)
  }
    forCR({CON,STEP,START,CODE}){
let res = `for \(${START}\;${CON}\;${STEP}\)\{\n${CODE}\n\}`
return eval(res)
  }*/
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
    var sound = new Audio
    sound.src = String(URL)
    sound.volume = globalThis['VOLUME']
    sound.play()
  }
  changeVolume({VOL}){
    globalThis['VOLUME'] += Number(VOL)/100
  }
  setVolume({VOL}){
    globalThis['VOLUME'] = Number(VOL)/100
  }
  stopSounds({LOL}){
    sound.pause();
    sound.currentTime = 0;
  }
  gotoSound({GOTO}){
    sound.currentTime = GOTO
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
         sleep(globalThis[NAME].duration*1000)
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
    globalThis[NAME].stop()
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
     sleep(globalThis['sound'].duration*1000)
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
}
Scratch.extensions.register(new teandedScratch());
//
