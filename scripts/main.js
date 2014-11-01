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
            },
            game : {
                self :
                {
                    h : $("#dollar"),
                },
                _control_up : function(){
                    var cur_y = funs.game.self.h.css('top').split('px')[0];
                    var cur_x = funs.game.self.h.css('left').split('px')[0];

                    funs.debug._onScreen( "Pos : " + cur_x + ", " + cur_y );
                },
                _control_down : function(){  },
                _start : function(){},
                _stop : function(){},
                _anim : {
                    _self_normal : function(){
                        var self = $("#dollar");
                        TweenMax.moveTo();
                    },
                }
            },
            debug : {
                _console : function( msg ){
                    console.log(msg);
                },
                _onScreen : function( msg ){
                    $('<div class="log_msg" >'+msg+'</div>').appendTo($('#console_board'));
                    funs.debug._console(msg);
                }
            }
        };

        funs.initPage();
        funs.game._control_up();
    });

});
