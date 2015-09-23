<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>itobot ~ respect for Mr.Ito~</title>
<meta charset="utf-8">
<meta name="description" content="I am Ito!hoooo!!">
<meta name="author" content="ito">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="">
<?php echo $css ?>
</head>
<body>
    <div id="app"></div>
    <?php echo $js ?>
    <script>
    $(function(){
        var App = new MyApp.Router();
        Backbone.history.start({pushState:true});
    });
    </script>
    <script src="/assets/js/require_config.js"></script>
    <script data-main="/assets/js/main.js" src="/assets/js/vendor/require.js"></script>
</body>
</html>