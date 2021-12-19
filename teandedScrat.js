let teaCode = require('./tea.js')
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
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        
       
        {
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Сообщения',
        },
         {
          opcode: 'sendMsgVar',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Отправить сообщение [MSG] спрайтам со значением [VALUE] переменной [VAR]',
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
          text: 'Отправить сообщение [MSG]',
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
          text: 'Получено сообщение [MSG]?',
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
          text: 'Получено сообщение [MSG] со значением [VALUE] переменной [VAR]?',
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
          text: 'Когда я получу сообщение [MSG]',
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
          text: 'Когда я получу сообщение [MSG] со значением [VALUE] переменной [VAR]',
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
          opcode: 'changeVar',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Изменить переменной [NAME] значение на [VALUE]',
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
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Текстовые манипуляции',
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
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Математические действия',
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
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Части текста',
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
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'JavaScript',
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
          opcode: 'joinsum',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Сложить строки [STRING1] и [STRING2]',
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
          text: 'Добавить [VALUE] к переменной [VAR]',
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
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Карты ключей',
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
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: 'Превратить текст \-',
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
          opcode: 'test',
          blockType: Scratch.BlockType.BUTTON,
          text: '\-',
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
          text: 'Получить [PROCENT]% от числа [NUMBER1]',
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
          text: 'Сколько процентов число [NUMBER1] составляет от [NUMBER2]',
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
          text: 'Попробовать выполнить [CODE], записать ошибку в переменную [VARS]',
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
          text: 'Попробовать выполнить [CODE], записать ошибку в переменную [VARS]',
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
          opcode: 'alertt',
          blockType: Scratch.BlockType.COMMAND,
          text: 'alert([TEXT])',
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
          text: 'Случайная строка с набором символов [CHAR] длиной в [LEN] символов.',
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
          text: 'Создать функцию [NAME], с аргументами [ARGS], с кодом [CODE]',
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
          text: 'Выполнить функцию [NAME], с аргументами [ARGS]',
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
          text: 'Выполнить функцию [NAME], с аргументами [ARGS]',
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
    return CODE
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
  alert({TEXT}){
    alert(String(TEXT))
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
globalThis[NAME+'func'] = gen(NAME,CODE,ARGS);
eval(globalThis[NAME+'func']);
  }
  execFunc({NAME,ARGS}){
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
return eval(CODE.replace(/(\w+|.)/g, (m,n) => (teaCode.Code[n] || m)))
} catch (e) {return e}
   /*end*/
  }
}
Scratch.extensions.register(new teandedScratch());
