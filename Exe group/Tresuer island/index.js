console.log(`Welcome to Treasure island!
You are now going for a treasure hunt. 
Your mission is to find your way to the treasure. 
Choose your options wisely or you will end up DEAD `);
let leftOrright = prompt(`You are in the middle of a forest, and there are 2 ways, LEFT or RIGHT
Which way to want to choose? `).toLowerCase();
if (leftOrright === "right"){
    console.log(`Woop, Woop I can see a lake from here 
    After walking for 10 min, you reached the lake `);
    let swimORwait = prompt(`what would you like to do? 'SWIM' or 'WAIT' for a boat?
If you choose to SWIM you will reach the other side faster because the boat will depart after 2 hours `).toLowerCase();
    if (swimORwait === "wait"){
        console.log(`This boat is incredible,
I can see a castle, I must be close to the treasure.
           _~
        _~ )_)_~
        )_))_))_)
        _!__!__!_
        \______t/
      ~~~~~~~~~~~~~`);
        console.log( `                                |--__
                                 |
                                 X
                        |-___   / \       |--__
                        |      =====      |
                        X      | .:|      X
                       / \     | O |     / \
                      =====   |:  . |   =====
                      |.: |__| .   : |__| :.|
                      |  :|. :  ...   : |.  |
              __   __W| .    .  ||| .      :|W__  --
            -- __  W  WWWW______"""______WWWW   W -----  --
        -  -     ___  ---    ____     ____----       --__  -
            --__    --    --__     -___        __-   _`)
        let chooseDoor = prompt("The castle have 3 door which one would you like to choose? 'RED', 'BLUE', or 'YELLOW").toLowerCase();
        if (chooseDoor === "red"){
            console.log(`AHHHHHHHHHHHHHHHHHHHHHH 
You were burned by fire 
REST IN PEACE, GAME OVER
            (  .      )
            )           (              )
                  .  '   .   '  .  '  .
         (    , )       (.   )  (   ',    )
          .' ) ( . )    ,  ( ,     )   ( .
       ). , ( .   (  ) ( , ')  .' (  ,    )
      (_,) . ), ) _) _,')  (, ) '. )  ,. (' )
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`);
        }else if (chooseDoor == "blue"){
            console.log(`
            (    )
           ((((()))
           |o\ /o)|
           ( (  _')
            (._.  /\__
           ,\___,/ '  ')
'.,_,,       (  .- .   .    )
\   \\     ( '        )(    )
\   \\    \.  _.__ ____( .  |
\  /\\   .(   .'  /\  '.  )
 \(  \\.-' ( /    \/    \)
  '  ()) _'.-|/\/\/\/\/\|
      '\\ .( |\/\/\/\/\/|
        '((  \    /\    /
        ((((  '.__\/__.')
         ((,) /   ((()   )
          "..-,  (()("   /
           _//.   ((() ."
   _____ //,/" ___ ((( ', ___
                    ((  )
                     / /
                   _/,/'
                 /,/,"
You have entered a room full of beasts, you fought them and killed many but sadly, 
they were too many and you couldn't escape and you ended up dead `);
        }else if (chooseDoor === "yellow"){
            console.log(`You see a bright light at the end of the room, you started walking carefully,
            the light is getting bigger and bigger, OMG is that diamond!!! 
            Hell yea I found it IIIIIII FOOOOOOUND IT
         __________________
      .-'  \ _.-''-._ /  '-.
    .-/\   .'.      .'.   /\-.
   _'/  \.'   '.  .'   './  \'_
  :======:======::======:======:  
   '. '.  \     ''     /  .' .'
     '. .  \   :  :   /  . .'
       '.'  \  '  '  /  '.'
         ':  \:    :/  :'
           '. \    / .'
             '.\  /.'     
               '\/`);
        }else{
            console.log("WRONG CHOICE THE GUARDS KICKED YOU OUT OF THE CASTLE , GAME OVER!");
        }

    }else {
        console.log(`OMG nooooooooo, 
          
        .-._   _ _ _ _ _ _ _ _
.-''-.__.-'00  '-' ' ' ' ' ' ' ' '-.
'.___ '    .   .--_'-' '-' '-' _'-' '._
V: V 'vv-'   '_   '.       .'  _..' '.'.
'=.____.=_.--'   :_.__.__:_   '.   : :
        (((____.-'        '-.  /   : :
                          (((-'\ .' /
                        _____..'  .'
                       '-._____.-' 
Rest In Peace, GAME OVER`);
    }
}else{
    console.log(`You faced the Dead Rabbits mafia, 
    you were so brave defending yourself but, 
    unfortunately, you could not take all the heat, 
    RIP, GAME OVER
                 o_-* BANG!  0
                 |          /|
                 |\       '/ `) ;
}
