<?php
$articles = [
    [
        "title" => "Are Salesforce Certifications Still Relevant?",
        "author" => "Henry Martin",
        "date" => "January 13, 2025",
        "content" => "Top Voices Join the Great Cert Debate"
    ]
];

header('Content-Type: application/json');
echo json_encode($articles);
?>
