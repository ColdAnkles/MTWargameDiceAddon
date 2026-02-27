"use strict";

function create_campaign_macros() {
    let GMMacros = [{ "label": "<b>Roll 1</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.roll_dice_array(1)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "a" },
    { "label": "<b>Roll 2</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.roll_dice_array(2)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "a" },
    { "label": "<b>Roll 3</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.roll_dice_array(3)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "a" },
    { "label": "<b>Roll 4</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.roll_dice_array(4)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "a" },
    { "label": "<b>Roll 5</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.roll_dice_array(5)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "a" },
    { "label": "<b>Roll 6</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.roll_dice_array(6)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "a" },
    { "label": "<b>Roll 7</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.roll_dice_array(7)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "a" },
    { "label": "<b>Roll 8</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.roll_dice_array(8)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "a" },
    { "label": "<b>Roll 9</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.roll_dice_array(9)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "a" },
    { "label": "<b>Roll 10</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.roll_dice_array(10)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "a" },
    { "label": "<b>Roll 11</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.roll_dice_array(11)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "a" },
    { "label": "<b>Roll 12</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.roll_dice_array(12)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "a" },
    { "label": "<b>Clear Dice</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.clear_dice_array()]", "tooltip": "Removes all Dice", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "b" },
    { "label": "<b>Remove 1s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.remove_dice(1)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "c" },
    { "label": "<b>Remove 2s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.remove_dice(2)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "c" },
    { "label": "<b>Remove 3s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.remove_dice(3)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "c" },
    { "label": "<b>Remove 4s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.remove_dice(4)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "c" },
    { "label": "<b>Remove 5s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.remove_dice(5)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "c" },
    { "label": "<b>Remove 6s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.remove_dice(6)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "c" },
    { "label": "<b>Keep 2+</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.keep_dice(2)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "d" },
    { "label": "<b>Keep 3+</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.keep_dice(3)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "d" },
    { "label": "<b>Keep 4+</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.keep_dice(4)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "d" },
    { "label": "<b>Keep 5+</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.keep_dice(5)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "d" },
    { "label": "<b>Keep 6+</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.keep_dice(6)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "d" },
    { "label": "<b>Reroll 1s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.reroll_dice(1)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "e" },
    { "label": "<b>Reroll 2s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.reroll_dice(2)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "e" },
    { "label": "<b>Reroll 3s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.reroll_dice(3)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "e" },
    { "label": "<b>Reroll 4s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.reroll_dice(4)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "e" },
    { "label": "<b>Reroll 5s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.reroll_dice(5)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "e" },
    { "label": "<b>Reroll 6s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.reroll_dice(6)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "e" },
    { "label": "<b>Explode 1s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.explode_dice(1)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "f" },
    { "label": "<b>Explode 2s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.explode_dice(2)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "f" },
    { "label": "<b>Explode 3s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.explode_dice(3)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "f" },
    { "label": "<b>Explode 4s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.explode_dice(4)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "f" },
    { "label": "<b>Explode 5s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.explode_dice(5)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "f" },
    { "label": "<b>Explode 6s</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.explode_dice(6)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "f" },
    { "label": "<b>Undo Dice</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.undo_dice()]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "Dice", "sortBy": "g" }
    ];
    for (var m in GMMacros) {
        createMacro(GMMacros[m], "campaign");
    }
}

MTScript.registerMacro("ca.wgd.create_campaign_macros", create_campaign_macros);
