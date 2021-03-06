<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<link rel="apple-touch-icon" sizes="76x76" href="img/apple-icon.png" />
	<link rel="icon" type="image/png" href="img/favicon.png" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title>Raspberry Pi Dashboard</title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
	<meta name="viewport" content="width=device-width" />

	<link href="css/bootstrap.css" rel="stylesheet" />

	<link href="css/material-dashboard.css" rel="stylesheet"/>

	<link href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
	<link href='http://fonts.googleapis.com/css?family=Roboto:400,700,300|Material+Icons' rel='stylesheet' type='text/css'>
</head>

<body>

	<div class="wrapper">
		<div class="sidebar" data-color="purple" data-image="img/sidebar-1.jpg">
			<div class="logo">
				<a class="simple-text">
					Techstreat
				</a>
			</div>

			<div class="sidebar-wrapper">
				<ul class="nav">
					<li class="active" id="dashh">
						<a onclick="dashboard()">
							<i class="material-icons">dashboard</i>
							<p>Dashboard</p>
						</a>
					</li>
					<li id="generalIO">
						<a onclick="generalIO()">
							<i class="material-icons">library_books</i>
							<p>GPIO</p>
						</a>
					</li>
					<li style="position: absolute; width: 100%; bottom: 0px; font-size: 15px;">
						<a href="docs" target="blank">
							<i class="material-icons">unarchive</i>
							<p>Personal Drive</p>
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="main-panel">
			<nav class="navbar navbar-transparent navbar-absolute">
				<div class="container-fluid">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<h3 id="navTitle">&nbsp; Dashboard</h3>
					</div>
					<div class="collapse navbar-collapse">
						<ul class="nav navbar-nav navbar-right">
							<li class="dropdown">
								<a class="dropdown-toggle" data-toggle="dropdown">
									<i class="material-icons">notifications</i>
									<span class="notification">5</span>
									<p class="hidden-lg hidden-md">Notifications</p>
								</a>
								<ul class="dropdown-menu">
									<li><a>Mike John responded to your email</a></li>
									<li><a>You have 5 new tasks</a></li>
									<li><a>You're now friend with Andrew</a></li>
									<li><a>Another Notification</a></li>
									<li><a>Another One</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<div class="content">
				<p id="contt">
					
				</p>
			</div>
			<div class="col-md"></div>

			<footer class="footer">
				<div class="container-fluid">
					<nav class="pull-left">
						<ul>
							<li>
								<a onclick="dashboard()">
									Home
								</a>
							</li>
						</ul>
					</nav>
					<p class="copyright pull-right">
						&copy; <script>document.write(new Date().getFullYear())</script> <a>Ekansh Singhal</a>, made with love
					</p>
				</div>
			</footer>
		</div>
	</div>

</body>

<script src="js/jquery-3.2.1.min.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js" type="text/javascript"></script>
<script src="js/material.min.js" type="text/javascript"></script>

<script src="js/chartist.min.js"></script>

<script src="js/bootstrap-notify.js"></script>

<script src="js/material-dashboard.js"></script>

<script src="js/script.js"></script>
</html>