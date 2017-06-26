<?php
exec("gpio mode 6 out");
exec("gpio toggle 6");
echo (exec("gpio read 6"));
?>