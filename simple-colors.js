"use strict";

String.prototype.RGB = function (red, green, blue) {
    return `\u001b[38;2;${red};${green};${blue}m${this.toString()}\u001b[39m`;
};

String.prototype.fgRGB = function (red, green, blue) {
    return `\u001b[48;2;${red};${green};${blue}m${this.toString()}\u001b[49m`;
};


Object.defineProperty(String.prototype, "bold", {
    get: function () {
        return `\u001b[1m${this.toString()}\u001b[22m`;
    }
});


Object.defineProperty(String.prototype, "italic", {
    get: function () {
        return `\u001b[3m${this.toString()}\u001b[23m`;
    }
});


Object.defineProperty(String.prototype, "underline", {
    get: function () {
        return `\u001b[4m${this.toString()}\u001b[24m`;
    }
});


Object.defineProperty(String.prototype, "crossed", {
    get: function () {
        return `\u001b[9m${this.toString()}\u001b[29m`;
    }
});


Object.defineProperty(String.prototype, "reversedVideo", {
    get: function () {
        return `\u001b[7m${this.toString()}\u001b[27m`;
    }
});

module.exports.updateMarkup = (markup) => {
    for (let i in markup) {
        if (!markup.hasOwnProperty(i)) continue;
        Object.defineProperty(String.prototype, i, {
            get: function () {
                return markup[i](this);
            }
        });
    }
};