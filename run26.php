<?php
exec("gpio mode 26 out");
exec("gpio toggle 26");
echo (exec("gpio read 26"));
?>