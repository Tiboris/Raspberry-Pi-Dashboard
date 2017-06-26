<?php
exec("gpio mode 4 out");
exec("gpio toggle 4");
echo (exec("gpio read 4"));
?>