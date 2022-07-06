@extends('layouts/main')


@section('content')

<header class="header">
    {{-- <h1>Missions app</h1> --}}
</header>
<main class="content">
    
    
    <div id="root"></div>

    <script src="{{ mix('js/missions.js') }}"></script>
</main>

@endsection