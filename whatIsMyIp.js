/**
 * Created by vincebloise on 5/11/16.
 */
exports.handler = function(event, context) {
    context.succeed(event.myip);
};