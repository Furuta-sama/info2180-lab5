<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$stmt = $conn->query("SELECT * FROM countries");


if (isset($_GET['country'])){
  $country = $_GET['country'];
  $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
  $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

  foreach ($results as $row){
    print($row['name'] . ' is ruled by ' . $row['head_of_state']);
  }

  exit();
}



$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

/*$table = "";

$table.= "<table border='1'>
<tr>
<th>Name</th>
<th>Continent</th>
<th>Independence Year</th>
<th>Head of State</th>
</tr>"

?>

<?php foreach ($results as $row):{
  $table.=' <tr>
  <td>'.$row["name"].'</td>
  <td>'.$row["continent"].'</td>
  <td>'.$row["independence_year"].'</td>
  <td>'.$row["head_of_state"].'</td>
  </tr>';

  
}
endforeach;
$table.='</table>';


echo $table;
*/


echo json_encode($results);

?>