<?php
exec("gpio mode 0 out");
exec("gpio toggle 0");
echo (exec("gpio read 0"));
?>