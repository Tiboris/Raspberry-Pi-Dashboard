<?php
exec("gpio mode 22 out");
exec("gpio toggle 22");
echo (exec("gpio read 22"));
?>