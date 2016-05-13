/**
 * Created by vincebloise on 5/12/16.
 */
console.log('loading function');
exports.handler = function(event, context) {
    console.log('Received event', JSON.stringify(event, null, 2));
    console.log('name =', event.name);
    console.log('greeting: ', event.greet);
    var name = '';
    var greeting = '';
    if ('name' in event) {
        name = event['name'];
    } else {
        name = 'Worlds!';
    }
    if ('greet' in event) {
        greeting = event['greet'];
    } else {
        greeting = 'Hello';
    }
    var greetings = greeting + ', ' + name + '!';
    console.log(greetings);
    context.succeed(greetings);
};