"use strict";

function create_gm_macros() {
    let GMMacros = [{ "label": "<b>Roll 10d6</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.roll_dice_array(10)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "1. Basic" },
    { "label": "<b>Clear Dice</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.clear_dice_array()]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "1. Basic" },
    { "label": "<b>1</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.remove_dice(1)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "2. Remove Dice" },
    { "label": "<b>2</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.remove_dice(2)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "2. Remove Dice" },
    { "label": "<b>3</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.remove_dice(3)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "2. Remove Dice" },
    { "label": "<b>4</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.remove_dice(4)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "2. Remove Dice" },
    { "label": "<b>5</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.remove_dice(5)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "2. Remove Dice" },
    { "label": "<b>6</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.remove_dice(6)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "2. Remove Dice" },
    { "label": "<b>2+</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.keep_dice(2)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "3. Keep Dice" },
    { "label": "<b>3+</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.keep_dice(3)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "3. Keep Dice" },
    { "label": "<b>4+</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.keep_dice(4)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "3. Keep Dice" },
    { "label": "<b>5+</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.keep_dice(5)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "3. Keep Dice" },
    { "label": "<b>6+</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.keep_dice(6)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "3. Keep Dice" },
    { "label": "<b>1</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.reroll_dice(1)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "4. Reroll Dice" },
    { "label": "<b>2</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.reroll_dice(2)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "4. Reroll Dice" },
    { "label": "<b>3</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.reroll_dice(3)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "4. Reroll Dice" },
    { "label": "<b>4</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.reroll_dice(4)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "4. Reroll Dice" },
    { "label": "<b>5</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.reroll_dice(5)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "4. Reroll Dice" },
    { "label": "<b>6</b>", "playerEditable": 0, "command": "[h: js.ca.wgd.reroll_dice(6)]", "tooltip": "", "color": "black", "fontColor": "white", "fontSize": "1.25em", "group": "4. Reroll Dice" }
    ];
    for (var m in GMMacros) {
        createMacro(GMMacros[m], "gm");
    }
}

MTScript.registerMacro("ca.wgd.create_gm_macros", create_gm_macros);
