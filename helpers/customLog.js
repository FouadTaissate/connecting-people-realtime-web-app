import chalk from "chalk";

const connect = (userID) => {
  console.log(`${chalk.bgGreen.black(" + ")}${chalk.bgYellowBright.black(" " + userID + " ")}${chalk.bgGreen.black(" Connected ")}`);
};

const disconnect = (userID) => {
  console.log(`${chalk.bgRedBright.black(" - ")}${chalk.bgYellowBright.black(" " + userID + " ")}${chalk.bgRedBright.black(" Disconnected ")}`);
}

const page = (userID, page) => {
  console.log(`${chalk.bgCyanBright.black(" > ")}${chalk.bgYellowBright.black(" " + userID + " ")}${chalk.bgCyanBright.black(" is now viewing page ")}${chalk.bgYellowBright.black(" " + page + " ")}`);
};

export {connect, disconnect, page};