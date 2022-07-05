<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="{{mix('/css/app.css')}}">
    
</head>
<body>
    <div class="nav-panel">
        <img class="seal" src="https://classes.codingbootcamp.cz/assets/classes/1404/mi6-seal.png" alt="MI6 Seal">
        <a href="/">Home</a>
        <a href="people_of_interest">People of Interest</a>
        <div class="nav-control">
            <button><</button>
        </div>
        {{-- <div class="search"> 
            <input type="text" name="search" placeholder="Search...">
        </div> --}}
    </div>
    
        @yield('content')
        @yield('people')

        <div id="root"></div>
    

<script>
    const button = document.querySelector('.nav-control button')
    const navPanel = document.querySelector('.nav-panel')
        
    button.addEventListener('click', () => {
        navPanel.classList.toggle('hidden')
        button.textContent = button.textContent == '>' ? '<' : '>'
        })
    </script>
</body>
</html>