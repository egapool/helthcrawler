<!DOCTYPE>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>itobot</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
</head>
<body>
    <div id="app"></div>
    <script src="/javascript.php"></script>
    <script>
    $(function(){
        var App = new MyApp.Router();
        Backbone.history.start({ pushState:true});
    });
    </script>
</body>
</html>