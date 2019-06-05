
		function ielts_calculate()
		{
			var iel_listening = document.getElementById('iel_listening').value;
			var iel_reading = document.getElementById('iel_reading').value;
			var iel_speaking = document.getElementById('iel_speaking').value;
			var iel_writing = document.getElementById('iel_writing').value;

			var iel_final = "";

			if (iel_listening == "" || iel_reading == "" || iel_speaking == "" || iel_writing == "" ) {
				iel_final = "all Four values are required";
			} else if (iel_listening <= "4.0" || iel_reading <= "3.0" || iel_speaking <= "3.5" || iel_writing <= "3.5" ) {
				iel_final = "Your CLB is 3 or less.";
			} else if (iel_listening <= "4.5" || iel_reading <= "3.5" || iel_speaking <= "4.5" || iel_writing <= "4.5" ) {
				iel_final = "Your CLB is: 4";
			} else if (iel_listening <= "5.0" || iel_reading <= "4.5" || iel_speaking <= "5.0" || iel_writing <= "5.0" ) {
				iel_final = "Your CLB is: 5";
			} else if (iel_listening <= "5.5" || iel_reading <= "5.5" || iel_speaking <= "5.5" || iel_writing <= "5.5" ) {
				iel_final = "Your CLB is: 6";
			} else if (iel_listening <= "7.0" || iel_reading <= "6.0" || iel_speaking <= "6.0" || iel_writing <= "6.0" ) {
				iel_final = "Your CLB is: 7";
			} else if (iel_listening <= "7.5" || iel_reading <= "6.5" || iel_speaking <= "6.5" || iel_writing <= "6.5" ) {
				iel_final = "Your CLB is: 8";
			} else if (iel_listening <= "9.0" || iel_reading <= "9.0" || iel_speaking <= "9.0" || iel_writing <= "9.0" ) {
				iel_final = "Your CLB is: 9";
			}
			document.getElementById('ielts_final').innerHTML = iel_final;
		}


