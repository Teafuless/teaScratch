class teandedScratch {
  
  getInfo() {
    return {
      
      id: 'teadev',
      color1: '#FBDC32',
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
      }
      ],
      menus: {
        teaMenu: {
            items: ['teaful','tealess','teafuless']
        }
    }
    };
  }
  hideSprite (){
    this.visible = false;
  }
}
Scratch.extensions.register(new teandedScratch());
