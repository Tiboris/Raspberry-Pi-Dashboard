<?php
exec("gpio mode 7 out");
exec("gpio toggle 7");
echo (exec("gpio read 7"));
?>