function gpio() {
	var request = new XMLHttpRequest();
	request.open('GET','read.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp0").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp0").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp0").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp0").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(2) == "1") {
				document.getElementById("gp1").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp1").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp1").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp1").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(4) == "1") {
				document.getElementById("gp2").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp2").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp2").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp2").innerHTML = "Turn ON";
			}
			
			if (request.responseText.charAt(6) == "1") {
				document.getElementById("gp3").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp3").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp3").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp3").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(8) == "1") {
				document.getElementById("gp4").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp4").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp4").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp4").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(10) == "1") {
				document.getElementById("gp5").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp5").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp5").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp5").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(12) == "1") {
				document.getElementById("gp6").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp6").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp6").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp6").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(14) == "1") {
				document.getElementById("gp7").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp7").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp7").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp7").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(16) == "1") {
				document.getElementById("gp21").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp21").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp21").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp21").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(18) == "1") {
				document.getElementById("gp22").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp22").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp22").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp22").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(20) == "1") {
				document.getElementById("gp23").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp23").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp23").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp23").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(22) == "1") {
				document.getElementById("gp24").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp24").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp24").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp24").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(24) == "1") {
				document.getElementById("gp25").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp25").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp25").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp25").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(26) == "1") {
				document.getElementById("gp26").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp26").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp26").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp26").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(28) == "1") {
				document.getElementById("gp27").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp27").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp27").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp27").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(30) == "1") {
				document.getElementById("gp28").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp28").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp28").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp28").innerHTML = "Turn ON";
			}

			if (request.responseText.charAt(32) == "1") {
				document.getElementById("gp29").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp29").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp29").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp29").innerHTML = "Turn ON";
			}

		}
	}
	request.send();
};

function storage(){
	var request = new XMLHttpRequest();
	request.open('GET', 'storage.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			var str = request.responseText.split(" ");
			document.getElementById("storage").innerHTML = Math.round((parseInt(str[12]) / 1024) *100)/100 + "/" + Math.round((parseInt(str[10]) / 1024) *100)/100 + "<small> GB</small>";
		}
	}
	request.send();
}

function ram(){
        var request = new XMLHttpRequest();
        request.open('GET', 'ram.php');
        request.onreadystatechange = function() {
                if((request.status === 200) && (request.readyState === 4)) {
                        var str = request.responseText.split(" ");
                        document.getElementById("ram").innerHTML = str[19] + "/" + str[11] + "<small> MB</small>";
                }
        }
        request.send();
}

function cpu_usage(){
        var request = new XMLHttpRequest();
        request.open('GET', 'cpu_usage.php');
        request.onreadystatechange = function() {
                if((request.status === 200) && (request.readyState === 4)) {
                        var str = request.responseText.split(" ");
			document.getElementById("cpu").innerHTML = str[11].split(",")[0].split(".")[1] + "<small> %</small>";
                }
        }
        request.send();
}

function dashboard(){
	var request = new XMLHttpRequest();
	request.open('GET','dashboard.txt');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			document.getElementById("dashh").setAttribute("class", "active");
			document.getElementById("generalIO").setAttribute("class", "")
			document.getElementById("navTitle").innerHTML = "&nbsp; Dashboard";
			document.getElementById("contt").innerHTML = request.responseText;
			storage();
			ram();
			cpu_usage();
		}
	}
	request.send();
};

function generalIO(){
	var request = new XMLHttpRequest();
	request.open('GET','generalIO.txt');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			document.getElementById("dashh").setAttribute("class", "");
			document.getElementById("generalIO").setAttribute("class", "active")
			document.getElementById("navTitle").innerHTML = "&nbsp; GPIO";
			document.getElementById("contt").innerHTML = request.responseText;
			gpio();
		}
	}
	request.send();

};

document.onload = dashboard();

function gp0(){
	var request = new XMLHttpRequest();
	request.open('GET','run0.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp0").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp0").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp0").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp0").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};


function gp1(){
	var request = new XMLHttpRequest();
	request.open('GET','run1.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp1").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp1").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp1").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp1").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp2(){
	var request = new XMLHttpRequest();
	request.open('GET','run2.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp2").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp2").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp2").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp2").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp3(){
	var request = new XMLHttpRequest();
	request.open('GET','run3.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp3").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp3").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp3").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp3").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp4(){
	var request = new XMLHttpRequest();
	request.open('GET','run4.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp4").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp4").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp4").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp4").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp5(){
	var request = new XMLHttpRequest();
	request.open('GET','run5.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp5").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp5").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp5").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp5").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp6(){
	var request = new XMLHttpRequest();
	request.open('GET','run6.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp6").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp6").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp6").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp6").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp7(){
	var request = new XMLHttpRequest();
	request.open('GET','run7.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp7").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp7").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp7").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp7").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp21(){
	var request = new XMLHttpRequest();
	request.open('GET','run21.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp21").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp21").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp21").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp21").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp22(){
	var request = new XMLHttpRequest();
	request.open('GET','run22.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp22").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp22").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp22").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp22").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp23(){
	var request = new XMLHttpRequest();
	request.open('GET','run23.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp23").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp23").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp23").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp23").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp24(){
	var request = new XMLHttpRequest();
	request.open('GET','run24.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp24").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp24").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp24").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp24").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp25(){
	var request = new XMLHttpRequest();
	request.open('GET','run25.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp25").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp25").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp25").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp25").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp26(){
	var request = new XMLHttpRequest();
	request.open('GET','run26.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp26").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp26").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp26").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp26").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp27(){
	var request = new XMLHttpRequest();
	request.open('GET','run27.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp27").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp27").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp27").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp27").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp28(){
	var request = new XMLHttpRequest();
	request.open('GET','run28.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp28").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp28").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp28").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp28").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
function gp29(){
	var request = new XMLHttpRequest();
	request.open('GET','run29.php');
	request.onreadystatechange = function() {
		if((request.status === 200) && (request.readyState === 4)) {
			if (request.responseText.charAt(0) == "1") {
				document.getElementById("gp29").setAttribute("class", "btn btn-success pull-left");
				document.getElementById("gp29").innerHTML = "Turn OFF";
			}
			else {
				document.getElementById("gp29").setAttribute("class", "btn btn-danger pull-left");
				document.getElementById("gp29").innerHTML = "Turn ON";
			}
		}
	}
	request.send();
};
