class teandedScratch {
  
  getInfo() {
    return {
      
      id: 'teadev',
      color1: '#CDBBD2',
menuIconURI: 'https://ghcdn.rawgit.org/Teafuless/teaScratch/main/favicon.png',
 blockIconURI: 'https://ghcdn.rawgit.org/Teafuless/teaScratch/main/favicon.png',
      name: 'Teadev ',
      blocks: [
   
        {
          opcode: 'hideSprite',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Скрыть спрайт',
          arguments: {
        }
        },
        {
          opcode: 'getRotationStyleOfSprite',
          blockType: Scratch.BlockType.REPORTER,
          text: 'вид направления спрайта',
          arguments: {
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
  hideSprite() {
 Blockly.Blocks['looks_hide']
  }
  getRotationStyleOfSprite(_, util) {     
    return util.target.rotationStyle || ''; 
  }
}
Scratch.extensions.register(new teandedScratch());
