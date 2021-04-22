// ███████╗███████╗███████╗███████╗        ██╗███████╗
// ██╔════╝╚══███╔╝██╔════╝██╔════╝        ██║██╔════╝
// █████╗    ███╔╝ █████╗  █████╗          ██║███████╗
// ██╔══╝   ███╔╝  ██╔══╝  ██╔══╝     ██   ██║╚════██║
// ███████╗███████╗███████╗███████╗██╗╚█████╔╝███████║
// ╚══════╝╚══════╝╚══════╝╚══════╝╚═╝ ╚════╝ ╚══════╝

const version = "ALPHA 0.0.1"
 
/**
 * EZEE.JS START
 */

const e = {
  date: () => {
    return Date();
  },
  round: (round) => {
    console.log(Math.round(round));
  },
  credits: () => {
    console.log('Created by MuffinScripting with the help of Hri7566.');
  },
  version: () => {
    console.log('Current version of EZEE.JS: ' + version)
  },
  console: {
    warn: (str) => {
      console.warn(str);
    },
    log: (str) => {
      console.log(str);
    },
    error: (str) => {
      console.error(str);
    }
  }
}

/**
 * EZEE.JS END
 */

//autocredit on insert//
e.credits();


