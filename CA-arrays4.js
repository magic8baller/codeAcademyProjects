let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);//24
secretMessage.pop();
console.log(secretMessage.length); //23
secretMessage.push('to', 'Program');

console.log(secretMessage.lastIndexOf('easily')); //7
secretMessage[7] = 'right'; //reassign index 7

secretMessage.shift();//remove 'Learn'
secretMessage.unshift('Programming');//add Programming to beginning

console.log(secretMessage.lastIndexOf('get'));
secretMessage.slice(6, 5, 'know,');
//remove the 5 strings from 'get', replace with 'know,' 

console.log(secretMessage.join(' '));

/*on 1 Line: join array to form one string 'sentence' using .join()
needed to include the space within () as a parameter instead of default ",". can also join and sep. w/ ".", "/", "+", "-"....*/


//output: Programming is not about what you get right the first time, it is about what you can figure out. -2015, Chris Pine, Learn to Program
