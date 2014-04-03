(function( $ ){
    $.fn.slowclick = function(fire, ready, cancel, soft, delay){
        if(typeof delay == 'undefined'){ delay = 350 }
        $(this).on('mousedown', function(){
            var x = setTimeout(function(){
                $(this).off();
                $(that).off('mouseout mouseup', dud);
                if(ready){
                    ready()
                }
                var fireIt = function(){
                    $(this).off();
                    fire()
                }
                var cancelIt = function(){
                    $(this).off();
                    if(cancel){
                        cancel()
                    }
                }
                $(this).on('mouseup', fireIt);
                $(this).on('mouseout', cancelIt);
            }, delay);
            var dud = function(){
                if(soft){
                    soft();
                } else if(cancel){
                    cancel();
                }
                clearTimeout(x)
                $(that).off('mouseout mouseup', dud);
            }
            var that = this;
            $(that).on('mouseout mouseup', dud);
        });
    };
})( jQuery );
