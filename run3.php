<?php
exec("gpio mode 3 out");
exec("gpio toggle 3");
echo (exec("gpio read 3"));
?>