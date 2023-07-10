<?php
require 'path/to/PHPMailerAutoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check which form is submitted
    if (isset($_POST["form"])) {
        $form = $_POST["form"];
        
        // Retrieve form data based on the submitted form
        if ($form == 1) {
            // Form 1 fields
            $fullName = $_POST["fullName"];
            $email = $_POST["email"];
            $phone = $_POST["phone"];
            $carmodel = $_POST["carmodel"];
            $platenumber = $_POST["platenumber"];
            
            // Validate and sanitize the data (optional)
            $fullName = htmlspecialchars($fullName);
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);
            $phone = htmlspecialchars($phone);
            $carmodel = htmlspecialchars($carmodel);
            $platenumber = htmlspecialchars($platenumber);

            // Create a new PHPMailer instance for Form 1
            $mail = new PHPMailer();
    
            // Configure SMTP settings for Form 1
            $mail->isSMTP();
            $mail->Host = 'calciteX@pendler.co.in'; // Replace with your SMTP server address
            $mail->Port = 465; // Replace with the appropriate port number
            $mail->SMTPAuth = true;
            $mail->Username = 'calciteX@pendler.co.in'; // Replace with your SMTP username
            $mail->Password = 'pendler@HOSTINGER2023'; // Replace with your SMTP password
            
            // Set email parameters for Form 1
            $mail->setFrom($email, $fullName); // Replace with the sender's email address and name
            $mail->addAddress('pendlerofficial1@gmail.com'); // Replace with the form maker's email address
            $mail->Subject = 'Form 1 Submission';
            $mail->Body = "Full Name: $fullName\n\nEmail: $email\n\nPhone Number: $phone\n\nCar Model: $carmodel\n\nPlate Number: $platenumber";
            
            // Send the email for Form 1
            if ($mail->send()) {
                echo "Thank you for your Form 1 submission!";
            } else {
                echo "Sorry, there was an error sending your Form 1 submission.";
            }
        } elseif ($form == 2) {
            // Form 2 fields
            $name = $_POST["name"];
            $email = $_POST["email"];
            $phone = $_POST["phone"];
            $city = $_POST["city"];
            
            // Validate and sanitize the data (optional)
            $name = htmlspecialchars($name);
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);
            $phone = htmlspecialchars($phone);
            $city = htmlspecialchars($city);        

            // Create a new PHPMailer instance for Form 2
            $mail = new PHPMailer();
    
            // Configure SMTP settings for Form 2
            $mail->isSMTP();
            $mail->Host = 'calciteX@pendler.co.in'; // Replace with your SMTP server address
            $mail->Port = 587; // Replace with the appropriate port number
            $mail->SMTPAuth = true;
            $mail->Username = 'calciteX@pendler.co.in'; // Replace with your SMTP username
            $mail->Password = 'pendler@HOSTINGER2023'; // Replace with your SMTP password
            
            // Set email parameters for Form 2
            $mail->setFrom($email, $name); // Replace with the sender's email address and name
            $mail->addAddress('pendlerofficial1@gmail.com'); // Replace with the form maker's email address
            $mail->Subject = 'Form 3 Submission';
            $mail->Body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";
            
            // Send the email for Form 2
            if ($mail->send()) {
                echo "Thank you for your Form 2 submission!";
            } else {
                echo "Sorry, there was an error sending your Form 2 submission.";
            }
        } else ($form == 3) {
            // Form 3 fields
            $name = $_POST["name"];
            $email = $_POST["email"];
            $phone = $_POST["phone"];
            $message = $_POST["message"];
            
            // Validate and sanitize the data (optional)
            $name = htmlspecialchars($name);
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);
            $phone = htmlspecialchars($phone);
            $message = htmlspecialchars($message);
            
            // Create a new PHPMailer instance for Form 3
            $mail = new PHPMailer();
    
            // Configure SMTP settings for Form 3
            $mail->isSMTP();
            $mail->Host = 'calciteX@pendler.co.in'; // Replace with your SMTP server address
            $mail->Port = 587; // Replace with the appropriate port number
            $mail->SMTPAuth = true;
            $mail->Username = 'calciteX@pendler.co.in'; // Replace with your SMTP username
            $mail->Password = 'pendler@HOSTINGER2023'; // Replace with your SMTP password
            
            // Set email parameters for Form 3
            $mail->setFrom($email, $name); // Replace with the sender's email address and name
            $mail->addAddress('pendlerofficial1@gmail.com'); // Replace with the form maker's email address
            $mail->Subject = 'Form 3 Submission';
            $mail->Body = "Name: $name\n\nEmail: $email\n\nPhone Number: $phone\n\nMessage:\n$message";
            
            // Send the email for Form 3
            if ($mail->send()) {
                echo "Thank you for your Form 3 submission!";
            } else {
                echo "Sorry, there was an error sending your Form 3 submission.";
            }
        }
    }
}
?>
