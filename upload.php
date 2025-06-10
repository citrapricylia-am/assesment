<?php
header('Content-Type: application/json');

$targetDir = "uploads/";
if (!is_dir($targetDir)) {
    mkdir($targetDir, 0755, true);
}

if (isset($_FILES["file"])) {
    $file = $_FILES["file"];
    $fileName = basename($file["name"]);
    $targetFilePath = $targetDir . $fileName;
    $fileType = strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));

    $allowedTypes = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png'];
    if (in_array($fileType, $allowedTypes)) {
        if (move_uploaded_file($file["tmp_name"], $targetFilePath)) {
            $fileURL = (isset($_SERVER['HTTPS']) ? "https" : "http") . ":/assesment/" . $_SERVER['HTTP_HOST'] . "/" . $targetFilePath;
            echo json_encode(["success" => true, "url" => $fileURL]);
        } else {
            echo json_encode(["success" => false, "error" => "Gagal memindahkan file."]);
        }
    } else {
        echo json_encode(["success" => false, "error" => "Tipe file tidak didukung."]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Tidak ada file yang diupload."]);
}
?>
