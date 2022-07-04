@extends('layouts.main')


@section('people')

    {{-- <main class="content">
        <h1>People of Interest Page</h1>
        @foreach ($people as $person)
            <p>{{ $person->name }} is {{ $person->occupation }}</p>
            <p>Known Aliases:</p>
            <ul>
                @foreach ($person->aliases as $alias)
                    <li>{{ $alias->alias }}</li>
                @endforeach
                
            </ul>

        @endforeach --}}
    {{-- </main> --}}
    <div id="root"></div>

<script src="{{ mix("js/people-of-interest.js") }}"></script>
@endsection