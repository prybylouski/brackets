module.exports = function check(str, bracketsConfig) {
    let arrayToStr = str.split("");

    for (let i = 0; i < bracketsConfig.length; i++) {
        let firstConfig = bracketsConfig[i][0],
            secondConfig = bracketsConfig[i][1];

        for (let m = 0; m < str.length; m++) {
            if (
                arrayToStr[m] == firstConfig &&
                arrayToStr[m + 1] == secondConfig
            ) {
                arrayToStr.splice(m, 2);
                i = -1;
                m = -1;
            }
        }
    }
    if (arrayToStr == 0) {
        return true;
    } else {
        return false;
    }
};
