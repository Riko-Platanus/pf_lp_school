<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $content = $_POST["content"];
    
    // メールの送信処理
    $to = "指定のメールアドレス@example.com"; // 送信先のメールアドレス
    $subject = "お問い合わせがありました";
    $message = "お名前: $name\n";
    $message .= "メールアドレス: $email\n";
    $message .= "内容: $content\n";
    $headers = "From: $email";

    // メール送信
    mail($to, $subject, $message, $headers);
    
    // 送信完了のメッセージを返す
    echo "送信完了しました。";
}
?>
