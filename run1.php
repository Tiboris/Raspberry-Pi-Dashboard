<?php
exec("gpio mode 1 out");
exec("gpio toggle 1");
echo (exec("gpio read 1"));
?>