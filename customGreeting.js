/**
 * Created by vincebloise on 5/4/16.
 */
console.log('loading function');
exports.handler = function(event, context) {
    console.log('Received event', JSON.stringify(event, null, 2));
    console.log('name =', event.name);
    console.log('greeting: ', event.greeting);
    var name = '';
    var greeting = '';
    if ('name' in event) {
        name = event['name'];
    } else {
        name = 'World';
    }
    if ('greeting' in event) {
        greeting = event['greeting'];
    } else {
        greeting = 'Hello';
    }
    var greetings = greeting + ', ' + name + '!';
    console.log(greetings);
    context.succeed(greetings);
};