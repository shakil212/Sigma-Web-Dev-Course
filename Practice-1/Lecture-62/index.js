let adjectives = ['happy', 'sad', 'angry', 'excited'];
let shopName = ['cat', 'dog', 'bird', 'fish']; 
let Anotherword = ['jumps', 'runs', 'flies', 'swims'];

let combinations = [];

adjectives = 'happy sad angry excited';
shopName = 'cat dog bird fish';
Anotherword = 'jumps runs flies swims';

combinations = '';

let i = 0;
let adj = '', shop = '', word = '';
while (i < adjectives.length) {
    if (adjectives[i] === ' ' || i === adjectives.length - 1) {
        if (i === adjectives.length - 1) adj += adjectives[i];
        shop = shopName.split(' ')[combinations.split('\n').length];
        word = Anotherword.split(' ')[combinations.split('\n').length];
        combinations += adj + ' ' + shop + ' ' + word + '\n';
        adj = '';
    } else {
        adj += adjectives[i];
    }
    i++;
}

console.log(combinations.trim());