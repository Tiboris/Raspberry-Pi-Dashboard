<?php
exec("gpio mode 5 out");
exec("gpio toggle 5");
echo (exec("gpio read 5"));
?>