<?php
exec("gpio mode 25 out");
exec("gpio toggle 25");
echo (exec("gpio read 25"));
?>