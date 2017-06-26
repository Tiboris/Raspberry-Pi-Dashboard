<?php
exec("gpio mode 29 out");
exec("gpio toggle 29");
echo (exec("gpio read 29"));
?>