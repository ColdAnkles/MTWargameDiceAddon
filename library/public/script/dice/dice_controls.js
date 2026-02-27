"use strict";

function roll_dice_array(dieCount) {
    let diceArray = [];
    for (var i = 0; i < dieCount; i++) {
        diceArray.push(roll_dice("1d6"));
    }

    let diceList = JSON.parse(read_data("diceArray"));
    write_data("prevDiceArray", JSON.stringify(diceList));
    write_data("diceArray", JSON.stringify(diceArray));
    MTScript.evalMacro("[h: ca.wgd.updateUI()]");
}

MTScript.registerMacro("ca.wgd.roll_dice_array", roll_dice_array);

function clear_dice_array() {
    let diceList = read_data("diceArray");
    write_data("prevDiceArray", diceList);
    write_data("diceArray", JSON.stringify([]));
    write_data("animArray", JSON.stringify([]));
    MTScript.evalMacro("[h: ca.wgd.updateUI()]");
}

MTScript.registerMacro("ca.wgd.clear_dice_array", clear_dice_array);

function remove_dice(removeVal) {
    let diceList = JSON.parse(read_data("diceArray"));
    write_data("prevDiceArray", JSON.stringify(diceList));
    let newList = [];
    let animArray = []
    for (var d in diceList) {
        if (diceList[d] != removeVal) {
            newList.push(diceList[d]);
            animArray.push(false);
        }
    }
    write_data("diceArray", JSON.stringify(newList));
    write_data("animArray", JSON.stringify(animArray));
    MTScript.evalMacro("[h: ca.wgd.updateUI()]");
}

MTScript.registerMacro("ca.wgd.remove_dice", remove_dice);

function keep_dice(keepVal) {
    let diceList = JSON.parse(read_data("diceArray"));
    write_data("prevDiceArray", JSON.stringify(diceList));
    let newList = [];
    let animArray = []
    for (var d in diceList) {
        if (diceList[d] >= keepVal) {
            newList.push(diceList[d]);
            animArray.push(false);
        }
    }
    write_data("diceArray", JSON.stringify(newList));
    write_data("animArray", JSON.stringify(animArray));
    MTScript.evalMacro("[h: ca.wgd.updateUI()]");
}

MTScript.registerMacro("ca.wgd.keep_dice", keep_dice);

function reroll_dice(rerollVal) {
    let diceList = JSON.parse(read_data("diceArray"));
    write_data("prevDiceArray", JSON.stringify(diceList));
    let newList = [];
    let animArray = []
    for (var d in diceList) {
        if (diceList[d] == rerollVal) {
            newList.push(roll_dice("1d6"));
            animArray.push(true);
        } else {
            newList.push(diceList[d]);
            animArray.push(false);
        }
    }
    write_data("diceArray", JSON.stringify(newList));
    write_data("animArray", JSON.stringify(animArray));
    MTScript.evalMacro("[h: ca.wgd.updateUI()]");
}

MTScript.registerMacro("ca.wgd.reroll_dice", reroll_dice);

function explode_dice(diceNum) {
    let diceList = JSON.parse(read_data("diceArray"));
    write_data("prevDiceArray", JSON.stringify(diceList));
    let newList = [];
    let animArray = []
    let newDice = 0;
    for (var d in diceList) {
        if (diceList[d] == diceNum) {
            newDice++;
        }
        newList.push(diceList[d]);
        animArray.push(false);
    }
    for (var i = 0; i < newDice; i++) {
        newList.push(roll_dice("1d6"));
        animArray.push(true);
    }
    write_data("diceArray", JSON.stringify(newList));
    write_data("animArray", JSON.stringify(animArray));
    MTScript.evalMacro("[h: ca.wgd.updateUI()]");
}

MTScript.registerMacro("ca.wgd.explode_dice", explode_dice);

function undo_dice() {
    let diceList = JSON.parse(read_data("prevDiceArray"));
    let animArray = [];
    try {
        write_data("diceArray", JSON.stringify(diceList));
        for (var d in diceList) {
            animArray.push(false);
        }
        write_data("animArray", JSON.stringify(animArray));
        MTScript.evalMacro("[h: ca.wgd.updateUI()]");
    } catch (e) {
        MapTool.chat.broadcast("Error in undo_dice");
        MapTool.chat.broadcast("diceList: " + JSON.stringify(diceList));
        MapTool.chat.broadcast("animArray: " + JSON.stringify(animArray));
        MapTool.chat.broadcast("" + e + "\n" + e.stack);
    }
}

MTScript.registerMacro("ca.wgd.undo_dice", undo_dice);