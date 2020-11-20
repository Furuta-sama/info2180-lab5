<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$stmt = $conn->query("SELECT * FROM countries");

if (isset($_GET['context'])){
  $country = $_GET['country'];
  if($_GET['context']=='cities'){
      $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
      $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

      $code = $results[0]["code"];
      $stmt = $conn->query("SELECT * FROM cities WHERE country_code LIKE '%$code%'");
      $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  echo json_encode($results);
  exit();
}

if (isset($_GET['country'])){
  $country = $_GET['country'];
  $stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
  $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
  
  echo json_encode($results);
  exit();
}


$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($results);

?>