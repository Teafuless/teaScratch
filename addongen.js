class TeafulAddonGenerator {     getInfo() {       return {         id: 'myaddon',         color1: '#FDFBDD',    menuIconURI: 'https://raw.githack.com/Teafuless/teaScratch/main/favico.png',    blockIconURI: 'https://raw.githack.com/Teafuless/teaScratch/main/favico.png',         name: 'Test',         blocks: [                 {             opcode: 'myblock',             blockType: Scratch.BlockType.REPORTER,             text: 'тест [Tea]',             arguments: {Tea: { type: Scratch.ArgumentType.STRING, defaultValue: "tea"                },  /*BLOCKARGS*/}           }         ]     }; }         myblock({Tea}){ return "Чай: "+Tea;         };         /*TEXT: {                 type: Scratch.ArgumentType.STRING,                 defaultValue: 'Teaful'               }*/   };   Scratch.extensions.register(new TeafulAddonGenerator());
