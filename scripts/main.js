// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        helper: 'helper',
        libs: '../libs',
        rsc: '../rsc'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['libs/jquery-1.9.1.min', 'libs/TweenMax.min','main'], function(util) {

    $(document).ready(function(){
        var funs = {
            initPage : function(){
                var msg = "doing initial .....";
                    funs.debug._onScreen(msg);
            }
            ,
            debug : {
                _console : function( msg ){
                    console.log(msg);
                }
                ,
                _onScreen : function( msg ){
                    $('<div class="log_msg" >'+msg+'</div>').appendTo($('#console_board'));
                    funs.debug._console(msg);
                }
            }
        };
        funs.initPage();
    });

});
