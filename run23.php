<?php
exec("gpio mode 23 out");
exec("gpio toggle 23");
echo (exec("gpio read 23"));
?>