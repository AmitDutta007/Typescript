"use strict";
function isLegal(age) {
    if (age > 18) {
        console.log('true');
        return true;
    }
    else {
        console.log('false');
        return false;
    }
}
isLegal(20);
