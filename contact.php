<?php
    if($_POST){
        $formName = $_POST["nome"];
        $formEmail = $_POST["email"];
        $formPhone = $_POST["telefone"];
        $formSubject = $_POST["assunto"];
        $formMessage = $_POST["message"];

        $error = array();
        if(empty($formName))
            $error["nome"] = true;
        if(empty($formEmail))
            $error["email"] = true;
        // if(empty($formPhone))
            // array_push($error, "telefone");
        if(empty($formSubject))
            $error["assunto"] = true;
        if(empty($formMessage))
            $error["message"] = true;

        if(sizeof($error) == 0){
            $headers = 'MIME-Version: 1.0' . "\r\n";
            $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
            $headers .= 'From: ' . $formEmail . "\r\n";
            $headers .= 'Reply-To: ' . $formEmail . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
            $msg = file_get_contents("contact.html");
            $msg = sprintf($formName, $formEmail, $formPhone, $formSubject, $formMessage);
            if (mail("contato@xproglabs.com.br", "Contato no site", $msg, $headers)) {
                $error["error"] = false;
            } else
                $error["error"] = true;
        } else {
            $error["error"] = true;
        }
    } else
        $error["error"] = true;
    echo json_encode($error);
?>
