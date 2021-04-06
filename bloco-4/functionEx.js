function checkPalindrome(str) {
    const len = str.length;

    for (let i = 0; i < len / 2; i++) {

        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


console.log(checkPalindrome('reviver'))



    



/*let palindromo;

    for (let index = palavra.lenght; index >= 0; index -= 1){
        palindromo = palavra[index];
    }*/