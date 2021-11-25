class turnTea {
    getInfo() {
      return {
        id: 'turnintotea',
        name: 'Turn In To Tea',
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
          }
        ]
      };
    }
    turnTea(args) {
      return args.TEXT+" - чай"
    }
  }
  Scratch.extensions.register(new turnTea());
