slowclick
=========

jQuery plugin to react to slow click (click and hold)

The idea is to reduce the chance of accidentally clicking buttons with sensitive actions behind them. This works by delaying the action until a delay has passed.

This plugin can be used instead of a confirm dialog, for example on delete actions, which can be obtrusive for the user, but should not be used where confirmation is critical.

Usage:

    $('#btn').slowclick(function(){
        // will only alert if click is held for 350 ms
        alert('you really clicked that button!');
    });
    
... demo here: http://jsfiddle.net/billymoon/wVA8X/

If you want to handle state, there are callbacks to handle cancel and ready states...

Assuming some HTML like this (and Twitter Bootstrap CSS framework)

    <button id="btn" class="btn btn-default"><i class="glyphicon glyphicon-minus-sign"></i> delete something</button>
    <br><br>
    <div id="info" class="alert alert-info hidden">Press it like you mean it ;-)</div>
    <div id="success" class="alert alert-success hidden">You nailed it!</div>

You can handle states in callbacks for `fire`, `ready`, and `cancel` like this...

    $('#btn').slowclick(function(){
        
        // on slowclick, reset the button class
        $('#btn').removeClass('btn-danger')
        
        // hide the info, and show the success
        $('#info').addClass('hidden')
        $('#success').removeClass('hidden')
    
    }, function(){
    
        // on ready state, set button danger
        $('#btn').addClass('btn-danger')
        
        // hide success (so it can be shown again on slowclick)
        $('#success').addClass('hidden')
    
    }, function(){
        
        // on cancel or soft, reset button
        $('#btn').removeClass('btn-danger')
        
        // show info, and hide success
        $('#info').removeClass('hidden')
        $('#success').addClass('hidden')
    
    })
    
... demo available here: http://jsfiddle.net/billymoon/wVA8X/1/

Just try clicking quickly, and slowly, and dragging the cursor off the button after starting to click.

Enjoy ,~)
