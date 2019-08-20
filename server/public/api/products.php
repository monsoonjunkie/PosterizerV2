<?php

  require_once('./functions.php');
  require_once('./db_connection.php');
  
  set_exception_handler('error_handler');
  $id = false;
  if(!empty($_GET["id"])){
    if(!is_numeric($_GET["id"])){
      throw new Exception("id needs to be a number");
    }
    $id = intval($_GET["id"]);
    $whereClause = "WHERE id = $id";
  }else{
    $whereClause = "";
  };

  $query = "SELECT * FROM `products` $whereClause";
  $result = mysqli_query($conn, $query);
  $output = [];


  startup();
  
  if(mysqli_num_rows($result) === 0 && $id !== false){
    throw new Exception ("Invalid ID: " . $id );
  }

  if(!$conn){
    throw new Exception("Connect Error: " . mysqli_connect_error());
  }
  if(!$result){
    throw new Exception("Errormessage: " . mysqli_connect_error());
  };


  while ($row = mysqli_fetch_assoc($result)) {
    $row['price'] = intval($row['price']);
    $row['id'] = intval($row['id']);
    array_push($output, $row);
};
  if($id){
    $output = $output[0];
  }
  $jsonOutput = json_encode($output);
  print $jsonOutput;

?>
