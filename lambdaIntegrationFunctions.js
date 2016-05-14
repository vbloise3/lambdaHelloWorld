/**
 * Created by vincebloise on 5/14/16.
 */
//Integration Request
/*#set($greet = $input.params('greet'))
#set($name = $input.params('username'))
{
#if($greet != "")
    "greet": "$greet"
            #if($name != "")
    ,
            #end
        #end
        #if($name != "")
    "name": "$name"
        #end
}*/

//Integration Response
/*{ "greeting": "$input.path('$')" }*/