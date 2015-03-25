/*!
 * mConsole Demo (mConsole) v1.0.0
 * Author: Wenderson Pires | @wpdas
 * Copyright (c) 2015
 * Licensed under MIT
 */

window.onload = function(){

    //Start mobile console and pass height (optional) per parameter.
    //$mConsole.init(250);
    $mConsole.init();

    //Execute console
    console.log($mConsole.version);
    console.log("My log");
    console.warn("My warning");
    console.info("My info");
    console.debug("My debug");

    //Proposital error
    myErrorVar;
};