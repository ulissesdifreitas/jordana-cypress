const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        moveFile({ fileName }) {
          const downloadsFolder = path.join(__dirname, 'cypress', 'downloads');
          const fixturesFolder = path.join(__dirname, 'cypress', 'fixtures');
    
          const sourcePath = path.join(downloadsFolder, fileName);
          const destinationPath = path.join(fixturesFolder, fileName);
    
          if (fs.existsSync(sourcePath)) {
            fs.renameSync(sourcePath, destinationPath);
            return { success: true };
          } else {
            return { success: false, message: 'Arquivo não encontrado' };
          }
        }
      });
    },
    },
  },
);
