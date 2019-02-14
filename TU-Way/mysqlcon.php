<?php
$host="localhost";
$port=3306;
$socket="";
$user="root";
$password="al6762";
$dbname="tuway";

$con = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

//$con->close();
//Can select Student ID, names, and more later for login info
//Would add where if term is between current date of fall for the year or spring for the year so that it filters to proper term classes
$sql = "SELECT Course, , Building, Room, Days, Time  FROM courseinfo ORDER BY Course LIMIT 10";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "Course: " . $row["Course"]. " -Building: " . $row["Building"]. " -Room " . $row["Room"]. " -Days " . $row["Days"]. " -Time " . $row["Time"]."<br>";
    }
} else {
    echo "0 results";
}

mysqli_close($conn);
?>
