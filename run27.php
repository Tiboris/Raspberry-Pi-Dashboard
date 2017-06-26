<?php
exec("gpio mode 27 out");
exec("gpio toggle 27");
echo (exec("gpio read 27"));
?>