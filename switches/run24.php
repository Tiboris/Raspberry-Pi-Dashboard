<?php
exec("gpio mode 24 out");
exec("gpio toggle 24");
echo (exec("gpio read 24"));
?>