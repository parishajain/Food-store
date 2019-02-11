<?php
 header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

echo '<response>';
    $food = $_GET['food'];
     $foodArray = array('cookie','icecreams','fruits','milkshakes','cakes');
     if(in_array($food,$foodArray))
         echo 'We do have '.$food.'!';
     elseif($food=='')
         echo 'Enter a food you would like to buy';
    else
        echo 'We dont see  '.$food.'!';
echo '</response>';
?>