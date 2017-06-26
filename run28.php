<?php
exec("gpio mode 28 out");
exec("gpio toggle 28");
echo (exec("gpio read 28"));
?>