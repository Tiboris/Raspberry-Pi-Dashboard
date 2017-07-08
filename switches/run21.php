<?php
exec("gpio mode 21 out");
exec("gpio toggle 21");
echo (exec("gpio read 21"));
?>