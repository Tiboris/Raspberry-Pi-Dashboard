<?php
exec("gpio mode 2 out");
exec("gpio toggle 2");
echo (exec("gpio read 2"));
?>