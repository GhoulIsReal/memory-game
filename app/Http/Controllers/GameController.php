<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class GameController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function show(Game $game)
    {
        if ($game->finished) {
            return redirect()->route('home');
        }

        return Inertia::render('Game', compact('game'));
    }

    public function create()
    {
        $user = Auth::user();
        $game = $user->games()->create();
        return redirect()->route('game', [
            'game' => $game->id
        ]);
    }

    public function finish(Game $game)
    {
        $steps = Request('steps', 0);
        $game->finished = true;
        $game->save();
        $player = auth::user();
        if ($steps < $player->score || $player->score === 0) {
            $player->score = $steps;
        }
        $player->save();
        return redirect('/');
    }
}
