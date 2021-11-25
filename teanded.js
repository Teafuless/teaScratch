class teandedScratch {
    getInfo() {
      return {
        id: 'teanded',
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
            opcode: 'getPosDirection',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Получить направление позиции X: [X], Y: [Y] с симуляцией позиции X: [XX], Y: [YY]',
            arguments: {
              X: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '0'
              },
              Y: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '0'
              },
              XX: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '50'
              },
              YY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '50'
              }
            }
          }
        ]
      };
    }
    turnInToTea({TEXT}) {
      return TEXT+" - чай"
    }
    getPosDirection({X,Y,XX,YY}){
        let xr = X - XX
        let yr = Y - YY
        let res = (yr < 0) ? 1 : 0
        let ress = res * 180
        let res2 = Math.atan(xr/yr)
        return res2 + ress
    }
  }
Scratch.extensions.register(new teandedScratch());
//i
